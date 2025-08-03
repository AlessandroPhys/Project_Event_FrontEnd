import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  // getEvents(): Observable<any[]> {//Asumimos que devuelve un array de eventos
  //   return this.http.get<any[]>(`${this.apiUrl}/api/v1/events`);
  // }

  async getEvents() {
    return await this.authService.wrapper("/api/v1/events", "GET");
  }

  getEventById(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/events/${id}`);
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v1/events`, eventData);
  }

  updateEventFull(id: number, eventData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v1/events/${id}`, eventData);
  }

  updateEventPartial(id: number, eventData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/api/v1/events/${id}`, eventData);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v1/events/${id}`);
  }

}
