import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { PrecioPipe } from '../../../../pipes/precio.pipe';
import { AddButtonComponent } from '../add-button/add-button.component';

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-combo-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe, AddButtonComponent],
  templateUrl: './combo-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboCardComponent {
  combo = input.required<Combo>();
  addToCart = output<Combo>();

  Plus = Plus;
}
