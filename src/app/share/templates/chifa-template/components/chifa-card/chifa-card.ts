import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ThumbsUp, Utensils, Star, Plus } from 'lucide-angular';
import { Product } from '../../../../../core/models/product.model';
import { PrecioPipe } from '../../../../pipes/precio.pipe';
import { TooltipButton } from '../../../../components/tooltip-button/tooltip-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-chifa-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe, TooltipButton, AddButtonComponent],
  templateUrl: './chifa-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaCardComponent {
  product = input.required<Product>();
  productClick = output<Product>();
  addToCart = output<Product>();

  Utensils = Utensils;
  Star = Star;
  Plus = Plus;
  ThumbsUp = ThumbsUp;

  onBuyNow(event: Event) {
    event.stopPropagation();
    this.productClick.emit(this.product());
  }
}
