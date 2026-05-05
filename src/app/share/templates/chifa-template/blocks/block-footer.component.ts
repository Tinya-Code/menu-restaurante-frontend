import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="relative py-14 rounded-b-sm   mb-2 min-h-80 overflow-hidden">
      <div
        class="absolute -translate-y-1 md:-translate-y-2 bg-[url('/assets/template-chifa-images/contorno.svg')] z-10 top-0 left-0 right-0 w-auto h-full mx-2  bg-cover bg-no-repeat bg-bottom "
      ></div>
      <!-- Decorative Bottom Illustration -->
      <div
        class="absolute bottom-0 -translate-y-1 md:-translate-y-2  mb-8 mx-2  w-auto h-full bg-[url('/assets/template-chifa-images/decoracion-bottom.svg')]  top-0 left-0 right-0  overflow-hidden   bg-no-repeat bg-bottom "
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockFooterComponent {}
