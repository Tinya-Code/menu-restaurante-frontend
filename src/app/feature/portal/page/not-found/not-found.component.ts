import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Home, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center px-4">
      <div class="text-center max-w-lg">
        <div class="mb-8">
          <h1 class="text-[8rem] font-black text-white leading-none mb-4" style="font-family: var(--font-bungee)">
            404
          </h1>
          <h2 class="text-3xl font-bold text-primary-text mb-4">
            ¡Ups! Página no encontrada
          </h2>
          <p class="text-lg text-primary-text opacity-80 mb-8">
            La página que buscas no existe o ha sido movida a otra ubicación.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            (click)="goHome()"
            class="px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-accent-muted active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <lucide-angular [img]="Home" size="20"></lucide-angular>
            Ir al Inicio
          </button>

          <button
            (click)="goBack()"
            class="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <lucide-angular [img]="ArrowLeft" size="20"></lucide-angular>
            Volver
          </button>
        </div>

        <div class="mt-12 text-sm text-primary-text opacity-60">
          <p>¿Buscas registrar tu restaurante?</p>
          <a
            routerLink="/register"
            class="text-accent font-bold hover:underline"
          >
            Crea tu menú digital aquí
          </a>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {
  readonly Home = Home;
  readonly ArrowLeft = ArrowLeft;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
