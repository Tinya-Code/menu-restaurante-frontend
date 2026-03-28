import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Zap, ShoppingBag } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-comida-rapida-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe],
  templateUrl: './comida-rapida-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComidaRapidaCardComponent {
  product = input.required<Product>();
  Zap = Zap;
  ShoppingBag = ShoppingBag;
}
