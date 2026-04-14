import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipButton {
  tooltipText = input<string>('');
}
