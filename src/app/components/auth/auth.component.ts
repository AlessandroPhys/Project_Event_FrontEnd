import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'

})
export class AuthComponent {

  public email?;
  public password?;

  constructor(private service: AuthService) {}

  login(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      this.service.login(this.email, this.password);
    }
    else {
      event.target.reportValidity();
    }
  }

  logout() {
    this.service.logout();
  }
}
