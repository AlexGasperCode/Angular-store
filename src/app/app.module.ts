import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Para consumir servicios REST
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [  //Injectar componentes o directivas
    AppComponent, 
    HeaderComponent
  ],
  imports: [  //Injectamos los modulos que necesitamos
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule //Para poder usar los servicios
  ],
  providers: [],
  bootstrap: [AppComponent] //Raiz de la aplicación
})
export class AppModule { }


//Formularios reactivos