import { ChangeDetectionStrategy, Component, OnInit, signal, computed } from '@angular/core';

import { advertisementResponse } from '../../../data/advertisement';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [],
  templateUrl: './advertisement.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Advertisement implements OnInit {
  private advertisementData = signal<any>(null);

  readonly title = computed(() => this.advertisementData()?.data?.title || 'Publicidad');
  readonly items = computed(() => this.advertisementData()?.data?.items || []);

  ngOnInit(): void {
    // Simular llamada a API
    this.loadAdvertisement();
  }

  private loadAdvertisement(): void {
    // En un caso real, esto sería una llamada HTTP
    // this.http.get('/api/advertisement').subscribe(...)
    this.advertisementData.set(advertisementResponse);
  }
}
