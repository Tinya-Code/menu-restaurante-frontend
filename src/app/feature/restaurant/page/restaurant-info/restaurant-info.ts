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
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  LucideAngularModule,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Twitter,
} from 'lucide-angular';
import { TEMPLATE_IDS } from '../../../../core/constants/template.constants';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantService as CoreRestaurantService } from '../../../../core/services/restaurant.service';
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
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './restaurant-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly restaurantDataService = inject(RestaurantService);
  private readonly restaurantService = inject(CoreRestaurantService);
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
  readonly MapPin = MapPin;
  readonly Clock = Clock;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;
  readonly MessageCircle = MessageCircle;
  readonly ExternalLink = ExternalLink;
  readonly Share2 = Share2;

  restaurantName = computed(() => this.restaurantService.restaurant()?.name ?? 'Restaurante');
  restaurantSlug = signal<string>('');
  themeParam = signal<string>('');

  themeClass = computed(() => {
    // Prioridad 1: Parámetro de la URL
    if (this.themeParam()) {
      return this.themeParam().startsWith('theme-') ? this.themeParam() : `theme-${this.themeParam()}`;
    }

    // Prioridad 2: Datos del restaurante
    const templateId = this.restaurantService.restaurant()?.template_id;
    if (templateId) {
      return `theme-${templateId}`;
    }

    return 'theme-polleria';
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
      const theme = params.get('theme') ?? '';
      this.restaurantSlug.set(slug);
      this.themeParam.set(theme);
      this.isLoading.set(true);
      this.destroyMap();

      this.restaurantDataService.getRestaurantData(slug).subscribe({
        next: (res: any) => {
          this.restaurantService.setRestaurantData(res);
          this.isLoading.set(false);
          this.mapReady = true;
          setTimeout(() => this.tryInitMap(), 0);
        },
        error: (err: any) => {
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
