import { ChangeDetectionStrategy, Component, inject, signal, effect, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SidebarCart } from '../../share/components/sidebar-cart/sidebar-cart.component';
import { CartTriggerComponent } from '../../share/components/cart-trigger/cart-trigger.component';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../core/services/mock-data.service';
import { RestaurantService } from '../../core/services/restaurant.service';
import { MenuService } from '../../core/services/menu.service';
import { BusinessHoursService } from '../../core/services/business-hours.service';
import { ProductService } from '../../core/services/product.service';
import { Cart } from '../../core/services/cart.service';
import { TimeFormatPipe } from '../../share/pipes/time-format.pipe';
import { LucideAngularModule, Clock } from 'lucide-angular';
import { TEMPLATE_IDS } from '../../core/constants/template.constants';

// Plantillas Temáticas
import { PolleriaTemplate } from '../../share/templates/polleria-template';
import { ChifaTemplate } from '../../share/templates/chifa-template';
import { CevicheriaTemplate } from '../../share/templates/cevicheria-template';
import { ComidaRapidaTemplate } from '../../share/templates/comida-rapida-template';

import { ModalComponent } from '../../share/components/modal/modal.component';
import { Product } from '../../core/models/product.model';

// Componentes de Detalle por Plantilla
import { ChifaProductDetail } from '../../share/templates/chifa-template/components/product-detail/product-detail';
import { PolleriaProductDetail } from '../../share/templates/polleria-template/product-detail/product-detail';
import { CevicheriaProductDetail } from '../../share/templates/cevicheria-template/product-detail/product-detail';
import { ComidaRapidaProductDetail } from '../../share/templates/comida-rapida-template/product-detail/product-detail';
import { CategoryNav } from '../../share/components/category-nav/category-nav.component';
import { WhatsAppButton } from '../../share/components/whatsapp-button/whatsapp-button.component';

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
    TimeFormatPipe,
    WhatsAppButton, 
    SidebarCart,
    CartTriggerComponent
  ],
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu implements OnInit {
  private readonly mockDataService = inject(MockDataService);
  private readonly route = inject(ActivatedRoute);
  private readonly cart = inject(Cart);
  
  // Servicios de Datos (Signals)
  protected readonly restaurantService = inject(RestaurantService);
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

  ngOnInit(): void {
    // Escuchamos cambios en la ruta para cargar los datos de forma modular
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || 'restaurante-gran-gourmet-1';
      this.isLoading.set(true);
      // Usamos forkJoin para evitar condiciones de carrera en el DataStore
      forkJoin({
        restaurant: this.mockDataService.getRestaurantData(slug),
        categories: this.mockDataService.getMenuCategories(slug),
        template: this.mockDataService.getTemplateData(slug)
      }).subscribe({
        next: (res) => {
          this.restaurantService.setRestaurantData(res.restaurant);
          this.menuService.setMenuCategories(res.categories);
          this.restaurantService.setTemplateData(res.template);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error loading menu:', err);
          this.isLoading.set(false);
        }
      });
    });

    // Validar horario al cargar el restaurante
    effect(() => {
      if (this.restaurantService.restaurant()) {
        if (!this._businessHours.isOpen()) {
          // Trigger modal global si está cerrado al entrar
          this.cart.addItem({ id: 'dummy' } as any, 0);
        }
      }
    });
  }

  /**
   * Agrega un producto al carrito.
   */
  addToCart(product: Product): void {
    this.cart.addItem({
      ...product,
      quantity: 1
    } as any);
  }

  /**
   * Agrega un producto desde el modal con cantidad específica.
   */
  onAddToCartFromModal(event: { product: Product, quantity: number }): void {
    this.cart.addItem({
      ...event.product,
      quantity: event.quantity
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
}
