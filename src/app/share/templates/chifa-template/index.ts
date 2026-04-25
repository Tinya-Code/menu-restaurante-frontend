import { ChangeDetectionStrategy, Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CategoryData } from '../../../core/models/menu.model';
import { ChifaHeader } from './components/header/header';
import { ChifaFooter } from './components/footer/footer';
import { LayoutScaleComponent } from '../../layout/layout-scale/layout-scale';

// Block Components
import { Block1Component } from './blocks/block-1';
import { Block2Component } from './blocks/block-2';
import { Block3Component } from './blocks/block-3';
import { Block4Component } from './blocks/block-4';
import { Block5Component } from './blocks/block-5';
import { Block6Component } from './blocks/block-6';
import { Block7Component } from './blocks/block-7';
import { BlockHeaderComponent } from './blocks/block-header.component';
import { BlockFooterComponent } from './blocks/block-footer.component';

@Component({
  selector: 'app-chifa-template',
  standalone: true,
  imports: [
    CommonModule,
    ChifaHeader,
    ChifaFooter,
    LayoutScaleComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block5Component,
    Block6Component,
    Block7Component,
    BlockHeaderComponent,
    BlockFooterComponent,
    Block4Component,
  ],
  template: `
    <app-chifa-header [restaurantName]="restaurantName()"></app-chifa-header>

    <app-layout-scale>
      <!-- Cabecera Global del Menú -->

      <div class="bg-secondary  relative mx-2 ">
        <app-block-header
          title="Nuestro Menu"
          subTitle="Lo mejor de nuestra cocina"
        ></app-block-header>

        @if (hasAnyCategories()) {
          <div
            class="bg-[url('/template-chifa-images/contorno-laterales.svg')]  h-full w-auto  mx-2"
          >
            <div class="flex flex-col gap-0  "></div>
            <app-block-1
              [categories]="block1()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-1>

            <app-block-2
              [categories]="block2()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-2>

            <app-block-3
              [categories]="block3()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-3>

            <app-block-4
              [categories]="block4()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-4>

            <app-block-5
              [categories]="block5()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-5>

            <app-block-6
              [categories]="block6()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-6>

            <app-block-7
              [categories]="block7()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-block-7>
          </div>
        } @else {
          <div
            class="flex flex-col items-center justify-center py-20 text-secondary/60 italic font-medium"
          >
            <p class="text-xl">Estamos actualizando nuestra carta...</p>
            <p class="text-sm mt-2">Danos un momento para prepararte lo mejor del Chifa.</p>
          </div>
        }

        <!-- Pie de Página Global del Menú -->
        <app-block-footer></app-block-footer>
      </div>
    </app-layout-scale>
    <!-- publicidad espacio para eso con decoracion i contiene un imagen o varias por el momento con esta imagene public/template-chifa-images/publicidad.png hay que hacer la maquetacion -->
    <aside class="w-full h-full border-4 border-primary/20 border-dashed rounded-lg p-4 my-12  ">
      <legend class="text-primary text-2xl font-bold">Publicidad</legend>
      <div class="grid grid-cols-2  gap-4">
        <img
          src="/template-chifa-images/publicidad.png"
          alt="Publicidad"
          class="w-full h-full object-cover col-span-2 row-span-1"
        />
      </div>
    </aside>
    <app-chifa-footer class="mt-20 block"></app-chifa-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaTemplate {
  categories = input.required<CategoryData[]>();
  restaurantName = input.required<string>();
  templateData = input<any>();
  productClick = output<Product>();
  addToCart = output<Product>();

  // Filtering Logic using computed signals
  protected block1 = computed(() => this.filterByTypes('block-1'));
  protected block2 = computed(() => this.filterByTypes('block-2'));
  protected block3 = computed(() => this.filterByTypes('block-3'));
  protected block4 = computed(() => this.filterByTypes('block-4'));
  protected block5 = computed(() => this.filterByTypes('block-5'));
  protected block6 = computed(() => this.filterByTypes('block-6'));
  protected block7 = computed(() => this.filterByTypes('block-7'));

  protected hasAnyCategories = computed(
    () =>
      this.block1().length > 0 ||
      this.block2().length > 0 ||
      this.block3().length > 0 ||
      this.block4().length > 0 ||
      this.block5().length > 0 ||
      this.block6().length > 0 ||
      this.block7().length > 0,
  );

  private filterByTypes(types: string): CategoryData[] {
    return this.categories().filter((c) => types.includes(c.category.type));
  }
}
