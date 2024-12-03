import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { Clientes } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  obtenerCarrito() {
    return this.httpClient.get<Producto[]>(`${this.baseURL}/obtenerCarrito`);
  }
  obtenerCliente() : Observable<Clientes> {
    return this.httpClient.get<Clientes>(`${this.baseURL}/obtenerCliente`);
  }

  private baseURL = "http://localhost:8082/api/v1/tienda";

  constructor(private httpClient: HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un empleado
  registrarProducto(producto: Producto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, producto);
  }

  //este metodo sirve para actualizar el empleado
  actualizarProducto(id: number, producto: Producto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, producto);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
  }

  eliminarProducto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
