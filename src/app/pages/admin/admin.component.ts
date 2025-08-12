import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  apps = [
    {
      "name" : "Countries", "url" : "/api/v1/countries", "head" : ["Descripción"], "body" : ["description"],
      "types" : ["input", "input"],
      "opts" : [],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "description", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "description", "required" : true, oninput : (event) => this.handleFormChanges(event)}
      ],
      "extra_fields" : []
    },
    {
      "name" : "States", "url" : "/api/v1/states", "head" : ["Descripción", "Pais"], "body" : ["description", "country_id"],
      "types" : ["input", "input", "select"],
      "opts" : ["/api/v1/countries"],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "description", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "description", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "country_id", "classList" : "form-control", "id" : "contry_id", "required" : true, oninput : (event) => this.handleFormChanges(event)}
      ],
      "extra_fields" : []
    },
    {
      "name" : "Categories", "url" : "/api/v1/categories", "head" : ["Descripción"],  "body" : ["description"],
      "types" : ["input", "input"],
      "opts" : [],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "description", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "description", "required" : true, oninput : (event) => this.handleFormChanges(event)}
      ],
      "extra_fields" : []
    },
    {
      "name" : "Status", "url" : "/api/v1/status", "head" : ["Descripción"],  "body" : ["description"],
      "types" : ["input", "input"],
      "opts" : [],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "description", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "description", "required" : true, oninput : (event) => this.handleFormChanges(event)}
      ],
      "extra_fields" : []
    },
    {
      "name" : "Users", "url" : "/api/v1/users", "head" : ["Nombres", "Apellido", "Email", "Rol"],  "body" : ["first_name", "last_name", "email", "role_id"],
      "types" : ["input", "input", "input", "input", "input", "select", "select"],
      "opts" : ["/api/v1/roles", "/api/v1/states"],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "first_name", "type" : "text", "minLength" : 2, "classList" : "form-control", "id" : "first_name", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "last_name", "type" : "text", "minLength" : 2, "classList" : "form-control", "id" : "last_name", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "email", "type" : "email", "classList" : "form-control", "id" : "email", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "password", "type" : "password", "minLength" : 8, "classList" : "form-control", "id" : "password", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "role_id", "classList" : "form-control", "id" : "role_id", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "state_id", "classList" : "form-control", "id" : "state_id", "required" : true, oninput : (event) => this.handleFormChanges(event)}
      ],
      "extra_fields" : []
    },
    {
      "name" : "Events", "url" : "/api/v1/events", "head" : ["Titulo", "Categoria", "Ubicación", "Fecha"],  "body" : ["title", "category_id", "location", "date_time"],
      "types" : ["input", "input", "input", "input", "input", "input", "select"],
      "opts" : ["/api/v1/categories"],
      "fields" : [
        {"name" : "id", "readOnly" : true, "type" : "text", "classList" : "form-control", "id" : "id"},
        {"name" : "title", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "title", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "description", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "description", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "date_time", "type" : "datetime-local", "classList" : "form-control", "id" : "date_time", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "location", "type" : "text", "minLength" : 4, "classList" : "form-control", "id" : "location", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "capacity", "type" : "number", "min" : 1, "classList" : "form-control", "id" : "capacity", "required" : true, oninput : (event) => this.handleFormChanges(event)},
        {"name" : "category_id", "classList" : "form-control", "id" : "category_id", "required" : true, onchange : (event) => this.handleFormChanges(event)},
      ],
      "extra_fields" : [{"user_id" : localStorage.getItem("user_id")}]
    }
  ];
  data = {};
  url?

  constructor(private authService: AuthService) {}

  createElement(props, el) {
    let element = document.createElement(el);
    for (let prop in props) {
      element[prop] = props[prop];
    }

    return element;
  }

  handleFormChanges(event) {
    let value = event.target.value
    if (event.target.type === "datetime-local") {
      value = `${value.substring(0, 10)} ${value.substring(11)}`;
    }
    this.data = {...this.data, [event.target.name] : value};
  }

  createTableHead(node, array) {
    let head = node.children[0].children[0];
    let tr = document.createElement("tr");
    head.innerHTML = "";

    tr.appendChild(this.createElement({innerText : "Nº", classList : "text-center"}, "td"));
    for (let elm of array) {
      tr.appendChild(this.createElement({innerText : elm}, "td"));
    }
    tr.appendChild(this.createElement({innerText : "Acciones"}, "td"));
    head.appendChild(tr);
  }

  createTableBody(node, json, array, name, section) {
    let body = node.children[0].children[1];
    let index = 1;
    body.innerHTML = "";

    if (json.length !== 0) {
      for (let obj of json) {
        let tr = document.createElement("tr");

        tr.appendChild(this.createElement({innerText : index++, classList : "text-center"}, "td"));
        for (let prop of array) {
          if (prop.endsWith("_id")) {
            tr.appendChild(this.createElement({innerText : obj[prop.substring(0, prop.search("_id"))]["description"]}, "td"));
          }
          else {
            tr.appendChild(this.createElement({innerText : obj[prop]}, "td"));
          }
        }
        let td = document.createElement("td");
        td.appendChild(this.createElement({type : "button", classList : "btn btn-outline-primary bi bi-pencil m-1", value : `${section},${obj["id"]}`, title : "Editar" , onclick : (event) => this.getOne(event)}, "button"));
        
        if (obj["deleted_at"] !== null) {
          td.appendChild(this.createElement({type : "button", classList : "btn btn-outline-success bi bi-arrow-up m-1", value : `/api/v1/${name.toLowerCase()}/${obj["id"]}`, title : "Dar de alta", onclick : (event) => this.restore(event)}, "button"));
        }
        else {
          td.appendChild(this.createElement({type : "button", classList : "btn btn-outline-danger bi bi-arrow-down m-1", value : `/api/v1/${name.toLowerCase()}/${obj["id"]}`, title : "Dar de baja", onclick : (event) => this.delete(event)}, "button"));
        }

        tr.appendChild(td);
        body.appendChild(tr);
      }
    }
    else {
      let tr = document.createElement("tr");
      tr.appendChild(this.createElement({innerText : `Sin ${name} cargados`, classList : "text-center", colSpan : (array.length + 2)}, "td"));
      body.appendChild(tr);
    }
  }

  getAll(event) {
    let url = this.apps[event.target.value]["url"];
    if (url !== undefined) {
      this.authService.wrapper(url, "GET", undefined)
      .then((json) => {
        let section1 = document.getElementById("section_1");
        let section2 = document.getElementById("section_2");
        if (section1 !== null && section2 !== null) {
          section1.style.display = "none";
          this.createTableHead(section2, this.apps[event.target.value]["head"]);
          this.createTableBody(section2, json, this.apps[event.target.value]["body"], this.apps[event.target.value]["name"], event.target.value);
          section2.style.display = "block";
        }
      });
    }
  }

  getOne(event) {
    let vals = event.target.value.split(",")
    this.url = `${this.apps[vals[0]]["url"]}/${vals[1]}`;
    if (this.url !== undefined) {
      this.authService.wrapper(this.url, "GET", undefined)
      .then((json) => {
        let section2 = document.getElementById("section_2");
        let section3 = document.getElementById("section_3");
        let opts = 0;
        this.data = {};

        if (section2 !== null && section3 !== null) {
          section3.children[0].innerHTML = "";
          for (let i = 0; i < this.apps[vals[0]]["fields"].length; i ++) {
            let div = this.createElement({classList : "col"}, "div");
            let elm = this.createElement(this.apps[vals[0]]["fields"][i], this.apps[vals[0]]["types"][i]);
            let value;
            if (this.apps[vals[0]]["fields"][i]["name"].endsWith("_id")) {
              value = json[this.apps[vals[0]]["fields"][i]["name"].substring(0, this.apps[vals[0]]["fields"][i]["name"].search("_id"))]["id"];
              this.data[this.apps[vals[0]]["fields"][i]["name"]] = value;
            }
            else {
              elm.value = this.data[this.apps[vals[0]]["fields"][i]["name"]] = json[this.apps[vals[0]]["fields"][i]["name"]];
            }
            if (this.apps[vals[0]]["types"][i] === "select") {
              this.authService.wrapper(this.apps[vals[0]]["opts"][opts++], "GET", undefined)
              .then((json) => {
                for (let obj of json) {
                  elm.appendChild(
                    this.createElement({value : obj["id"], innerText : obj["description"], selected : obj["id"] === value}, "option")
                  );
                }
              })
            }
            div.append(
              this.createElement({
                innerText : `${this.apps[vals[0]]["fields"][i]["name"]}:`,
                htmlFor : this.apps[vals[0]]["fields"][i]["name"],
                classList : "form-label"}, "label"),
              elm);
            section3.children[0].appendChild(div);
          }
          section2.style.display = "none";
          section3.style.display = "block";
        }
      });
    }
  }

  create(event) {
    let section1 = document.getElementById("section_1");
    let section4 = document.getElementById("section_4");
    let opts = 0;
    this.data = {};
    this.url = this.apps[event.target.value]["url"];

    if (section1 !== null && section4 !== null) {
      section4.children[0].innerHTML = "";
      for (let i = 1; i < this.apps[event.target.value]["fields"].length; i ++) {
        let div = this.createElement({classList : "col"}, "div");
        let elm = this.createElement(this.apps[event.target.value]["fields"][i], this.apps[event.target.value]["types"][i]);
        if (this.apps[event.target.value]["types"][i] === "select") {
          this.authService.wrapper(this.apps[event.target.value]["opts"][opts++], "GET", undefined)
          .then((json) => {
            for (let obj of json) {
              elm.appendChild(
                this.createElement({value : obj["id"], innerText : obj["description"]}, "option")
              );
            }
          })
        }
        div.append(
          this.createElement({
            innerText : `${this.apps[event.target.value]["fields"][i]["name"]}:`,
            htmlFor : this.apps[event.target.value]["fields"][i]["name"],
            classList : "form-label"}, "label"),
          elm);
        section4.children[0].appendChild(div);
        for (let obj of this.apps[event.target.value]["extra_fields"]) {
          for (let prop in obj) {
            this.data[prop] = obj[prop];
          }
        }
      }
      section1.style.display = "none";
      section4.style.display = "block";
    }
  }

  save(event) {
    event.preventDefault();
  
    if (event.target.checkValidity()) {
      this.authService.wrapper(this.url, "POST", this.data)
      .then((json) => {
        if (json !== null) {
          let elm = document.getElementById("id_msg");
          if (elm !== null) {
            elm.innerText = "Cambios Realizados";
          }
        }
      });
    }
    else {
      event.target.reportValidity();
    }
  }

  update(event) {
    event.preventdefault();

    if (event.target.checkValidity()) {
      this.authService.wrapper(this.url, "PUT", this.data)
      .then((json) => {
        if (json !== null) {
          let elm = document.getElementById("id_msg");
          if (elm !== null) {
            elm.innerText = "Cambios Realizados";
          }
        }
      });
    }
    else {
      event.target.reportValidity();
    }
  }

  delete(event) {
    this.authService.wrapper(event.target.value, "DELETE", undefined)
    .then((json) => {
      if (json["status"]) {
        event.target.classList = "btn btn-outline-success bi bi-arrow-up m-1";
        event.target.addEventListener("click", (event) => this.restore(event));
      }
    });
  }

  restore(event) {
    this.authService.wrapper(event.target.value, "PATCH", undefined)
    .then((json) => {
      if (json["deleted_at"] === null) {
        event.target.classList = "btn btn-outline-danger bi bi-arrow-down m-1";
        event.target.addEventListener("click", (event) => this.delete(event));
      }
    });
  }

  toggleBack(n1, n2) {
    let section1 = document.getElementById(`section_${n1}`);
    let section2 = document.getElementById(`section_${n2}`);
    let elm = document.getElementById("id_msg");
    if (section1 !== null && section2 !== null && elm !== null) {
      section1.style.display = "block";
      section2.style.display = "none";
      elm.innerText = "";
    }
  }
}
