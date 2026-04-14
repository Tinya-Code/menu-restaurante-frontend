import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { ChifaCardComponent } from '../components/chifa-card/chifa-card';
import { ChifaTitleComponent } from '../components/chifa-title/chifa-title.component';
@Component({
  selector: 'app-bebidas-segment',
  standalone: true,
  imports: [CommonModule, ChifaCardComponent, ChifaTitleComponent],
  template: `
    @if (categories().length > 0) {
      <section class="relative py-12 px-8   ">
 
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          @for (
            catData of categories();
            track catData.category.id;
            let isLast = $last;
            let total = $count
          ) {
            <section [id]="'category-' + catData.category.id" class="flex flex-col">
              <app-chifa-title [title]="catData.category.name" variant="category"></app-chifa-title>

              <div class="grid grid-cols-1 gap-6">
                @for (product of catData.products; track product.id) {
                  <app-chifa-card
                    [product]="product"
                    (productClick)="productClick.emit($event)"
                    (addToCart)="addToCart.emit($event)"
                  >
                  </app-chifa-card>
                }
              </div>
            </section>
          }

          <!-- Decorative Illustration in flow -->
          <div
            class="flex justify-center items-center p-8 bg-secondary-muted  rounded-sm  self-stretch"
            [class.md:col-span-2]="categories().length % 2 === 0"
            [class.md:h-full]="categories().length % 2 !== 0"
          >
 
                   <div class="flex flex-col w-full items-center text-center ">
              <ul class=" flex flex-row md:flex-col justify-center items-center gap-4 ">
                <li>
                  <img
                    src="template-chifa-images/images-google/bebidas-1.png"
                    alt="Chifa Luck"
                    class="w-full md:w-100 h-auto mb-4 "
                  />
                </li>
               <li>
                  <img
                    src="template-chifa-images/images-google/bebidas-2.png"
                    alt="Chifa Luck"
                    class="w-full md:w-100 h-auto mb-4 "
                  />
                </li>
              </ul>

              <p class="text-sm font-bungee text-accent object-cover uppercase tracking-widest">
                Refrescante
              </p>
            </div>
          </div>
        </div>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BebidasSegmentComponent {
  categories = input.required<any[]>();
  productClick = output<Product>();
  addToCart = output<Product>();
}
