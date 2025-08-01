import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  // Si querés alguna lógica adicional, acá la ponés
}
