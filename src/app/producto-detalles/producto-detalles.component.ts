import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import {TiendaService } from '../tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-detalles',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent {

  id: number;
  producto: Producto;
  constructor(private route: ActivatedRoute, private tiendaServicio:TiendaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.tiendaServicio.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      Swal.fire(`Detalles del producto ${this.producto.descripcionProducto}`);
    });
  }

}
