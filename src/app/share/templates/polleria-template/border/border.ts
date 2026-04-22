import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnDestroy,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, Subject } from 'rxjs';

interface IconMeta {
  w: number;
  h: number;
}

interface IconPattern {
  id: string;
  rotate?: number;
}

@Component({
  selector: 'app-border',
  imports: [],
  templateUrl: './border.html',
  styleUrl: './border.css',
})
export class Border implements AfterViewInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly ns = 'http://www.w3.org/2000/svg';

  readonly svgElement = viewChild.required<ElementRef<SVGSVGElement>>('borderSvg');
  readonly wrapperElement = viewChild.required<ElementRef<HTMLDivElement>>('frameWrapper');

  private resizeObserver?: ResizeObserver;
  private readonly resizeSubject = new Subject<void>();

  // Icon metadata
  private readonly iconMeta: Record<string, IconMeta> = {
    aji: { w: 24, h: 74 },
    chicken: { w: 40, h: 57 },
    inca: { w: 20, h: 72 },
    lemon: { w: 52, h: 49 },
    plant1: { w: 59, h: 48 },
    plant2: { w: 40, h: 62 },
    potato: { w: 36, h: 50 },
    salad: { w: 54, h: 43 },
    fries: { w: 48, h: 50 },
  };

  // Patterns for each edge
  private readonly topPattern: IconPattern[] = [
    { id: 'aji', rotate: -30 },
    { id: 'lemon', rotate: -20 },
    { id: 'chicken', rotate: -90 },
    { id: 'inca', rotate: 0 },
    { id: 'plant1', rotate: 180 },
    { id: 'potato', rotate: 30 },
    { id: 'plant2', rotate: -140 },
  ];

  private readonly botPattern: IconPattern[] = [
    { id: 'aji', rotate: -30 },
    { id: 'lemon', rotate: 70 },
    { id: 'chicken', rotate: -80 },
    { id: 'inca', rotate: 0 },
    { id: 'plant1', rotate: -10 },
    { id: 'potato', rotate: 30 },
    { id: 'plant2', rotate: -40 },
  ];

  private readonly leftPattern: IconPattern[] = [
    { id: 'inca', rotate: -15 },
    { id: 'plant2', rotate: 65 },
    { id: 'lemon', rotate: 60 },
    { id: 'potato', rotate: 30 },
    { id: 'aji', rotate: -30 },
    { id: 'plant1', rotate: 30 },
    { id: 'chicken', rotate: 40 },
    { id: 'fries', rotate: 10 },
  ];

  private readonly rightPattern: IconPattern[] = [
    { id: 'aji', rotate: -20 },
    { id: 'fries', rotate: -10 },
    { id: 'plant1', rotate: -15 },
    { id: 'chicken', rotate: -40 },
    { id: 'potato', rotate: -8 },
    { id: 'lemon', rotate: -15 },
    { id: 'inca', rotate: -15 },
    { id: 'plant2', rotate: -60 },
    { id: 'salad', rotate: -20 },
  ];

  // Corner icons
  private readonly tlIcon = 'salad';
  private readonly trIcon = 'salad';
  private readonly blIcon = 'plant2';
  private readonly brIcon = 'inca';

  // Configuration
  private readonly pad = 16;
  private readonly outsetX = 25;
  private readonly outsetY = 20;

  // Tailwind breakpoints
  private readonly mdBreakpoint = 768; // md
  private readonly xlBreakpoint = 1280; // xl
  private isVisible = false;
  private iconScale = 1; // Escala base, 1.2 para xl

  constructor() {
    // Setup debounced resize handler
    this.resizeSubject
      .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.checkVisibilityAndRender());
  }

  ngAfterViewInit(): void {
    // Initial render check - must happen after view is ready
    // Use requestAnimationFrame to ensure DOM has correct dimensions
    requestAnimationFrame(() => {
      this.checkVisibilityAndRender();
    });

    // Use ResizeObserver for efficient resize detection after initial render
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.resizeSubject.next();
      });
      this.resizeObserver.observe(this.wrapperElement().nativeElement);
    } else {
      // Fallback to window resize
      fromEvent(window, 'resize')
        .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.resizeSubject.next());
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private checkVisibilityAndRender(): void {
    const isMdOrLarger = window.innerWidth >= this.mdBreakpoint;
    const isXl = window.innerWidth >= this.xlBreakpoint;

    if (!isMdOrLarger) {
      // Mobile: clear SVG and don't render
      this.clearSvg();
      this.isVisible = false;
      return;
    }

    // Update icon scale - 20% larger on xl screens
    this.iconScale = isXl ? 1.2 : 1;

    // Desktop: render if not already visible or dimensions changed
    this.isVisible = true;
    this.renderBorder();
  }

  private clearSvg(): void {
    const svg = this.svgElement().nativeElement;
    svg.innerHTML = '<defs></defs>';
  }

  private renderBorder(): void {
    if (!this.isVisible) return;

    const svg = this.svgElement().nativeElement;
    const wrapper = this.wrapperElement().nativeElement;

    // Clear existing icons
    svg.innerHTML = '<defs></defs>';

    // Get actual dimensions - use scrollHeight as fallback for better accuracy
    const rect = wrapper.getBoundingClientRect();
    const W = rect.width || wrapper.clientWidth;
    const H = rect.height || wrapper.scrollHeight || wrapper.clientHeight;

    // Validate dimensions - if 0, retry after a short delay
    if (W === 0 || H === 0) {
      setTimeout(() => this.checkVisibilityAndRender(), 100);
      return;
    }

    // Set SVG viewBox
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    // Calculate max dimensions
    const allPatternIconIds = [
      ...this.topPattern,
      ...this.botPattern,
      ...this.leftPattern,
      ...this.rightPattern,
    ].map((p) => p.id);
    const allCornerIcons = [this.tlIcon, this.trIcon, this.blIcon, this.brIcon];
    const maxIconW = Math.max(
      ...allPatternIconIds.map((id) => this.iconMeta[id].w),
      ...allCornerIcons.map((id) => this.iconMeta[id].w)
    );
    const maxIconH = Math.max(
      ...allPatternIconIds.map((id) => this.iconMeta[id].h),
      ...allCornerIcons.map((id) => this.iconMeta[id].h)
    );

    // Calculate positions with separate X/Y outsets
    const topY = this.pad + maxIconH / 2 - this.outsetY;
    const botY = H - this.pad - maxIconH / 2 + this.outsetY;
    const leftX = this.pad + maxIconW / 2 - this.outsetX;
    const rightX = W - this.pad - maxIconW / 2 + this.outsetX;

    // Place corner icons
    this.placeIcon(this.tlIcon, leftX, topY, 0, svg);
    this.placeIcon(this.trIcon, rightX, topY, 0, svg);
    this.placeIcon(this.blIcon, leftX, botY, 0, svg);
    this.placeIcon(this.brIcon, rightX, botY, 0, svg);

    // Grid box layout
    const boxSize = Math.max(maxIconW, maxIconH) + 8;
    const rowWidth = rightX - leftX - maxIconW;
    const colHeight = botY - topY - maxIconH;

    const rowBoxCount = Math.max(1, Math.round(rowWidth / boxSize));
    const colBoxCount = Math.max(1, Math.round(colHeight / boxSize));

    // Generate icon lists
    const topIcons = this.repeatPatternToFill(this.topPattern, rowBoxCount);
    const botIcons = this.repeatPatternToFill(this.botPattern, rowBoxCount);
    const leftIcons = this.repeatPatternToFill(this.leftPattern, colBoxCount);
    const rightIcons = this.repeatPatternToFill(this.rightPattern, colBoxCount);

    // Stretched box layout
    const stretchedRowBoxSize = topIcons.length > 0 ? rowWidth / topIcons.length : 0;
    const stretchedColBoxSize = leftIcons.length > 0 ? colHeight / leftIcons.length : 0;

    const rowStartX = leftX + maxIconW / 2;
    const colStartY = topY + maxIconH / 2;

    // Place edge icons
    this.placeRowInBoxes(topIcons, topY, stretchedRowBoxSize, rowStartX, svg);
    this.placeRowInBoxes(botIcons, botY, stretchedRowBoxSize, rowStartX, svg);
    this.placeColumnInBoxes(leftIcons, leftX, stretchedColBoxSize, colStartY, svg);
    this.placeColumnInBoxes(rightIcons, rightX, stretchedColBoxSize, colStartY, svg);
  }

  private placeIcon(
    iconId: string,
    x: number,
    y: number,
    rotate: number,
    svg: SVGSVGElement
  ): void {
    const meta = this.iconMeta[iconId];
    const cx = meta.w / 2;
    const cy = meta.h / 2;
    const tx = x - cx;
    const ty = y - cy;

    // Apply icon scale for xl screens
    const scaledW = meta.w * this.iconScale;
    const scaledH = meta.h * this.iconScale;
    const scaledCx = scaledW / 2;
    const scaledCy = scaledH / 2;
    const scaledTx = x - scaledCx;
    const scaledTy = y - scaledCy;

    const el = document.createElementNS(this.ns, 'image');
    el.setAttribute('href', `/assets/polleria-template/icon-${iconId}.svg`);
    el.setAttribute('width', String(scaledW));
    el.setAttribute('height', String(scaledH));
    el.setAttribute(
      'transform',
      `translate(${scaledTx}, ${scaledTy}) rotate(${rotate}, ${scaledCx}, ${scaledCy})`
    );
    svg.appendChild(el);
  }

  private placeRowInBoxes(
    iconList: IconPattern[],
    y: number,
    boxSize: number,
    startX: number,
    svg: SVGSVGElement
  ): void {
    for (let i = 0; i < iconList.length; i++) {
      const { id, rotate = 0 } = iconList[i];
      const boxCenterX = startX + i * boxSize + boxSize / 2;
      this.placeIcon(id, boxCenterX, y, rotate, svg);
    }
  }

  private placeColumnInBoxes(
    iconList: IconPattern[],
    x: number,
    boxSize: number,
    startY: number,
    svg: SVGSVGElement
  ): void {
    for (let i = 0; i < iconList.length; i++) {
      const { id, rotate = 0 } = iconList[i];
      const boxCenterY = startY + i * boxSize + boxSize / 2;
      this.placeIcon(id, x, boxCenterY, rotate, svg);
    }
  }

  private repeatPatternToFill(pattern: IconPattern[], boxCount: number): IconPattern[] {
    const icons: IconPattern[] = [];
    for (let i = 0; i < boxCount; i++) {
      icons.push(pattern[i % pattern.length]);
    }
    return icons;
  }
}
