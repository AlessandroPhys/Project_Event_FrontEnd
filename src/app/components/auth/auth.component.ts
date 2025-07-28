import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  imports: [FormsModule, NavBarComponent],
})
export class AuthComponent {

  public email = null;
  public password = null;
  
  constructor(private service: AuthService) {}

  login() {
    if (this.email !== null && this.password !== null) {
      this.service.login(this.email, this.password);
    }
  }

  logout() {
    this.service.logout();
  }
}
