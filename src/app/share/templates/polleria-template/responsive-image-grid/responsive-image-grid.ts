import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-responsive-image-grid',
  standalone: true,
  templateUrl: './responsive-image-grid.html',
  styleUrl: './responsive-image-grid.css',
})
export class ResponsiveImageGrid implements OnInit, OnDestroy {
  // --- Inputs ---
  images = input.required<string[]>(); // array of image URLs
  imgMinH = input<number>(250); // minimum image height in px
  gap = input<number>(16); // gap between images in px

  // --- Internal state ---
  @ViewChild('container', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  private resizeObserver!: ResizeObserver;
  visibleCount = signal(0);

  visibleImages = computed(() => this.images().slice(0, this.visibleCount()));

  // --- Lifecycle ---
  ngOnInit() {
    this.resizeObserver = new ResizeObserver(([entry]) => {
      const h = entry.contentRect.height;
      this.visibleCount.set(this.calcCount(h));
    });
    this.resizeObserver.observe(this.containerRef.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }

  // --- Helpers ---
  private calcCount(containerH: number): number {
    return Math.max(0, Math.floor((containerH + this.gap()) / (this.imgMinH() + this.gap())));
  }

  rowHeight(): number {
    const n = this.visibleCount();
    if (n === 0) return this.imgMinH();
    return Math.floor((this.containerRef.nativeElement.clientHeight - (n - 1) * this.gap()) / n);
  }
}
