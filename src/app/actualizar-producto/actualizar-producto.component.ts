import { Component } from '@angular/core';
import { Producto } from '../producto';
import {TiendaService } from '../tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  id: number;
  producto: Producto = new Producto();
  constructor(private tiendaService:TiendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


  }

  irAlaListaDeProducto() {
    this.router.navigate(['/producto']);
    Swal.fire('Producto actualizado', `El producto ${this.producto.descripcionProducto} ha sido actualizado con exito`, `success`);
  }

  onSubmit(): void {
    if (this.producto) {
      this.tiendaService.actualizarProducto(this.id, this.producto).pipe(
        tap(dato => {
          this.irAlaListaDeProducto(); // Redirige en caso de éxito
        }),
        catchError(error => {
          console.error('Error al actualizar el empleado:', error);
          return of(null); // Retorna un observable vacío en caso de error
        })
      ).subscribe(); // Realiza la suscripción
    }
  }

}
