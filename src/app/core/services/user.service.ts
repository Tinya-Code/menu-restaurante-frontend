import { Injectable, inject, computed } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataStore = inject(DataStoreService);

  readonly user = this.dataStore.user;
  readonly isAdmin = computed(() => this.user()?.display_name === 'Admin');
}
