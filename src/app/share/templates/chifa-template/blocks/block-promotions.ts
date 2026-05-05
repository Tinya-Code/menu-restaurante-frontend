import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { PromotionCardComponent, Promotion } from '../components/promotion-card/promotion-card';
import { ChifaSectionTitleComponent } from '../components/chifa-section-title/chifa-section-title.component';
import { SliderComponent } from '../../../components/slider/slider.component';

@Component({
  selector: 'app-block-promotions',
  standalone: true,
  imports: [PromotionCardComponent, ChifaSectionTitleComponent, SliderComponent],
  template: `
    @if (promotions().length > 0) {
      <section class="relative py-12 px-8">
        <app-chifa-section-title [title]="title()" [description]="description()">
        </app-chifa-section-title>

        <app-slider [showArrows]="true" [autoSlide]="false">
          @for (promotion of promotions(); track promotion.id) {
            <app-promotion-card [promotion]="promotion" (addToCart)="addToCart.emit($event)">
            </app-promotion-card>
          }
        </app-slider>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockPromotionsComponent {
  promotions = input.required<Promotion[]>();
  title = input<string>('Promociones');
  description = input<string>('Aprovecha nuestras ofertas especiales');
  addToCart = output<Promotion>();
}
