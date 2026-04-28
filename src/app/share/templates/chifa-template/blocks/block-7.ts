import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { ChifaCardComponent } from '../components/chifa-card/chifa-card';
import { ChifaSectionTitleComponent } from '../components/chifa-section-title/chifa-section-title.component';
@Component({
  selector: 'app-block-7',
  standalone: true,
  imports: [CommonModule, ChifaCardComponent, ChifaSectionTitleComponent],
  template: `
    @if (categories().length > 0) {
      <section class="relative py-12 px-8    ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          @for (
            catData of categories();
            track catData.category.id;
            let isLast = $last;
            let total = $count
          ) {
            <section [id]="'category-' + catData.category.id" class="flex flex-col">
              <app-chifa-section-title
                [title]="catData.category.name"
                [description]="catData.category.description"
              ></app-chifa-section-title>

              <div class="grid grid-cols-1 md:grid-cols-1">
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
            class="flex justify-center items-center p-4 bg-secondary-muted rounded-sm self-stretch"
            [class.md:col-span-2]="categories().length % 2 === 0"
            [class.md:h-full]="categories().length % 2 !== 0"
          >
            <div class="flex flex-col w-full items-center text-center">
              <ul [class]="getImageGridClass()">
                @for (img of images; track img?.url) {
                  <li>
                    <img [src]="img?.url" alt="Chifa Luck" class="w-full md:w-100 h-auto mb-4" />
                  </li>
                }
              </ul>

              <p class="text-sm font-bungee text-accent object-cover uppercase tracking-widest">
                Brindis Tradicional
              </p>
            </div>
          </div>
        </div>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Block7Component {
  categories = input.required<any[]>();
  templateData = input<any>();
  productClick = output<Product>();
  addToCart = output<Product>();

  protected get images() {
    return this.templateData()?.blocks?.[6]?.block7 || [];
  }

  protected getImageGridClass(): string {
    const count = this.images.length;
    if (count === 1) return 'flex flex-row justify-center items-center gap-4';
    if (count === 2) return 'flex flex-row md:flex-col justify-center items-center gap-4';
    return 'grid grid-cols-1 md:grid-cols-2 gap-4';
  }
}
