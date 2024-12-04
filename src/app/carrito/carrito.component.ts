import { Component } from '@angular/core';
import { Producto} from '../producto';
import {TiendaService } from '../tienda.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, tap, throwError } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  producto: Producto[];
  total:number = 0;
  constructor(private tiendaServicio:TiendaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCarrito();
  }
  private obtenerCarrito() {
    this.tiendaServicio.obtenerCarrito().subscribe(dato => {
      this.producto = dato;
      this.total = this.producto.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
      }, 0);
    });
  }

  pagar() {
    this.tiendaServicio.pagar().subscribe(dato => {
      if (dato != null) {
        Swal.fire({
          title: 'Pago realizado',
          text: `Se ha pagado un total de: ${this.total}`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {

          location.reload();
        });
      }
    });
  }

  eliminarCarrito(idProducto:number) {
    this.tiendaServicio.eliminarCarrito(idProducto).subscribe({
      next: () => {
        Swal.fire({
          title: 'Producto Eliminado',
          text: `El producto se ha eliminado del carrito`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload();
        });
      },
      error: (err) => {
        console.error('Error al añadir el producto al carrito', err);
      }
    });
  }
}
