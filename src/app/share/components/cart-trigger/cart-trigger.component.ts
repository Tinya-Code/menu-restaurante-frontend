import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../../core/services/cart.service';
import { PrecioPipe } from '../../pipes/precio.pipe';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { LucideAngularModule, ArrowRight, Clock } from 'lucide-angular';
import { BusinessHoursService } from '../../../core/services/business-hours.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart-trigger',
  standalone: true,
  imports: [CommonModule, PrecioPipe, LucideAngularModule, ModalComponent, TimeFormatPipe],
  templateUrl: './cart-trigger.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTriggerComponent {
  private readonly _cart = inject(Cart);
  private readonly _businessHours = inject(BusinessHoursService);

  readonly ArrowRight = ArrowRight;
  readonly Clock = Clock;

  // Exposición de signals del servicio
  readonly count = this._cart.count;
  readonly total = this._cart.total;
  readonly isEmpty = this._cart.isEmpty;
  readonly isRestaurandClosed = this._cart.isBusinessClosed;
  readonly businessHours = this._businessHours.hours;

  /**
   * Abre el carrito si está abierto el negocio.
   */
  openCart(): void {
    if (!this._businessHours.isOpen()) {
      this._cart.addItem({ id: 'dummy' } as any, 0); // Dispara el modal global
      return;
    }
    this._cart.open();
  }

  /**
   * Cierra el modal de negocio cerrado.
   */
  closeClosedModal(): void {
    this._cart.closeBusinessClosedModal();
  }
}
