import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';


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
  errorMessage:string | null = null;

  constructor(private eventService: EventService, public authService: AuthService) { }

  async ngOnInit() {
    this.eventService.getEvents()
    .then((json) => {
      this.events =  json;
      this.isLoading = false;
    },
    () => {
      this.errorMessage = 'Error al cargar eventos. Por favor, intentalo de nuevo mas tarde';
      this.isLoading = false;
    })
  }
}
