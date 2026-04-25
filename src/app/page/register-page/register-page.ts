import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserForm } from '../../share/components/user-form/user-form';
import { LucideAngularModule, Rocket, Zap, ShieldCheck } from 'lucide-angular';
import { Header } from '../../share/components/header/header.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, UserForm, LucideAngularModule, Header],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  readonly Rocket = Rocket;
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
}
