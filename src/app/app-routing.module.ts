import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuard } from './components/guards/admin-guard.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // Home en la raíz
  { path: '', component: HomeComponent },

  // Rutas públicas
  { path : "register", component : RegisterComponent },
  { path : "auth", component : AuthComponent },
  { path : "admin", component : AdminComponent, canActivate : [AdminGuard] },
  { path : "about", component : AboutComponent },
  { path : "contact", component : ContactComponent },
  { path : '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
