import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service'; // Ajusta la ruta
@Component({
  selector: 'app-root', // O 'app-events-list' si creaste uno nuevo
  templateUrl: './app.component.html',
  standalone: false, // Si estás usando Angular 14 o superior y quieres usar standalone components
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eventos Deportivos';
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.isLoading = false;
        console.log('Eventos cargados:', this.events);
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar eventos. Por favor, inténtalo de nuevo más tarde.';
        this.isLoading = false;
        console.error('Error al cargar eventos:', err);
      }
    });
  }
}
