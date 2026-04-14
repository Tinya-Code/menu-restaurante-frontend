import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, BookOpen, Menu, X, User, LogOut, ChevronDown, Rocket, LogIn } from 'lucide-angular';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './header.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private userService = inject(UserService);
  private router = inject(Router);
  
  // State
  isMenuOpen = signal(false);
  isUserDropdownOpen = signal(false);
  
  // User data
  token = this.userService.token;

  // Icons
  readonly BookOpen = BookOpen;
  readonly Menu = Menu;
  readonly X = X;
  readonly User = User;
  readonly LogOut = LogOut;
  readonly ChevronDown = ChevronDown;
  readonly Rocket = Rocket;
  readonly LogIn = LogIn;

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleUserDropdown() {
    this.isUserDropdownOpen.update(v => !v);
  }

  signInWithGoogle() {
    this.userService.loginWithGoogle().subscribe({
      next: (user) => {
        console.log('User signed in:', user);
        this.isUserDropdownOpen.set(false);
        this.router.navigate(['/register']); // Redirige solo si sale bien
      },
      error: (err) => {
        console.error('Sign in error:', err);
      }
    });
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.isUserDropdownOpen.set(false);
      this.router.navigate(['/']);
    });
  }
}
