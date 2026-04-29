import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  ViewChild,
  input,
  output,
  DestroyRef,
} from '@angular/core';
import { LocationService, LocationCoordinates } from '../../services/location.service';

@Component({
  selector: 'app-map',
  standalone: true,
  template: ` <div #mapContainer class="w-full h-full z-10"></div> `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
})
export class MapComponent implements AfterViewInit {
  private locationService = inject(LocationService);
  private destroyRef = inject(DestroyRef);

  @ViewChild('mapContainer') mapContainer!: ElementRef;

  // Inputs
  readonly initialCoords = input<LocationCoordinates>({ lat: -12.046374, lng: -77.042793 });

  // Outputs
  readonly locationChanged = output<LocationCoordinates>();

  ngAfterViewInit() {
    this.initMap();

    // Cleanup on destroy
    this.destroyRef.onDestroy(() => {
      this.locationService.destroy();
    });
  }

  private initMap() {
    const coords = this.initialCoords();

    this.locationService.initMap(this.mapContainer.nativeElement, coords);
    this.locationService.addMarker(coords, (newCoords) => {
      this.locationChanged.emit(newCoords);
    });

    // Try to get user's current location
    this.locationService.getCurrentLocation(
      (userCoords) => {
        this.locationService.updateMarkerPosition(userCoords, 15);
        this.locationChanged.emit(userCoords);
      },
      (error) => {
        console.error('Error getting user location:', error);
      },
    );
  }
}
