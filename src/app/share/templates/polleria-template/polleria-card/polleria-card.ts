import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Flame, LucideAngularModule, ShoppingBag } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-polleria-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe],
  templateUrl: './polleria-card.html',
  styleUrls: ['./polleria-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaCardComponent {
  product = input.required<Product>();
  Flame = Flame;
  ShoppingBag = ShoppingBag;
}
