import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  getName(): void {
    console.log('Angular 12 Alex Brito');
  }
  }

//Componente tiene propiedades de entrada y salida.
//Un componente tiene un ciclo de vida.
//Ts es una clase de TYPESCRIPT , vinculan la lóginica de la aplicación con el código.

