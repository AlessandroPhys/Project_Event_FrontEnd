import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './components/guards/auth.guard';
import { AdminGuard } from './components/guards/admin-guard.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path : "", component : EventsListComponent },
  { path : "register", component : RegisterComponent },
  { path : "auth", component : AuthComponent },
  { path : "admin", component : AdminComponent, canActivate : [AdminGuard] },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
