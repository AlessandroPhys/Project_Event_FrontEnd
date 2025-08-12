import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private baseURL = environment.apiUrl;
  public user = localStorage.getItem("user");

  login(email: string, password: string) {
    fetch(`${this.baseURL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({"email" : email, "password" : password})
    })
    .then(async (res) => {
      let json = await res.json();
      if (res.status !== 200) {
        for (let field of ["email", "password", "message"]) {
          let element = document.getElementById(`error_${field}`);
          if (element) {
            element.innerText = json["errors"] !== undefined && json["errors"][field] !== undefined && res.status === 422 ? json["errors"][field][0] : res.status === 401 && field === "message" ? json["message"] : "";
          }
        }
      }
      else {
        localStorage.setItem("token", json["token"]);
        localStorage.setItem("role", json["role"]);
        localStorage.setItem("user_id", json["id"]);
        this.user = email;
        localStorage.setItem("user", email);
        if (this.isAuthenticated()) {
          window.open("/", "_self");
        }
      }
    });
  }

  isAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  isAdmin() {
    return localStorage.getItem("role") === "ADMIN";
  }

  async wrapper(url: string, method: string, body?: object) {
    let init = {
      method: method,
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        "Accept" : "application/json"
      }
    };
    if (body !== null) {
      init["body"] = JSON.stringify(body)
    }
    let res  = await fetch(`${this.baseURL}${url}`, init);
    let json = await res.json();

    return json;
  }

  logout() {
    fetch(`${this.baseURL}/api/v1/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then(() => {
      localStorage.clear();
    })
    .finally(() => window.open("/", "_self"));
  }
}
