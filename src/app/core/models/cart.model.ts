import { Product } from './product.model';

/**
 * Interfaz para los items dentro del carrito.
 */
export interface CartItem extends Product {
    quantity: number;
}
