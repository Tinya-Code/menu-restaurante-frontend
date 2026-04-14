import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus, Check } from 'lucide-angular';
import { Product } from '../../../../core/models/product.model';
import { PrecioPipe } from '../../../pipes/precio.pipe';

@Component({
  selector: 'app-cevicheria-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PrecioPipe],
  templateUrl: './cevicheria-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaCardComponent {
  readonly plus = Plus;
  readonly check = Check;
  product = input.required<Product>();

  // Estado de animación para el botón de agregar al carrito
  isAdding = signal(false);

  addToCart(): void {
    this.isAdding.set(true);
    // Simular un retraso de 1 segundo antes de restablecer el estado
    setTimeout(() => {
      this.isAdding.set(false);
    }, 800);
  }
}
