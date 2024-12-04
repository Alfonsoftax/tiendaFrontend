import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { Clientes } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  eliminarCarrito(idProducto: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/eliminarCarrito/${idProducto}`);
  }

  private baseURL = "http://localhost:8082/api/v1/tienda";

  obtenerCarrito() {
    return this.httpClient.get<Producto[]>(`${this.baseURL}/obtenerCarrito`);
  }
  obtenerCliente() : Observable<Clientes> {
    return this.httpClient.get<Clientes>(`${this.baseURL}/obtenerCliente`);
  }

  aniadirCarrito(idProducto: number): Observable<void> {
    return this.httpClient.post<void>(`${this.baseURL}/aniadirCarrito/${idProducto}`, null);
  }

  pagar(): Observable<number> {
    return this.httpClient.delete<number>(`${this.baseURL}/pagar`);
  }

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

}
