import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Waves, Anchor } from 'lucide-angular';

@Component({
  selector: 'app-cevicheria-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header
      class="relative rounded-b-5xl shadow-2xl overflow-hidden
        bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/baner.png');"
    >
      <!-- Overlay premium -->
      <aside class="absolute inset-0 bg-gradient-to-r from-[#0B2C4D]/85 to-[#0B2C4D]/70"></aside>

      <!-- Contenido principal -->
      <main
        class="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6 relative z-10"
      >
        <!-- Icono representativo -->
        <figure
          class="w-20 h-20 border-2 border-primary/50 rounded-full flex items-center justify-center"
        >
          <lucide-icon [img]="Anchor" class="w-10 h-10 text-primary"></lucide-icon>
        </figure>

        <!-- Título y descripción -->
        <section>
          <h1
            class="text-4xl sm:text-5xl md:text-7xl font-bungee text-white tracking-wider drop-shadow-2xl"
          >
            {{ restaurantName() }}
          </h1>

          <p
            class="mt-3 text-primary text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.3em] opacity-90"
          >
            Frescura Marina Garantizada
          </p>
        </section>
      </main>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaHeader {
  restaurantName = input.required<string>();
  Waves = Waves;
  Anchor = Anchor;
}
