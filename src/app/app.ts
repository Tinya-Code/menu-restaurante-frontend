import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarCart } from './share/components/sidebar-cart/sidebar-cart.component';
import { CartTriggerComponent } from './share/components/cart-trigger/cart-trigger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarCart, CartTriggerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('menu-restaurante-frontend');
}
