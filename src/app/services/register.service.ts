import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private authService: AuthService) { }

  private baseURL = environment.apiUrl;

  register(first_name: string, last_name: string, state_id: string, email: string, password: string) {
    fetch(`${this.baseURL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "first_name" : first_name,
        "last_name" : last_name,
        "state_id" : state_id,
        "email" : email,
        "password" : password
      })
    })
    .then(async (res) => {
      let json = await res.json();
      if (res.status !== 201) {
        for (let field of ["first_name", "last_name", "state_id", "email", "password"]) {
          let element = document.getElementById(`error_${field}`);
          if (element) {
            element.innerText = json["errors"] !== undefined && json["errors"][field] !== undefined && res.status === 422 ? json["errors"][field] : "";
          }
        }
      }
      else {
        let element = document.getElementById("id_msg");
        if (element) {
          element.style.display = "block";
        }
      }
    });
  }
}
