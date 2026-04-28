import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Flame, LucideAngularModule } from 'lucide-angular';
import { HeaderActionsComponent } from '../../../components/header-actions/header-actions.component';

@Component({
  selector: 'app-polleria-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HeaderActionsComponent],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaHeader {
  restaurantName = input.required<string>();
  Flame = Flame;
}
