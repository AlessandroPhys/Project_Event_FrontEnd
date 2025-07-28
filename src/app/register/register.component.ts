import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  private baseURL = environment.apiUrl;
  // public email = null;
  public first_name?;
  public last_name?;
  public state_id?;
  public email?;
  public password?;

  constructor(private registerService: RegisterService) { }

  async ngOnInit() {
    fetch(`${this.baseURL}/api/v1/states`)
    .then((res) => res.json())
    .then((json) => {
      let element = document.getElementById("id_states");

      if (element) {
        for (let obj of json) {
          let option = document.createElement("option");
          option.value = obj["id"];
          option.innerText = obj["description"];
          element.appendChild(option);
        }
      }
    });
  }

  register() {
    this.registerService.register(this.first_name, this.last_name, this.state_id, this.email, this.password);
  }
}
