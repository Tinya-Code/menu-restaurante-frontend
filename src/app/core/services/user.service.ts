import { Injectable, inject, computed, signal } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { environment } from '../../../environments/environment';
import { Observable, from, switchMap, of } from 'rxjs';

/**
 * Firebase Authentication Service
 *
 * Responsibility: Handles Firebase authentication operations including
 * Google sign-in, token management, and auth state changes.
 *
 * This service follows the Single Responsibility Principle by focusing
 * solely on Firebase authentication concerns.
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataStore = inject(DataStoreService);

  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);
  private googleProvider = new GoogleAuthProvider();

  private _token = signal<string | null>(localStorage.getItem('token'));
  readonly token = this._token.asReadonly();

  private _googleUser = signal<FirebaseUser | null>(null);
  readonly googleUser = this._googleUser.asReadonly();

  readonly user = this.dataStore.user;
  readonly isAdmin = computed(() => this.user()?.display_name === 'Admin');

  constructor() {
    this.auth.onAuthStateChanged(async (user) => {
      this._googleUser.set(user);
      if (user) {
        const token = await user.getIdToken();
        this._token.set(token);
        localStorage.setItem('token', token);
      } else {
        this._token.set(null);
        localStorage.removeItem('token');
      }
    });
  }

  /**
   * Signs in the user using Google OAuth popup.
   * @returns Observable emitting the Firebase user after successful sign-in
   */
  loginWithGoogle(): Observable<FirebaseUser> {
    return from(signInWithPopup(this.auth, this.googleProvider)).pipe(
      switchMap(async (result) => {
        const token = await result.user.getIdToken();
        this._token.set(token);
        localStorage.setItem('token', token);
        this._googleUser.set(result.user);
        return result.user;
      }),
    );
  }

  /**
   * Gets the current Firebase ID token.
   * @returns Observable emitting the token or null if no user is signed in
   */
  getIdToken(): Observable<string | null> {
    const user = this.auth.currentUser;
    if (user) {
      return from(user.getIdToken());
    }
    return of(null);
  }

  /**
   * Signs out the current user and clears all auth state.
   * @returns Observable that completes when sign-out is done
   */
  logout(): Observable<void> {
    this._token.set(null);
    localStorage.removeItem('token');
    this._googleUser.set(null);
    return from(this.auth.signOut());
  }
}
