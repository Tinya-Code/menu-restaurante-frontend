import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LucideAngularModule, Utensils } from 'lucide-angular';

import { HeaderActionsComponent } from '../../../../../feature/restaurant/components/header-actions/header-actions.component';

@Component({
  selector: 'app-chifa-header',
  standalone: true,
  imports: [LucideAngularModule, HeaderActionsComponent],
  template: `
    <header
      class="relative bg-black/95 border-b-4 border-primary p-6 mb-8 rounded-b-5xl  min-h-35 overflow-hidden"
    >
      <!-- Decoración Oriental -->
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"
      ></div>

      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div
          class="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
        >
          <lucide-icon [img]="Utensils" class="w-12 h-12 text-secondary"></lucide-icon>
        </div>

        <div class="text-center md:text-left flex-1">
          <h1 class="text-4xl md:text-6xl font-bungee text-primary mb-2 tracking-tight">
            {{ restaurantName() }}
          </h1>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <span
              class="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest"
              >Sabor Oriental</span
            >
            <span class="text-neutral-400 text-sm italic"> Tradición en cada bocado </span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <app-header-actions
            [showInfoButton]="true"
            [showShareButton]="true"
            theme="chifa"
          ></app-header-actions>
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaHeader {
  restaurantName = input.required<string>();
  Utensils = Utensils;
}
