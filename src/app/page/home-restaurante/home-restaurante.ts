import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../core/services/mock-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LucideAngularModule, Store, ChevronRight } from 'lucide-angular';
import { Header } from "../../share/components/header/header.component";


@Component({
  selector: 'app-home-restaurante',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, Header],
  templateUrl: './home-restaurante.html',
  styleUrl: './home-restaurante.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRestaurante {
  private readonly mockDataService = inject(MockDataService);

  readonly Store = Store;
  readonly ChevronRight = ChevronRight;

  // Convertimos el observable a signal para usar las bondades de Angular 20
  restaurants = toSignal(this.mockDataService.getAllRestaurants(), { initialValue: [] });
}
