import { ChangeDetectionStrategy, Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CategoryData } from '../../../core/models/menu.model';
import { ChifaHeader } from './components/header/header';
import { ChifaFooter } from './components/footer/footer';
import { LayoutScaleComponent } from '../../layout/layout-scale/layout-scale';

// Segment Components
import { EntradasSopasSegmentComponent } from './segments/entradas-sopas.segment';
import { PrincipalesSegmentComponent } from './segments/principales.segment';
import { CompartirSegmentComponent } from './segments/compartir.segment';
import { AcompanamientosSegmentComponent } from './segments/acompanamientos.segment';
import { PostresSegmentComponent } from './segments/postres.segment';
import { BebidasSegmentComponent } from './segments/bebidas.segment';
import { LicoresSegmentComponent } from './segments/licores.segment';
import { SegmentHeaderComponent } from './segments/segment-header.component';
import { SegmentFooterComponent } from './segments/segment-footer.component';

@Component({
  selector: 'app-chifa-template',
  standalone: true,
  imports: [
    CommonModule,
    ChifaHeader,
    ChifaFooter,
    LayoutScaleComponent,
    EntradasSopasSegmentComponent,
    PrincipalesSegmentComponent,
    CompartirSegmentComponent,
    AcompanamientosSegmentComponent,
    PostresSegmentComponent,
    BebidasSegmentComponent,
    LicoresSegmentComponent,
    SegmentHeaderComponent,
    SegmentFooterComponent,
  ],
  template: `
    <app-chifa-header [restaurantName]="restaurantName()"></app-chifa-header>

    <app-layout-scale>
      <!-- Cabecera Global del Menú -->

      <div class="bg-secondary  relative mx-2 ">
        <app-segment-header title="Nuestro Menu" subTitle="Lo mejor de nuestra cocina" ></app-segment-header>

        @if (hasAnyCategories()) {
          <div
            class="bg-[url('/template-chifa-images/contorno-laterales.svg')]  h-full w-auto  mx-2"
          >
            <div class="flex flex-col gap-0  "></div>
            <app-entradas-sopas-segment
              [categories]="entradasSopas()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-entradas-sopas-segment>

            <app-principales-segment
              [categories]="principales()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-principales-segment>

            <app-compartir-segment
              [categories]="compartir()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-compartir-segment>

            <app-acompanamientos-segment
              [categories]="acompanamientos()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-acompanamientos-segment>

            <app-postres-segment
              [categories]="postres()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-postres-segment>

            <app-bebidas-segment
              [categories]="bebidas()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-bebidas-segment>

            <app-licores-segment
              [categories]="licores()"
              (productClick)="productClick.emit($event)"
              (addToCart)="addToCart.emit($event)"
            >
            </app-licores-segment>
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
        <app-segment-footer></app-segment-footer>
      </div>
    </app-layout-scale>
<!-- publicidad espacio para eso con decoracion i contiene un imagen o varias por el momento con esta imagene public/template-chifa-images/publicidad.png hay que hacer la maquetacion -->
    <aside class="w-full h-full border-4 border-primary/20 border-dashed rounded-lg p-4 my-12  ">
      <legend class="text-primary text-2xl font-bold">Publicidad</legend>
      <div class="grid grid-cols-2  gap-4">

        <img src="/template-chifa-images/publicidad.png" alt="Publicidad" class="w-full h-full object-cover col-span-2 row-span-1">
      </div>
    </aside>
    <app-chifa-footer class="mt-20 block"></app-chifa-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaTemplate {
  categories = input.required<CategoryData[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
  addToCart = output<Product>();

  // Filtering Logic using computed signals
  protected entradasSopas = computed(() => this.filterByTypes(['entrada', 'sopa', 'ensalada']));
  protected principales = computed(() => this.filterByTypes(['plato de fondo', 'especialidad']));
  protected compartir = computed(() => this.filterByTypes(['piqueo']));
  protected acompanamientos = computed(() => this.filterByTypes(['guarnicion', 'salsa']));
  protected postres = computed(() => this.filterByTypes(['postre']));
  protected bebidas = computed(() =>
    this.filterByTypes(['bebida_caliente', 'bebida_fria', 'jugo_natural']),
  );
  protected licores = computed(() => this.filterByTypes(['cerveza', 'vino', 'coctel']));

  protected hasAnyCategories = computed(
    () =>
      this.entradasSopas().length > 0 ||
      this.principales().length > 0 ||
      this.compartir().length > 0 ||
      this.acompanamientos().length > 0 ||
      this.postres().length > 0 ||
      this.bebidas().length > 0 ||
      this.licores().length > 0,
  );

  private filterByTypes(types: string[]): CategoryData[] {
    return this.categories().filter((c) => types.includes(c.category.type));
  }
}
