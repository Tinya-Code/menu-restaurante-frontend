import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonComponent {
  // Button text
  text = input<string>('Agregar');

  // Button size variant
  size = input<'full' | 'compact'>('full');

  // Additional CSS classes for customization
  customClass = input<string>('');

  // Click event
  clicked = output<Event>();

  handleClick(event: Event) {
    event.stopPropagation();
    this.clicked.emit(event);
  }

  // Get classes based on size variant
  get sizeClasses(): string {
    return this.size() === 'full' ? 'w-full px-5 py-3 text-md' : 'px-3 py-1 text-md';
  }
}
