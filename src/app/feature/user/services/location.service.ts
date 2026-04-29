import { Injectable, inject, DestroyRef } from '@angular/core';
import { signal } from '@angular/core';
import * as L from 'leaflet';

export interface LocationCoordinates {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private destroyRef = inject(DestroyRef);

  private _map = signal<L.Map | null>(null);
  private _marker = signal<L.Marker | null>(null);

  readonly map = this._map.asReadonly();
  readonly marker = this._marker.asReadonly();

  private readonly DEFAULT_LAT = -12.046374;
  private readonly DEFAULT_LNG = -77.042793;
  private readonly DEFAULT_ZOOM = 13;

  initMap(container: HTMLElement, initialCoords?: LocationCoordinates): L.Map {
    const lat = initialCoords?.lat ?? this.DEFAULT_LAT;
    const lng = initialCoords?.lng ?? this.DEFAULT_LNG;

    const map = L.map(container).setView([lat, lng], this.DEFAULT_ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    this._map.set(map);
    return map;
  }

  addMarker(
    coords: LocationCoordinates,
    onDragEnd?: (coords: LocationCoordinates) => void,
  ): L.Marker {
    const map = this._map();
    if (!map) {
      throw new Error('Map must be initialized before adding a marker');
    }

    const marker = L.marker([coords.lat, coords.lng], { draggable: true }).addTo(map);

    if (onDragEnd) {
      marker.on('dragend', () => {
        const position = marker.getLatLng();
        onDragEnd({ lat: position.lat, lng: position.lng });
      });
    }

    this._marker.set(marker);
    return marker;
  }

  updateMarkerPosition(coords: LocationCoordinates, zoom: number = 15): void {
    const map = this._map();
    const marker = this._marker();

    if (map && marker) {
      marker.setLatLng([coords.lat, coords.lng]);
      map.setView([coords.lat, coords.lng], zoom);
    }
  }

  getCurrentLocation(
    onSuccess: (coords: LocationCoordinates) => void,
    onError?: (error: GeolocationPositionError) => void,
  ): void {
    if (!navigator.geolocation) {
      onError?.({
        code: 0,
        message: 'Geolocation not supported by this browser',
      } as GeolocationPositionError);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onSuccess({ lat: latitude, lng: longitude });
      },
      (error) => {
        onError?.(error);
      },
    );
  }
  destroy(): void {
    const map = this._map();
    if (map) {
      map.remove();
      this._map.set(null);
    }
    this._marker.set(null);
  }
}
