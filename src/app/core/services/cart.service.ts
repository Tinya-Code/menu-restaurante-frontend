import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { Local } from './local.service';
import { BusinessHoursService } from './business-hours.service';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private readonly _local = inject(Local);
  private readonly _businessHours = inject(BusinessHoursService);
  private readonly _storageKey = 'cart_items';

  // Estado privado del carrito
  private readonly _items = signal<CartItem[]>(this._local.get<CartItem[]>(this._storageKey) ?? []);
  private readonly _isOpen = signal<boolean>(false);
  private readonly _isBusinessClosed = signal<boolean>(false);

  // Exposición pública del estado (solo lectura)
  readonly items = this._items.asReadonly();
  readonly isOpen = this._isOpen.asReadonly();
  readonly isBusinessClosed = this._isBusinessClosed.asReadonly();

  // Valores derivados computados
  readonly count = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));
  readonly total = computed(() => this._items().reduce((acc, item) => acc + item.price * item.quantity, 0));
  readonly isEmpty = computed(() => this._items().length === 0);

  constructor() {
    // Persistencia automática cuando cambian los items
    effect(() => {
      this._local.set(this._storageKey, this._items());
    });
  }

  /**
   * Agrega un producto al carrito o incrementa su cantidad si ya existe.
   * @param product El producto a agregar.
   * @param quantity La cantidad a agregar (por defecto 1).
   */
  addItem(product: Product, quantity: number = 1): void {
    if (!this._businessHours.isOpen()) {
      this._isBusinessClosed.set(true);
      return;
    }

    this._items.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...items, { ...product, quantity }];
    });
  }

  /**
   * Remueve un producto del carrito.
   * @param productId El ID del producto a remover.
   */
  removeItem(productId: string): void {
    this._items.update((items) => items.filter((item) => item.id !== productId));
  }

  /**
   * Actualiza la cantidad de un producto específico.
   * @param productId El ID del producto.
   * @param quantity La nueva cantidad (si es <= 0, se remueve).
   */
  updateQuantity(productId: string, quantity: number): void {
    if (quantity > 0 && !this._businessHours.isOpen()) {
      this._isBusinessClosed.set(true);
      return;
    }

    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    this._items.update((items) =>
      items.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }

  /**
   * Limpia todo el carrito.
   */
  clear(): void {
    if (!this._businessHours.isOpen()) {
      this._isBusinessClosed.set(true);
      return;
    }
    this._items.set([]);
  }

  /**
   * Cierra el modal de negocio cerrado.
   */
  closeBusinessClosedModal(): void {
    this._isBusinessClosed.set(false);
  }

  /**
   * Abre o cierra el carrito.
   */
  toggle(): void {
    this._isOpen.update((open) => !open);
  }

  /**
   * Cierra el carrito.
   */
  close(): void {
    this._isOpen.set(false);
  }

  /**
   * Abre el carrito.
   */
  open(): void {
    this._isOpen.set(true);
  }
}
