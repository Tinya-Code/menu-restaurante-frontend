import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Waves, Anchor } from 'lucide-angular';

import { HeaderActionsComponent } from '../../../components/header-actions/header-actions.component';

@Component({
  selector: 'app-cevicheria-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HeaderActionsComponent],
  template: `
    <header
      class="relative bg-linear-to-r from-secondary to-secondary/90 p-10 mb-12 rounded-b-5xl shadow-2xl overflow-hidden min-h-[250px] flex items-center"
    >
      <!-- Animación de olas -->
      <div class="absolute inset-0 opacity-10">
        <lucide-icon [img]="Waves" class="w-full h-full scale-150"></lucide-icon>
      </div>

      <div
        class="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-6 relative z-10"
      >
        <div
          class="w-20 h-20 border-2 border-primary/50 rounded-full flex items-center justify-center mb-2"
        >
          <lucide-icon [img]="Anchor" class="w-10 h-10 text-primary"></lucide-icon>
        </div>

        <div>
          <h1
            class="text-5xl md:text-7xl font-bungee text-white mb-4 tracking-wider drop-shadow-2xl"
          >
            {{ restaurantName() }}
          </h1>
          <p class="text-primary text-lg font-bold uppercase tracking-[0.3em] opacity-90">
            Frescura Marina Garantizada
          </p>
        </div>

        <app-header-actions [showInfoButton]="false" [showShareButton]="true"></app-header-actions>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaHeader {
  restaurantName = input.required<string>();
  Waves = Waves;
  Anchor = Anchor;
}
