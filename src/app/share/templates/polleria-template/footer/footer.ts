import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  Clock,
  Facebook,
  Flame,
  Instagram,
  LucideAngularModule,
  Mail,
  Music2,
} from 'lucide-angular';
import { BusinessHoursService } from '../../../../core/services/business-hours.service';
import { RestaurantService } from '../../../../core/services/restaurant.service';

@Component({
  selector: 'app-polleria-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaFooter {
  private readonly _businessHours = inject(BusinessHoursService);
  private readonly _restaurantService = inject(RestaurantService);

  readonly Flame = Flame;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Tiktok = Music2;
  readonly MessageCircle = Mail;
  readonly ChefHat = Flame;
  readonly Clock = Clock;

  readonly isOpen = this._businessHours.isOpen;
  readonly todayHours = computed(() => {
    const hours = this._businessHours.hours() as Record<string, any>;
    if (!hours) return null;
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = dayNames[new Date().getDay()];
    return hours[today];
  });

  readonly socialMedia = this._restaurantService.socialMedia;
  readonly socialMediaSafe = computed(() => this.socialMedia() as any);

  // Restaurant name from data
  readonly restaurantName = computed(
    () => this._restaurantService.restaurant()?.name ?? 'Restaurante'
  );

  // Current year for copyright
  readonly currentYear = computed(() => new Date().getFullYear());

  // Helper to extract handle from social media URL or return the handle
  readonly getSocialHandle = (url: string): string => {
    if (!url) return '';
    // If it's already a handle (starts with @), return it
    if (url.startsWith('@')) return url;
    // Extract handle from URL
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/').filter((p) => p);
      return pathParts.length > 0 ? pathParts[pathParts.length - 1] : url;
    } catch {
      // If not a valid URL, return as is
      return url;
    }
  };
}
