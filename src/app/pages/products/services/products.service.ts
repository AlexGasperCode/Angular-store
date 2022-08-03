import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface'; //Para el módelado utilizamos la interfaz Product

@Injectable({
  providedIn: 'root' //Éste servicio se puede usar en toda la aplicación
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products'; //URL de la API
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
//Angular utiliza observables para manejar operaciones asíncronas
//Esta clase se encargará de manejar los productos.
//Podemos reutilizar el código de la clase ProductsService.
//Service recibe los datos de la API.
//Promesas son objetos que se resuelven en un futuro.