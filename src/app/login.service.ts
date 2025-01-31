import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { Clientes } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(cliente: Clientes): Observable<Clientes> {
    return this.httpClient.post<Clientes>(`${this.baseURL}/login`, cliente);
  }


  private baseURL = "http://localhost:8082/api/v1/login";




  constructor(private httpClient: HttpClient) { }

  
  registro(cliente: Clientes): Observable<void> {
    return this.httpClient.post<void>(`${this.baseURL}/registro`, cliente);
  }

}
