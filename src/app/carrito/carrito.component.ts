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
  constructor(private tiendaServicio:TiendaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCarrito();
  }
  private obtenerCarrito() {
    this.tiendaServicio.obtenerCarrito().subscribe(dato => {
      this.producto = dato;
    });
  }

}
