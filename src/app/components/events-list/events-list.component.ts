import { Component,OnInit } from '@angular/core';
import {EventService} from '../../services/event.service'; //Adjuntar la ruta

@Component({
  selector: 'app-events-list',
  standalone: false,
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  title = 'mi-evento-frontend';
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage:string | null = null;

  constructor(private eventService: EventService) { }

  ngOnInit():void {
    this.eventService.getEvents().subscribe({
      next:(data)=> {
        this.events = data;
        this.isLoading = false;
        console.log('Eventos cargados:', this.events);
      },
      error:(err)=> {
        this.errorMessage = 'Error al cargar eventos. Por favor, intentalo de nuevo mas tarde';
        this.isLoading = false;
        console.error('Error al cargar eventos:', err);
      }
    });
  }
}
