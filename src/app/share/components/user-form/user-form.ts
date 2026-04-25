import { Component, inject, OnInit, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { LucideAngularModule, MapPin, Check, Loader2, CreditCard, Layout } from 'lucide-angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './user-form.html',
})
export class UserForm implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  // Icons
  readonly MapPin = MapPin;
  readonly Check = Check;
  readonly Loader2 = Loader2;
  readonly CreditCard = CreditCard;
  readonly Layout = Layout;

  // Signals for state management
  loading = signal(false);
  success = signal(false);
  errorMessage = signal<string | null>(null);

  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map?: L.Map;
  private marker?: L.Marker;

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
    // Sincronización inicial con datos de Google si existen
    const googleUser = this.userService.googleUser();
    if (googleUser) {
      this.form.patchValue({
        display_name: googleUser.displayName || '',
      });
    }
  }

  ngAfterViewInit() {
    this.initMap();
  }

  /**
   * Inicializa el mapa de Leaflet y configura el marcador interactivo.
   */
  private initMap() {
    const defaultLat = -12.046374;
    const defaultLng = -77.042793;

    this.map = L.map(this.mapContainer.nativeElement).setView([defaultLat, defaultLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(this.map);

    this.marker.on('dragend', () => {
      const position = this.marker?.getLatLng();
      if (position) {
        this.form.patchValue({ lat: position.lat, lng: position.lng });
      }
    });

    // Geolocalización automática si el navegador lo permite
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        this.map?.setView([latitude, longitude], 15);
        this.marker?.setLatLng([latitude, longitude]);
        this.form.patchValue({ lat: latitude, lng: longitude });
      });
    }
  }

  /**
   * Genera un slug basado en el nombre del restaurante.
   */
  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Procesa el envío del formulario al backend.
   */
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    const rawValue = this.form.getRawValue();
    const submissionData = {
      ...rawValue,
      slug: this.generateSlug(rawValue.restaurant_name || '')
    };

    console.log('Enviando datos de registro:', submissionData);

    this.userService.registerRestaurant(submissionData).subscribe({
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
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set('Hubo un error al procesar tu registro. Por favor, intenta de nuevo.');
        console.error('Error en el registro:', err);
      }
    });
  }
}
