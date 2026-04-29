import {
  Component,
  input,
  output,
  signal,
  inject,
  DestroyRef,
  ChangeDetectionStrategy,
  computed,
  afterNextRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { X, ChevronLeft, ChevronRight } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

export interface Banner {
  cloudinary_id: string;
  url: string;
}

@Component({
  selector: 'app-banner-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './banner-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerModalComponent {
  readonly banners = input.required<Banner[]>();
  readonly closed = output<void>();

  private readonly destroyRef = inject(DestroyRef);
  private readonly INITIAL_TIME = 15;
  private readonly SLIDE_INTERVAL = 5000;

  readonly remainingTime = signal(this.INITIAL_TIME);
  readonly isVisible = signal(true);
  readonly currentIndex = signal(0);

  readonly X = X;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  readonly formattedTime = computed(() => this.remainingTime().toString().padStart(2, '0'));

  readonly currentBanner = computed(() => {
    const banners = this.banners();
    return banners.length > 0 ? banners[this.currentIndex()] : null;
  });

  readonly hasMultipleBanners = computed(() => this.banners().length > 1);

  private timerInterval?: ReturnType<typeof setInterval>;
  private slideInterval?: ReturnType<typeof setInterval>;
  private isInitialized = false;

  constructor() {
    afterNextRender(() => {
      if (!this.isInitialized) {
        this.isInitialized = true;
        this.startTimer();
        this.startSlideTimer();
      }
    });
  }

  private startTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.remainingTime.update((time) => {
        if (time <= 1) {
          this.close();
          return 0;
        }
        return time - 1;
      });
    }, 1000);
  }

  private startSlideTimer(): void {
    if (this.slideInterval) clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_INTERVAL);
  }

  nextSlide(): void {
    const banners = this.banners();
    if (banners.length > 1) {
      this.currentIndex.update((index) => (index + 1) % banners.length);
    }
  }

  prevSlide(): void {
    const banners = this.banners();
    if (banners.length > 1) {
      this.currentIndex.update((index) => (index - 1 + banners.length) % banners.length);
    }
  }

  close(): void {
    this.isVisible.set(false);
    this.closed.emit();
    this.cleanup();
  }

  private cleanup(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.slideInterval) clearInterval(this.slideInterval);
  }
}
