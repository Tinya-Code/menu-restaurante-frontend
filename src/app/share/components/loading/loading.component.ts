import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loader2 } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  readonly Loader2 = Loader2;

  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly text = input<string>('');
  readonly fullScreen = input<boolean>(false);
  readonly logoUrl = input<string>('');

  get sizeClasses(): string {
    return {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    }[this.size()];
  }

  get logoSizeClasses(): string {
    return {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32',
    }[this.size()];
  }
}
