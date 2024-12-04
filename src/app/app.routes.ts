import { Routes } from '@angular/router';

import { CarritoComponent} from './carrito/carrito.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';

export const routes: Routes = [
    {path : 'producto',component:ListaProductoComponent},
    {path:'',redirectTo:'producto',pathMatch:'full'},
    {path : 'carrito',component : CarritoComponent},
  ];