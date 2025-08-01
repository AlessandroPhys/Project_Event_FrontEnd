import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './components/guards/admin-guard.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  // Home en la raíz
  { path: '', component: HomeComponent },

  // Rutas públicas
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },

  // Rutas admin protegidas
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },

  // Catch-all
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
