import { Component } from '@angular/core';
import { EventService } from './services/event.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-app-front';

  events: any[] = [];

  constructor(private services: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.services.getEvents().subscribe(
      (response: any) => {
        console.log('Respuesta del backend:', response); // se ve en la consola del navegador
        this.events = response;
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );

  }
}
