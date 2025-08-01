import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: false,
  styleUrl: './nav-bar.component.css'  // <--- corregido aquí
})
export class NavBarComponent {
  constructor(public authService: AuthService) {}
}
