import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chifa-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (variant() === 'category') {
      <div class="flex items-center z-10  gap-4 mb-8">
        <h3
          class="text-3xl  font-display text-transparent bg-clip-text bg-gradient-to-b from-accent from-50% to-accent-muted to-50% uppercase tracking-tight"
        >
          {{ title() }}
        </h3>
        <div class="flex-grow h-px bg-gradient-to-r from-secondary/20 to-transparent"></div>
      </div>
    } @else {
      <div class="flex flex-col relative justify-center  items-center">
        <div
          class="flex flex-row absolute top-full justify-center  right-0 left-0     h-6 gap-4 mt-4 "
        >
          <img
            src="template-chifa-images/flor.svg"
            alt="Chifa Luck"
            class="w-auto bottom-full    rotate-180   h-7 mb-4 "
          />
          <img
            src="template-chifa-images/decoracion.svg"
            alt="Chifa Luck"
            class="w-auto  bottom-full     h-7 mb-4 "
          />
          <img
            src="template-chifa-images/flor.svg"
            alt="Chifa Luck"
            class="w-auto    rotate-180   h-7 mb-4 "
          />
        </div>
        <div
          class="flex flex-row absolute bottom-full justify-center  right-0 left-0   gap-4  h-6 mb-4  "
        >
          <img
            src="template-chifa-images/flor.svg"
            alt="Chifa Luck"
            class="w-auto bottom-full    rotate-180   h-7 mb-4 "
          />
          <img
            src="template-chifa-images/decoracion.svg"
            alt="Chifa Luck"
            class="w-auto bottom-full   rotate-180   h-7 mb-4 "
          />
          <img
            src="template-chifa-images/flor.svg"
            alt="Chifa Luck"
            class="w-auto    rotate-180   h-7 mb-4 "
          />
        </div>

        <h2
          class="text-4xl md:text-5xl  font-display text-transparent bg-clip-text bg-gradient-to-b from-primary-text from-50% to-secondary-text to-50% tracking-tighter uppercase text-center"
        >
          {{ title() }}
        </h2>
        <p class="text-primary-text text-xs text-body font-semibold uppercase tracking-widest">
          {{ subTitle() }}
        </p>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaTitleComponent {
  title = input.required<string>();
  variant = input<'header' | 'category'>('category');
  subTitle = input<string>('');
}
