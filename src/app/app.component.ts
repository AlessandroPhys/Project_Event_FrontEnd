import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-app-front';

  constructor(private router: Router) {}

  navigateToHome() {
      this.router.navigate(['/auth']);
  }
}
