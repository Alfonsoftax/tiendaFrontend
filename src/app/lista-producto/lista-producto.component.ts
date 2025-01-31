import { Component } from '@angular/core';
import { Producto } from '../producto';
import { TiendaService } from '../tienda.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Clientes } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

  producto: Producto[];
  cliente: Clientes;

  constructor(private tiendaServicio: TiendaService, private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerProducto();
    this.cliente = this.clienteService.getCliente();

}


  private obtenerProducto() {
    this.tiendaServicio.obtenerListaDeProductos().subscribe(dato => {
      this.producto = dato;
    });
  }

  aniadirCarrito(idProducto:number) {
    this.tiendaServicio.aniadirCarrito(idProducto,this.cliente.id).subscribe({
      next: () => {
        console.log('Producto añadido al carrito');
      },
      error: (err) => {
        console.error('Error al añadir el producto al carrito', err);
      }
    });
  }

}
