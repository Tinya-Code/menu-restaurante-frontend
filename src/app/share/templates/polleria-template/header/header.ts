import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Flame, Info, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-polleria-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaHeader {
  restaurantName = input.required<string>();
  Flame = Flame;
  Info = Info;
}
