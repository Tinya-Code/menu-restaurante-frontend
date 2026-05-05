import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';

import { LucideAngularModule, Zap, ShoppingCart, Facebook, Instagram, Twitter } from 'lucide-angular';
import { BusinessHoursService } from '../../../../core/services/business-hours.service';
import { RestaurantService } from '../../../../core/services/restaurant.service';
import { TimeFormatPipe } from '../../../pipes/time-format.pipe';

@Component({
  selector: 'app-comida-rapida-footer',
  standalone: true,
  imports: [LucideAngularModule, TimeFormatPipe],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComidaRapidaFooter {
  private readonly _businessHours = inject(BusinessHoursService);
  private readonly _restaurantService = inject(RestaurantService);

  readonly Zap = Zap;
  readonly ShoppingCart = ShoppingCart;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;

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
}
