import { ChangeDetectionStrategy, Component, inject, signal, effect } from '@angular/core';

import { RouterLink } from '@angular/router';
import { PortalService } from '../../services/portal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LucideAngularModule, Store, ChevronRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-home-restaurante',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home-restaurante.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRestaurante {
  private readonly portalService = inject(PortalService);

  readonly Store = Store;
  readonly ChevronRight = ChevronRight;
  readonly Info = Info;

  // Convertimos el observable a signal para usar las bondades de Angular 20
  restaurants = toSignal(this.portalService.getAllRestaurants(), { initialValue: [] });

  constructor() {
    // No effect needed for now
  }
}
