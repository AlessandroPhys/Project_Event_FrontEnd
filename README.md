# EventsApp - Frontend

## Project description

This is the repository for the Frontend of our sports event management website: 
https://github.com/Dhoron22/Project_Event_FrontEnd.git

It works together with a separate **backend** developed in Laravel.  

You can find the backend repository here: https://github.com/Dhoron22/Project_Event_BackEnd.git


The goal of this website is to provide a service for the sports community to discover, promote, and manage sports events.

We have focused on local sports events, aiming to provide an intuitive interface for both organizers and users.

## Key Features

 - **Feature 1:** User registration and login
 - **Feature 2:** Creation, editing, and deletion of events by the administrator
 - **Feature 3:** Creation, editing, and deletion of countries by the administrator
 - **Feature 4:** Creation, editing, and deletion of states by the administrator
 - **Feature 5:** Creation, editing, and deletion of categories by the administrator
 - **Feature 6:** Creation, editing, and deletion of status by the administrator
 - **Feature 7:** Creation, editing, and deletion of users by the administrator
 - **Feature 8:** Event list and event detail visualization
 - **Feature 9:** About Us section visualization
 - **Feature 10:** Contact form with the company
 - **Feature 11:** User authentication

---
## Technologies Used

### Frontend (Folder: Project_Event_FrontEnd)
 - **Languages:** TypeScript, HTML, JavaScript
 - **Frameworks:** This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.
 - **Package management:** npm 10.9.0
 - **Styles:** CSS, Bootstrap, Angular Material

---
## Local installation and execution
To run this project locally, make sure you also have the backend running.  
Follow the steps below:

### 1 Prerequisites
Make sure you have the following installed
 - **npm:** v10.9.0
 - **Node.js:** v22.11.0
 - **Angular CLI:** v19.0.1
 - **Angular Material:** v19.2.19
 - **Bootstrap:** v5.3.7
 - **Git:** The latest version

### 2 Clone the repository
Open your terminal and clone the repository in the same root folder:

# Clone the Frontend repository (in a new terminal or by going back to the root folder)
cd .. # If you are in the backend folder
git clone https://github.com/Dhoron22/Project_Event_FrontEnd.git
cd Project_Event_FrontEnd

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
