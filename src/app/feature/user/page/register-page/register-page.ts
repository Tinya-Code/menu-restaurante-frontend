import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserForm } from '../../components/user-form/user-form';
import { LucideAngularModule, Rocket, Zap, ShieldCheck } from 'lucide-angular';
import { UserService } from '../../../../core/services/user.service';
import { RestaurantRegistrationService } from '../../services/restaurant-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, UserForm, LucideAngularModule],
  templateUrl: './register-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  private userService = inject(UserService);
  private restaurantRegistrationService = inject(RestaurantRegistrationService);
  private router = inject(Router);

  readonly Rocket = Rocket;
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;

  // State management with signals
  loading = signal(false);
  success = signal(false);
  errorMessage = signal<string | null>(null);

  // Get initial display name from Google user if available
  readonly initialDisplayName = this.userService.googleUser()?.displayName || null;

  /**
   * Handles form submission from child component
   */
  onFormSubmitted(formData: any) {
    if (this.loading()) return;

    this.loading.set(true);
    this.errorMessage.set(null);

    const submissionData = {
      ...formData,
      slug: this.restaurantRegistrationService.generateSlug(formData.restaurant_name || ''),
    };

    this.restaurantRegistrationService.registerRestaurant(submissionData).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success) {
          this.success.set(true);
          console.log('Registro exitoso:', res);
          if (res.redirect_url) {
            this.router.navigateByUrl(res.redirect_url);
          }
        } else {
          this.errorMessage.set(res.message || 'Hubo un error al procesar tu registro.');
        }
      },
      error: (err: any) => {
        this.loading.set(false);
        this.errorMessage.set(
          'Hubo un error al procesar tu registro. Por favor, intenta de nuevo.',
        );
        console.error('Error en el registro:', err);
      },
    });
  }

  /**
   * Handles location changes from child component
   */
  onLocationChanged(coords: { lat: number; lng: number }) {
    console.log('Location changed:', coords);
    // Could be used to update state or trigger other actions
  }
}
