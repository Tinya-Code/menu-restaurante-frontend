import { Component, inject, OnInit, input, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { LucideAngularModule, MapPin, Check, Loader2, CreditCard, Layout } from 'lucide-angular';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule, MapComponent],
  templateUrl: './user-form.html',
})
export class UserForm implements OnInit {
  private fb = inject(FormBuilder);

  // Icons
  readonly MapPin = MapPin;
  readonly Check = Check;
  readonly Loader2 = Loader2;
  readonly CreditCard = CreditCard;
  readonly Layout = Layout;

  // Inputs from parent component
  readonly initialDisplayName = input<string | null>(null);
  readonly loading = input<boolean>(false);
  readonly success = input<boolean>(false);
  readonly errorMessage = input<string | null>(null);

  // Outputs to parent component
  readonly formSubmitted = output<any>();
  readonly locationChanged = output<{ lat: number; lng: number }>();

  // Formulario reactivo con validaciones básicas
  form = this.fb.group({
    display_name: ['', [Validators.required, Validators.minLength(3)]],
    phone: [''],
    restaurant_name: ['', [Validators.required, Validators.minLength(3)]],
    address: [''],
    phone_restaurant: [''],
    lat: [null as number | null],
    lng: [null as number | null],
  });

  ngOnInit() {
    // Sincronización inicial con datos recibidos del padre
    if (this.initialDisplayName()) {
      this.form.patchValue({
        display_name: this.initialDisplayName() || '',
      });
    }
  }

  /**
   * Maneja cambios de ubicación desde el MapComponent
   */
  onLocationChange(coords: { lat: number; lng: number }) {
    this.form.patchValue({ lat: coords.lat, lng: coords.lng });
    this.locationChanged.emit(coords);
  }

  /**
   * Emite los datos del formulario al padre para procesamiento
   */
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();
    this.formSubmitted.emit(formValue);
  }
}
