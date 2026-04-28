import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { PrecioPipe } from '../../../../pipes/precio.pipe';
import { AddButtonComponent } from '../add-button/add-button.component';

export interface Promotion {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

@Component({
  selector: 'app-promotion-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe, AddButtonComponent],
  templateUrl: './promotion-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionCardComponent {
  promotion = input.required<Promotion>();
  addToCart = output<Promotion>();

  Plus = Plus;
}
