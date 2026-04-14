import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div
      class="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-primary/10 shadow-sm py-4 px-4 group/nav"
    >
      <div class="max-w-7xl mx-auto relative flex items-center">
        <!-- Flecha Izquierda -->
        <button
          (click)="scrollAmount(-200)"
          class="absolute -left-2 z-10 p-2 bg-white/80 rounded-full shadow-md text-primary opacity-0 group-hover/nav:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-white active:scale-95"
          [class.!flex]="canScrollLeft()"
        >
          <lucide-icon [img]="ChevronLeft" class="w-5 h-5"></lucide-icon>
        </button>

        <!-- Contenedor Scrollable -->
        <div
          #scrollContainer
          (mousedown)="onMouseDown($event)"
          (mouseleave)="onMouseLeave()"
          (mouseup)="onMouseUp()"
          (mousemove)="onMouseMove($event)"
          (scroll)="updateScrollState()"
          class="flex items-center gap-3 overflow-x-auto select-none cursor-grab active:cursor-grabbing scroll-smooth
                    [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          @for (category of categories(); track category.id) {
            <button
              (click)="scrollToCategory(category.id)"
              class="whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all
                           hover:bg-primary/20 hover:text-primary active:scale-95"
              [class.bg-primary]="activeCategoryId() === category.id"
              [class.text-white]="activeCategoryId() === category.id"
              [class.bg-secondary/5]="activeCategoryId() !== category.id"
              [class.text-secondary]="activeCategoryId() !== category.id"
            >
              {{ category.name }}
            </button>
          }
        </div>

        <!-- Flecha Derecha -->
        <button
          (click)="scrollAmount(200)"
          class="absolute -right-2 z-10 p-2 bg-white/80 rounded-full shadow-md text-primary opacity-0 group-hover/nav:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-white active:scale-95"
          [class.!flex]="canScrollRight()"
        >
          <lucide-icon [img]="ChevronRight" class="w-5 h-5"></lucide-icon>
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNav {
  // View Child for the scroll container
  scrollContainer = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  // Input/Output
  categories = input.required<any[]>();
  activeCategoryId = input<string | null>(null);
  categorySelect = output<string>();

  // Icons
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  // Internal state for drag-to-scroll
  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  // Scroll visibility signals
  canScrollLeft = signal(false);
  canScrollRight = signal(false);

  ngAfterViewInit() {
    this.updateScrollState();
  }

  updateScrollState() {
    const el = this.scrollContainer()?.nativeElement;
    if (el) {
      this.canScrollLeft.set(el.scrollLeft > 0);
      this.canScrollRight.set(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }

  scrollAmount(amount: number) {
    const el = this.scrollContainer()?.nativeElement;
    if (el) {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }

  // Drag Events
  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    const el = this.scrollContainer()?.nativeElement;
    if (el) {
      this.startX = e.pageX - el.offsetLeft;
      this.scrollLeft = el.scrollLeft;
    }
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const el = this.scrollContainer()?.nativeElement;
    if (el) {
      const x = e.pageX - el.offsetLeft;
      const walk = (x - this.startX) * 2; // Scroll multiplier
      el.scrollLeft = this.scrollLeft - walk;
    }
  }

  scrollToCategory(id: string) {
    const element = document.getElementById('category-' + id);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    this.categorySelect.emit(id);
  }
}
