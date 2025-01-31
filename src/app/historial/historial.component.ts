import { Component } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { Clientes } from '../cliente';
import { ClienteService } from '../cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  pedidos: any[] = [];
  cliente: Clientes;

  constructor(private tiendaServicio: TiendaService, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
    this.obtenerHistorial();
  }

  obtenerHistorial() {
    this.tiendaServicio.obtenerHistorial(this.cliente.id).subscribe(data => {
      this.pedidos = data;
    });
  }
}
