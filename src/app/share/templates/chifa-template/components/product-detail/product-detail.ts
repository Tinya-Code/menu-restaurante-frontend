import { ChangeDetectionStrategy, Component, input, output, signal, inject } from '@angular/core';

import { LucideAngularModule, ShoppingBag, Plus, Minus, X, MessageCircle } from 'lucide-angular';
import { Product } from '../../../../../core/models/product.model';
import { PrecioPipe } from '../../../../pipes/precio.pipe';
import { DataStoreService } from '../../../../../core/services/data-store.service';

@Component({
  selector: 'app-chifa-product-detail',
  standalone: true,
  imports: [LucideAngularModule, PrecioPipe],
  templateUrl: './product-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaProductDetail {
  product = input.required<Product>();
  addToCart = output<{ product: Product, quantity: number }>();
  close = output<void>();

  private readonly dataStore = inject(DataStoreService);
  
  quantity = signal(1);
  ShoppingBag = ShoppingBag;
  Plus = Plus;
  Minus = Minus;
  X = X;
  MessageCircle = MessageCircle;

  increase() { this.quantity.update(q => q + 1); }
  decrease() { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
  onAddToCart() { this.addToCart.emit({ product: this.product(), quantity: this.quantity() }); }

  orderViaWhatsApp() {
    const settings = this.dataStore.activeSettings();
    const phone = settings?.whatsapp_config?.number;
    if (!phone) return;

    const message = `Hola, quisiera pedir ${this.quantity()}x ${this.product().name} del menú Chifa.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
