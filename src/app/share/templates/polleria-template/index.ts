import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { Border } from './border/border';
import { PolleriaFooter } from './footer/footer';
import { PolleriaHeader } from './header/header';
import { PolleriaCard } from './polleria-card/polleria-card';
import { LayoutScaleComponent } from '../../layout/layout-scale/layout-scale';
@Component({
  selector: 'app-polleria-template',
  imports: [
    CommonModule,
    PolleriaCard,
    PolleriaHeader,
    PolleriaFooter,
    LayoutScaleComponent
  ],
  templateUrl: './index.html',
  styleUrl: './index.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  templateData = input<any>();
  productClick = output<Product>();
}
