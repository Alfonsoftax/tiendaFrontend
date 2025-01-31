import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TiendaService } from './tienda.service';
import { Clientes } from './cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  cliente: Clientes;
  isLoggedIn = false;

  ngOnInit(): void {
    if(this.cliente == null) {
      this.router.navigate(['/login']);
    }
  } 
  title = 'tienda online';
  constructor(private tiendaServicio: TiendaService, private router: Router, private clienteService: ClienteService) { }
  private obtenerCliente() {
    this.tiendaServicio.obtenerCliente().subscribe(dato => {
      this.cliente = dato;
    });
  }
  onLoginSuccess(cliente: any) {
    this.cliente = cliente;
    this.isLoggedIn = true;
    this.clienteService.setCliente(cliente); 
  }
  cerrarSesion() {
    this.cliente === null;
    this.isLoggedIn = false;
    this.clienteService.setCliente(null);
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }
}
