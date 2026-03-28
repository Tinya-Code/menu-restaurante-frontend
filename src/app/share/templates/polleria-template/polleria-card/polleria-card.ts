import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Flame, ShoppingBag } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-polleria-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe],
  templateUrl: './polleria-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaCardComponent {
  product = input.required<Product>();
  Flame = Flame;
  ShoppingBag = ShoppingBag;
}
