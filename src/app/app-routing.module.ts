import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AuthGuard } from './components/guards/auth.guard';

const routes: Routes = [ 
  { path : "", redirectTo : "/auth", pathMatch : "full" },
  { path : "auth", component : AuthComponent },
  { path : "events", component : EventsListComponent, canActivate : [AuthGuard] },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
