import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

import { AuthService } from '../../services/auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-events-list',
  standalone: false,
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  title = "Events app";
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private eventService: EventService,
    public authService: AuthService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'calendar',
      this.sanitizer.bypassSecurityTrustResourceUrl('/img/calendar.png')
    );
    this.iconRegistry.addSvgIcon(
      'clock',
      this.sanitizer.bypassSecurityTrustResourceUrl('/img/clock.png')
    );
    this.iconRegistry.addSvgIcon(
      'marker',
      this.sanitizer.bypassSecurityTrustResourceUrl('/img/marker.png')
    );
  }

  async ngOnInit() {
    this.eventService.getEvents()
      .then((json) => {
        this.events = json;
        this.isLoading = false;
      })
      .catch(() => {
        this.errorMessage = 'Error al cargar eventos. Por favor, intentalo de nuevo más tarde';
        this.isLoading = false;
      });
  }
}
