import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenOSComponent } from './open-os/open-os.component';
import { CloseOSComponent } from './close-os/close-os.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from './status/status.component';
import { OsService } from './service/os.service';
import { RegistrosComponent } from './registros/registros.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenOSComponent,
    CloseOSComponent,
    NavbarComponent,
    StatusComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,

    ],
  providers: [HttpClientModule, OsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
