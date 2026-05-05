import { Component, input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-tooltip-button',
  standalone: true,
  imports: [],
  templateUrl: './tooltip-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipButton {
  tooltipText = input<string>('');
}
