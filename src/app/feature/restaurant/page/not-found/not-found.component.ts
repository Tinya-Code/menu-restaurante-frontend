import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Search, Home } from 'lucide-angular';

@Component({
  selector: 'app-restaurant-not-found',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div class="text-center max-w-lg">
        <div class="mb-8">
          <div class="inline-block p-6 bg-surface rounded-full mb-6">
            <lucide-angular [img]="Search" size="48" class="text-muted"></lucide-angular>
          </div>
          <h1 class="text-6xl font-black text-slate-900 mb-4" style="font-family: var(--font-bungee)">
            404
          </h1>
          <h2 class="text-2xl font-bold text-slate-800 mb-4">
            Menú no encontrado
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            El menú que buscas no existe o ha sido desactivado por el restaurante.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            (click)="goHome()"
            class="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <lucide-angular [img]="Home" size="20"></lucide-angular>
            Explorar Restaurantes
          </button>
        </div>

        <div class="mt-12 p-6 bg-surface rounded-2xl">
          <p class="text-sm text-slate-600 mb-2">
            ¿Eres dueño de un restaurante?
          </p>
          <a
            routerLink="/register"
            class="text-accent font-bold hover:underline"
          >
            Crea tu menú digital gratis
          </a>
        </div>
      </div>
    </div>
  `,
})
export class RestaurantNotFoundComponent {
  readonly Search = Search;
  readonly Home = Home;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
