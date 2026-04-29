import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header.component';

@Component({
  selector: 'app-portal-user-layout',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <router-outlet></router-outlet>
  `,
})
export class PortalUserLayout {}
