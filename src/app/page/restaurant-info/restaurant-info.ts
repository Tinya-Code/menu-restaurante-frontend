import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArrowLeft, Clock, Flame, Globe, LucideAngularModule, MapPin, Phone } from 'lucide-angular';
import { TEMPLATE_IDS } from '../../core/constants/template.constants';
import { MockDataService } from '../../core/services/mock-data.service';
import { RestaurantService } from '../../core/services/restaurant.service';

@Component({
  selector: 'app-restaurant-info',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './restaurant-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantInfoComponent implements OnInit {
  private readonly restaurantService = inject(RestaurantService);
  private readonly mockDataService = inject(MockDataService);
  private readonly route = inject(ActivatedRoute);

  isLoading = signal(true);

  restaurantName = computed(() => this.restaurantService.restaurant()?.name ?? 'Restaurante');
  restaurantSlug = signal<string>('');

  // Theme detection based on template_id
  readonly TEMPLATE_IDS = TEMPLATE_IDS;
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

  // Icons
  Clock = Clock;
  MapPin = MapPin;
  Phone = Phone;
  Globe = Globe;
  ArrowLeft = ArrowLeft;
  Flame = Flame;

  // Business hours data from service
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
      day: dayMap[key] || key,
      hours: value.isOpen ? `${value.open} - ${value.close}` : 'Cerrado',
      isOpen: value.isOpen,
    }));
  });

  // Contact info from service
  contactInfo = computed(() => {
    const restaurant = this.restaurantService.restaurant();
    return {
      address: restaurant?.address ?? 'Dirección no disponible',
      phones: restaurant?.phone ? [restaurant.phone] : [],
      whatsapp: restaurant?.phone ?? '',
    };
  });

  // Social media from service
  socialMedia = computed(() => {
    const sm = this.restaurantService.socialMedia();
    if (!sm) return [];
    const result = [];
    if (sm.facebook) result.push({ name: 'Facebook', icon: 'facebook', url: sm.facebook });
    if (sm.instagram) result.push({ name: 'Instagram', icon: 'instagram', url: sm.instagram });
    if (sm.tiktok) result.push({ name: 'TikTok', icon: 'tiktok', url: sm.tiktok });
    return result;
  });

  // Description from settings
  description = computed(() => this.restaurantService.settings()?.description ?? '');

  // Tags from settings
  tags = computed(() => this.restaurantService.settings()?.tags ?? []);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || 'restaurante-gran-gourmet-1';
      this.restaurantSlug.set(slug);
      this.isLoading.set(true);

      // Cargar datos del restaurante
      this.mockDataService.getRestaurantData(slug).subscribe({
        next: (res) => {
          this.restaurantService.setRestaurantData(res);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error loading restaurant info:', err);
          this.isLoading.set(false);
        },
      });
    });
  }
}