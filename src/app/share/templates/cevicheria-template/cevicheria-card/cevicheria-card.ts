import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LucideAngularModule , Plus} from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-cevicheria-card',
  standalone: true,
  imports: [LucideAngularModule, PrecioPipe],
  templateUrl: './cevicheria-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaCardComponent {
  readonly plus = Plus;
  product = input.required<Product>();
}
