import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloseOSComponent } from './close-os/close-os.component';
import { HomeComponent } from './home/home.component';
import { OpenOSComponent } from './open-os/open-os.component';
import { StatusComponent } from './status/status.component';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'open-os', component: OpenOSComponent},
    { path: 'close-os', component: CloseOSComponent},
    { path: 'status', component: StatusComponent},
    { path: 'registros', component: RegistrosComponent}
    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
