import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chifa-header-title',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col relative justify-center items-center">
      <div class="flex flex-row absolute top-full justify-center right-0 left-0 h-6 gap-4 mt-4">
        <img
          src="assets/template-chifa-images/flor.svg"
          alt="Chifa Luck"
          class="w-auto bottom-full rotate-180 h-7 mb-4"
        />
        <img
          src="assets/template-chifa-images/decoracion.svg"
          alt="Chifa Luck"
          class="w-auto bottom-full h-7 mb-4"
        />
        <img
          src="assets/template-chifa-images/flor.svg"
          alt="Chifa Luck"
          class="w-auto rotate-180 h-7 mb-4"
        />
      </div>
      <div class="flex flex-row absolute bottom-full justify-center right-0 left-0 gap-4 h-6 mb-4">
        <img
          src="assets/template-chifa-images/flor.svg"
          alt="Chifa Luck"
          class="w-auto bottom-full rotate-180 h-7 mb-4"
        />
        <img
          src="assets/template-chifa-images/decoracion.svg"
          alt="Chifa Luck"
          class="w-auto bottom-full rotate-180 h-7 mb-4"
        />
        <img
          src="assets/template-chifa-images/flor.svg"
          alt="Chifa Luck"
          class="w-auto rotate-180 h-7 mb-4"
        />
      </div>

      <h2 class="text-4xl md:text-5xl font-display text-white  uppercase text-center">
        {{ title() }}
      </h2>
      <p class="text-gray-200 text-xs text-body font-semibold uppercase tracking-widest">
        {{ subTitle() }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaHeaderTitleComponent {
  title = input.required<string>();
  subTitle = input<string>('');
}
