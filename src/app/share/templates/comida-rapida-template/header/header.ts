import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Zap, Clock } from 'lucide-angular';

@Component({
  selector: 'app-comida-rapida-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header class="relative bg-primary p-6 mb-8 rounded-3xl shadow-premium transform -skew-y-1 overflow-hidden">
      <!-- Patrón dinámico -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="grid grid-cols-12 gap-2 h-full">
          @for (i of [1,2,3,4,5,6]; track i) {
            <div class="h-full border-r border-white/30"></div>
          }
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto flex items-center justify-between relative z-10 skew-y-1">
        <div class="flex items-center gap-5">
          <div class="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg rotate-12">
            <lucide-icon [img]="Zap" class="w-10 h-10 text-primary"></lucide-icon>
          </div>
          <div>
            <h1 class="text-4xl md:text-6xl font-bungee text-secondary tracking-tighter">
              {{ restaurantName() }}
            </h1>
            <div class="flex items-center gap-2 text-secondary font-black text-xs uppercase italic tracking-widest">
              <lucide-icon [img]="Clock" class="w-3 h-3 text-secondary"></lucide-icon>
              Servicio Express
            </div>
          </div>
        </div>
        
        <div class="hidden md:block bg-secondary text-primary px-6 py-2 rounded-full font-black uppercase text-sm -rotate-3 hover:translate-x-2 transition-transform cursor-default">
           ¡Pídelo ya!
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComidaRapidaHeader {
  restaurantName = input.required<string>();
  Zap = Zap;
  Clock = Clock;
}
