import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('/img/facebook.png')
    );
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('/img/twitter.png')
    );
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('/img/instagram.pn')
    );
  }
}
