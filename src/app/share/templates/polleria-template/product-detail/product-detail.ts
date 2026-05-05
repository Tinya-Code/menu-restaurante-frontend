import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

import { LucideAngularModule, ShoppingBag, Plus, Minus, X } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-polleria-product-detail',
  standalone: true,
  imports: [LucideAngularModule, PrecioPipe],
  templateUrl: './product-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaProductDetail {
  product = input.required<Product>();
  addToCart = output<{ product: Product, quantity: number }>();
  close = output<void>();

  quantity = signal(1);
  ShoppingBag = ShoppingBag;
  Plus = Plus;
  Minus = Minus;
  X = X;

  increase() { this.quantity.update(q => q + 1); }
  decrease() { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
  onAddToCart() { this.addToCart.emit({ product: this.product(), quantity: this.quantity() }); }
}
