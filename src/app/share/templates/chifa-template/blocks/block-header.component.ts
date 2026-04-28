import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChifaHeaderTitleComponent } from '../components/chifa-header-title/chifa-header-title.component';

@Component({
  selector: 'app-block-header',
  standalone: true,
  imports: [CommonModule, ChifaHeaderTitleComponent],
  template: `
    <div class="relative flex justify-center items-center py-6 md:py-12 rounded-t-sm translate-y-1 px-4  overflow-hidden   ">
      <div
        class="absolute bg-[url('/template-chifa-images/contorno.svg')] top-0 left-0 right-0 w-auto h-full mx-2 mt-2 bg-cover bg-no-repeat "
      ></div>
      <div
        class="absolute bg-[url('/template-chifa-images/lampara.svg')] -z-10 top-0 left-20 md:left-12  w-12 md:w-20 h-full mx-2 mt-2  bg-no-repeat "
      ></div>
      <div
        class="absolute bg-[url('/template-chifa-images/lampara.svg')] -z-10 top-0 right-10  w-12 md:w-22 h-full mx-2 mt-2  bg-no-repeat "
      ></div>
            <div
        class="absolute bg-[url('/template-chifa-images/lampara.svg')] z-10 md:-z-10 top-0 left-30  md:left-55  w-8 md:w-15 h-full mx-2 mt-2  bg-no-repeat "
      ></div>
      <div
        class="absolute bg-[url('/template-chifa-images/lampara.svg')] z-10 md:-z-10  top-0 right-22 md:right-50  w-14 md:w-18 h-full mx-2 mt-2  bg-no-repeat "
      ></div>
      <!-- Top Cultural Graphic (The Gato) -->
      <div  class=" relative flex justify-center items-center md:min-h-70 min-h-50 rounded-full  md:h-130 md:w-130 w-110 h-110">
        <img src="/template-chifa-images/decoracion-fondo-letras.svg" alt="" class="absolute select-none  -z-10 left-0 right-0 w-full h-130 bg-no-repeat bg-center">
     <app-chifa-header-title [title]="title()" [subTitle]="subTitle()"></app-chifa-header-title>
      </div>

  
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockHeaderComponent {
  title = input.required<string>();
  subTitle = input.required<string>();
}
