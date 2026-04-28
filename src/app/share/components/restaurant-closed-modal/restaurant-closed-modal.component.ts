import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Clock } from 'lucide-angular';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-restaurant-closed-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TimeFormatPipe, ModalComponent],
  templateUrl: './restaurant-closed-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantClosedModalComponent {
  isOpen = input.required<boolean>();
  businessHours = input<any>();
  close = output<void>();

  Clock = Clock;

  readonly days = [
    { key: 'monday', label: 'Lunes' },
    { key: 'tuesday', label: 'Martes' },
    { key: 'wednesday', label: 'Miércoles' },
    { key: 'thursday', label: 'Jueves' },
    { key: 'friday', label: 'Viernes' },
    { key: 'saturday', label: 'Sábado' },
    { key: 'sunday', label: 'Domingo' }
  ];

  onClose(): void {
    this.close.emit();
  }
}
