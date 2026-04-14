import { Injectable, inject, computed, signal } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { Observable, from, map, switchMap } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataStore = inject(DataStoreService);
  private apiService = inject(ApiService);
  
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);
  private googleProvider = new GoogleAuthProvider();

  private _token = signal<string | null>(localStorage.getItem('token'));
  readonly token = this._token.asReadonly();
  
  private _googleUser = signal<FirebaseUser | null>(null);
  readonly googleUser = this._googleUser.asReadonly();

  readonly user = this.dataStore.user;
  readonly isAdmin = computed(() => this.user()?.display_name === 'Admin');

  loginWithGoogle(): Observable<FirebaseUser> {
    return from(signInWithPopup(this.auth, this.googleProvider)).pipe(
      switchMap(async (result) => {
        const token = await result.user.getIdToken();
        this._token.set(token);
        localStorage.setItem('token', token);
        this._googleUser.set(result.user);
        return result.user;
      })
    );
  }

  registerRestaurant(data: any): Observable<ApiResponse<any>> {
    return this.apiService.post<any>('/auth/register', data);
  }

  logout() {
    this._token.set(null);
    localStorage.removeItem('token');
    this._googleUser.set(null);
    return from(this.auth.signOut());
  }
}
