import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Info } from 'lucide-angular';

import { ShareButtonComponent } from '../share-button/share-button.component';

@Component({
  selector: 'app-header-actions',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ShareButtonComponent],
  template: `
    <div class="flex items-center gap-4">
      @if (showInfoButton()) {
        @if (href()) {
          <a
            [href]="href()"
            target="_blank"
            class="group flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/80 hover:bg-[var(--color-primary)] text-white rounded-sm transition-all duration-300 font-bold border border-[var(--color-primary)]/20 backdrop-blur-sm"
          >
            @if (showIcon()) {
              <lucide-icon
                [img]="icon() || Info"
                class="w-4 h-4 group-hover:scale-110 transition-transform"
              ></lucide-icon>
            }
            <span class="text-sm select-none">{{ buttonText() }}</span>
          </a>
        } @else {
          <a
            [routerLink]="infoLink()"
            class="group flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/80 hover:bg-[var(--color-primary)] text-white rounded-sm transition-all duration-300 font-bold border border-[var(--color-primary)]/20 backdrop-blur-sm"
          >
            @if (showIcon()) {
              <lucide-icon
                [img]="icon() || Info"
                class="w-4 h-4 group-hover:scale-110 transition-transform"
              ></lucide-icon>
            }
            <span class="text-sm select-none">{{ buttonText() }}</span>
          </a>
        }
      }

      @if (showShareButton()) {
        <app-share-button></app-share-button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderActionsComponent {
  // Button configuration
  showInfoButton = input<boolean>(true);
  showIcon = input<boolean>(true);
  showShareButton = input<boolean>(true);

  // Content
  buttonText = input<string>('Más información');
  icon = input<any>(Info);

  // Navigation
  infoLink = input<string | any[]>('./info');
  href = input<string>('');

  // Events
  actionClick = output<void>();

  Info = Info;
}
