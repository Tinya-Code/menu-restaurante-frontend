import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Utensils, Star } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-chifa-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe],
  templateUrl: './chifa-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaCardComponent {
  product = input.required<Product>();
  Utensils = Utensils;
  Star = Star;
}
