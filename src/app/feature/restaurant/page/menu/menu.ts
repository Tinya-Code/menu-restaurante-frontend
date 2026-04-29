import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  effect,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { forkJoin, timeout, catchError, of } from 'rxjs';
import { SidebarCart } from '../../components/sidebar-cart/sidebar-cart.component';
import { CartTriggerComponent } from '../../components/cart-trigger/cart-trigger.component';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantService as CoreRestaurantService } from '../../../../core/services/restaurant.service';
import { MenuService } from '../../../../core/services/menu.service';
import { BusinessHoursService } from '../../../../core/services/business-hours.service';
import { ProductService } from '../../../../core/services/product.service';
import { Cart } from '../../../../core/services/cart.service';
import { TimeFormatPipe } from '../../../../share/pipes/time-format.pipe';
import { LucideAngularModule, Clock } from 'lucide-angular';
import { TEMPLATE_IDS } from '../../../../core/constants/template.constants';

// Plantillas Temáticas
import { PolleriaTemplate } from '../../../../share/templates/polleria-template';
import { ChifaTemplate } from '../../../../share/templates/chifa-template';
import { CevicheriaTemplate } from '../../../../share/templates/cevicheria-template';
import { ComidaRapidaTemplate } from '../../../../share/templates/comida-rapida-template';

import { ModalComponent } from '../../components/modal/modal.component';
import { Product } from '../../../../core/models/product.model';

// Componentes de Detalle por Plantilla
import { ChifaProductDetail } from '../../../../share/templates/chifa-template/components/product-detail/product-detail';
import { PolleriaProductDetail } from '../../../../share/templates/polleria-template/product-detail/product-detail';
import { CevicheriaProductDetail } from '../../../../share/templates/cevicheria-template/product-detail/product-detail';
import { ComidaRapidaProductDetail } from '../../../../share/templates/comida-rapida-template/product-detail/product-detail';
import { CategoryNav } from '../../components/category-nav/category-nav.component';
import { WhatsAppButton } from '../../../../share/components/whatsapp-button/whatsapp-button.component';
import { RestaurantClosedModalComponent } from '../../components/restaurant-closed-modal/restaurant-closed-modal.component';
import { BannerModalComponent } from '../../components/banner-modal/banner-modal.component';
import { LoadingComponent } from '../../../../share/components/loading/loading.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    PolleriaTemplate,
    ChifaTemplate,
    CevicheriaTemplate,
    ComidaRapidaTemplate,
    ModalComponent,
    ChifaProductDetail,
    PolleriaProductDetail,
    CevicheriaProductDetail,
    ComidaRapidaProductDetail,
    CategoryNav,
    LucideAngularModule,
    WhatsAppButton,
    SidebarCart,
    CartTriggerComponent,
    RestaurantClosedModalComponent,
    BannerModalComponent,
    LoadingComponent,
  ],
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu implements OnInit {
  private readonly restaurantDataService = inject(RestaurantService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly MIN_LOADING_TIME = 0;
  private readonly route = inject(ActivatedRoute);
  private readonly cart = inject(Cart);

  // Servicios de Datos (Signals)
  protected readonly restaurantService = inject(CoreRestaurantService);
  protected readonly menuService = inject(MenuService);
  protected readonly productService = inject(ProductService);
  private readonly _businessHours = inject(BusinessHoursService);

  readonly Clock = Clock;
  readonly TEMPLATE_IDS = TEMPLATE_IDS;

  // Exposición de signals del servicio Cart
  readonly isRestaurandClosed = this.cart.isBusinessClosed;
  readonly businessHours = this._businessHours.hours;

  // Estado del Modal
  isModalOpen = signal(false);
  selectedProduct = signal<Product | null>(null);
  activeCategoryId = signal<string | null>(null);
  isLoading = signal(true);
  private loadingStartTime = 0;

  // Combos y Promociones
  combos = signal<any[]>([]);
  promotions = signal<any[]>([]);
  banners = signal<any[]>([]);
  showBanner = signal(false);

  ngOnInit(): void {
    // Escuchamos cambios en la ruta para cargar los datos de forma modular
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || 'restaurante-gran-gourmet-1';
      this.isLoading.set(true);
      this.loadingStartTime = Date.now();
      // Usamos forkJoin para evitar condiciones de carrera en el DataStore
      forkJoin({
        restaurant: this.restaurantDataService.getRestaurantData(slug),
        categories: this.restaurantDataService.getMenuCategories(slug),
        template: this.restaurantDataService.getTemplateData(slug),
        combos: this.restaurantDataService.getCombos(slug),
        promotions: this.restaurantDataService.getPromotions(slug),
        banners: this.restaurantDataService.getBanners(slug),
      })
        .pipe(
          timeout(10000), // 10 second timeout
          catchError((err) => {
            console.error('Error loading menu data:', err);
            return of({
              restaurant: { data: null },
              categories: { data: null },
              template: { data: null },
              combos: { data: [] },
              promotions: { data: [] },
              banners: { data: [] },
            });
          }),
        )
        .subscribe({
          next: (res) => {
            if (res.restaurant.data) {
              this.restaurantService.setRestaurantData(res.restaurant);
            }
            if (res.categories.data) {
              this.menuService.setMenuCategories(res.categories);
            }
            if (res.template.data) {
              this.restaurantService.setTemplateData(res.template);
            }
            this.combos.set(res.combos?.data || []);
            this.promotions.set(res.promotions?.data || []);
            this.banners.set(res.banners?.data || []);

            // Show banner if available
            if (this.banners().length > 0) {
              this.showBanner.set(true);
            }

            this.isLoading.set(false);
          },
          error: (err) => {
            this.isLoading.set(false);
          },
        });
    });
  }

  /**
   * Agrega un producto al carrito.
   */
  addToCart(item: Product | any): void {
    this.cart.addItem({
      ...item,
      quantity: 1,
    } as any);
  }

  /**
   * Agrega un producto desde el modal con cantidad específica.
   */
  onAddToCartFromModal(event: { product: Product; quantity: number }): void {
    this.cart.addItem({
      ...event.product,
      quantity: event.quantity,
    } as any);
    this.closeModal();
  }

  /**
   * Navega al detalle del producto.
   */
  viewDetail(product: Product): void {
    if (!this._businessHours.isOpen()) {
      this.cart.addItem({ id: 'dummy' } as any, 0); // Trigger modal
      return;
    }
    if (product) {
      this.selectedProduct.set(product);
      this.isModalOpen.set(true);
    }
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    setTimeout(() => this.selectedProduct.set(null), 300);
  }

  closeClosedModal(): void {
    this.cart.closeBusinessClosedModal();
  }

  closeBanner(): void {
    this.showBanner.set(false);
  }
}
