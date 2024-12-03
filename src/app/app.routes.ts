import { Routes } from '@angular/router';

import { CarritoComponent} from './carrito/carrito.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';

export const routes: Routes = [
    {path : 'producto',component:ListaProductoComponent},
    {path:'',redirectTo:'producto',pathMatch:'full'},
    {path : 'carrito',component : CarritoComponent},
    {path : 'actualizar-producto/:id',component : ActualizarProductoComponent},
    {path : 'producto-detalles/:id',component : ProductoDetallesComponent}
  ];