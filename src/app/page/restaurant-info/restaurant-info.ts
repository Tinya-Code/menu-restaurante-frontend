import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArrowLeft, Globe, LucideAngularModule, Phone } from 'lucide-angular';
import { TEMPLATE_IDS } from '../../core/constants/template.constants';
import { MockDataService } from '../../core/services/mock-data.service';
import { RestaurantService } from '../../core/services/restaurant.service';
import * as L from 'leaflet';

L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

@Component({
  selector: 'app-restaurant-info',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './restaurant-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly restaurantService = inject(RestaurantService);
  private readonly mockDataService = inject(MockDataService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('mapContainer') mapContainer?: ElementRef<HTMLDivElement>;

  isLoading = signal(true);

  private map?: L.Map;
  private marker?: L.Marker;
  private mapReady = false;

  readonly ArrowLeft = ArrowLeft;
  readonly Phone = Phone;
  readonly Globe = Globe;

  restaurantName = computed(() => this.restaurantService.restaurant()?.name ?? 'Restaurante');
  restaurantSlug = signal<string>('');

  themeClass = computed(() => {
    const templateId = this.restaurantService.restaurant()?.template_id;
    switch (templateId) {
      case TEMPLATE_IDS.POLLERIA:
        return 'theme-polleria';
      case TEMPLATE_IDS.CHIFA:
        return 'theme-chifa';
      case TEMPLATE_IDS.CEVICHERIA:
        return 'theme-cevicheria';
      case TEMPLATE_IDS.COMIDA_RAPIDA:
        return 'theme-comida-rapida';
      default:
        return 'theme-polleria';
    }
  });

  location = computed(() => this.restaurantService.restaurant()?.location ?? null);

  businessHours = computed(() => {
    const hours = this.restaurantService.businessHours();
    if (!hours) return [];
    const dayMap: Record<string, string> = {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    };
    return Object.entries(hours).map(([key, value]: [string, any]) => ({
      day: dayMap[key] ?? key,
      hours: value.isOpen ? `${value.open} - ${value.close}` : 'Cerrado',
      isOpen: value.isOpen as boolean,
    }));
  });

  contactInfo = computed(() => {
    const restaurant = this.restaurantService.restaurant();
    return {
      address: restaurant?.address ?? 'Dirección no disponible',
      phones: restaurant?.phone ? [restaurant.phone] : [],
      whatsapp: restaurant?.phone ?? '',
    };
  });

  socialMedia = computed(() => {
    const sm = this.restaurantService.socialMedia();
    if (!sm) return [];
    const result: { name: string; url: string }[] = [];
    if (sm.facebook) result.push({ name: 'Facebook', url: sm.facebook });
    if (sm.instagram) result.push({ name: 'Instagram', url: sm.instagram });
    if (sm.tiktok) result.push({ name: 'TikTok', url: sm.tiktok });
    return result;
  });

  description = computed(() => this.restaurantService.settings()?.description ?? '');
  tags = computed(() => this.restaurantService.settings()?.tags ?? []);

  ngOnInit(): void {
    const sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? 'restaurante-gran-gourmet-1';
      this.restaurantSlug.set(slug);
      this.isLoading.set(true);
      this.destroyMap();

      this.mockDataService.getRestaurantData(slug).subscribe({
        next: (res) => {
          this.restaurantService.setRestaurantData(res);
          this.isLoading.set(false);
          this.mapReady = true;
          setTimeout(() => this.tryInitMap(), 0);
        },
        error: (err) => {
          console.error('Error loading restaurant info:', err);
          this.isLoading.set(false);
        },
      });
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  ngAfterViewInit(): void {
    if (this.mapReady) {
      setTimeout(() => this.tryInitMap(), 0);
    }
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

  private tryInitMap(): void {
    const loc = this.location();
    if (!loc || !this.mapContainer?.nativeElement || this.map) return;
    this.initMap(loc);
  }

  private initMap(loc: { lat: number; lng: number }): void {
    this.map = L.map(this.mapContainer!.nativeElement, {
      center: [loc.lat, loc.lng],
      zoom: 15,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

    this.marker = L.marker([loc.lat, loc.lng])
      .addTo(this.map)
      .bindPopup(this.restaurantName())
      .openPopup();

    setTimeout(() => this.map?.invalidateSize(), 100);
  }

  private destroyMap(): void {
    if (this.map) {
      this.map.remove();
      this.map = undefined;
      this.marker = undefined;
    }
  }
}
