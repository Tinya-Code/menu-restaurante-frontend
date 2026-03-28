import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Flame, Info } from 'lucide-angular';

@Component({
  selector: 'app-polleria-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header class="relative bg-white p-8 mb-10 rounded-3xl shadow-premium overflow-hidden border-2 border-primary/10">
      <!-- Decoración de Fuego -->
      <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div class="w-20 h-20 bg-secondary rounded-4xl flex items-center justify-center shadow-lg transform -rotate-3 group hover:rotate-0 transition-transform duration-500">
          <lucide-icon [img]="Flame" class="w-10 h-10 text-primary animate-pulse"></lucide-icon>
        </div>
        
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bungee text-secondary mb-2 tracking-tight">
            {{ restaurantName() }}
          </h1>
          <div class="flex items-center justify-center md:justify-start gap-4">
             <span class="px-3 py-1 bg-primary text-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">Tradición Peruana</span>
             <span class="text-muted text-xs flex items-center gap-1">
                <lucide-icon [img]="Info" class="w-3 h-3"></lucide-icon>
                Sabor inigualable a la leña
             </span>
          </div>
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaHeader {
  restaurantName = input.required<string>();
  Flame = Flame;
  Info = Info;
}
