import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private baseURL = environment.apiUrl;

  login(email: string, password: string) {
    fetch(`${this.baseURL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({"email" : email, "password" : password})
    })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("token", json["token"]);
      if (this.isAuthenticated()) {
        this.router.navigate(['/events']);
      }
    });
  }

  isAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  async getWrapper(url: string, method: string) {
    let res  = await fetch(`${this.baseURL}${url}`, {
      method: method,
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    });
    let json = await res.json();
  
    return json;
  }

    async PostWrapper(url: string, method: string, body: object) {
    let res  = await fetch(`${this.baseURL}${url}`, {
      method: method,
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      },
      body : JSON.stringify(body)
    });
    let json = await res.json();
  
    return json;
  }

  logout() {
    fetch(`${this.baseURL}/api/v1/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((res) => {
      localStorage.removeItem("token");
      this.router.navigate(["/auth"]);
    });
  }
}
