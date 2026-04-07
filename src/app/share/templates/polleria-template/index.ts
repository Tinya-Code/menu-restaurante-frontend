import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { PolleriaFooter } from './footer/footer';
import { PolleriaHeader } from './header/header';
import { PolleriaCardComponent } from './polleria-card/polleria-card';

@Component({
  selector: 'app-polleria-template',
  standalone: true,
  imports: [CommonModule, PolleriaCardComponent, PolleriaHeader, PolleriaFooter],
  templateUrl: './index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
}
