import { Component } from '@angular/core';
import { Producto } from '../producto';
import { TiendaService } from '../tienda.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Clientes } from '../cliente';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

  producto: Producto[];
  cliente:Clientes;
  constructor(private tiendaServicio: TiendaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProducto();
    
  this.obtenerCliente();
}
  private obtenerCliente() {
    this.tiendaServicio.obtenerCliente().subscribe(dato2 => {
      this.cliente = dato2;
    });
  }

  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }

  private obtenerProducto() {
    this.tiendaServicio.obtenerListaDeProductos().subscribe(dato => {
      this.producto = dato;
    });
  }

  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.tiendaServicio.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProducto();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    });


  }


  verDetallesDelProducto(id: number) {
    this.router.navigate(['producto-detalles', id]);
  }

}
