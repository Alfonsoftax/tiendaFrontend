import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { Clientes } from './cliente';
import { Historial } from './historial';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  obtenerHistorial(idCliente: number) {
    return this.httpClient.get<Historial[]>(`${this.baseURL}/obtenerHistorial/${idCliente}`);
  }

  eliminarCarrito(idProducto: number, idCliente: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/eliminarCarrito/${idProducto}/${idCliente}`);
  }

  private baseURL = "http://localhost:8082/api/v1/tienda";

  obtenerCarrito(idCliente: number) {
    return this.httpClient.get<Producto[]>(`${this.baseURL}/obtenerCarrito/${idCliente}`);
  }
  obtenerCliente() : Observable<Clientes> {
    return this.httpClient.get<Clientes>(`${this.baseURL}/obtenerCliente`);
  }

  aniadirCarrito(idProducto: number,idCliente: number): Observable<void> {
    return this.httpClient.post<void>(`${this.baseURL}/aniadirCarrito/${idProducto}/${idCliente}`, null);
  }

  pagar(cliente: any, productos: any[], precioTotal: any): Observable<number> {
    const body = { cliente, productos, precioTotal };
    return this.httpClient.post<number>(`${this.baseURL}/pagar`, body);
  }

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

}
