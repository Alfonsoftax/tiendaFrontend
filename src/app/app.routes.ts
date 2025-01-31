import { Routes } from '@angular/router';

import { CarritoComponent} from './carrito/carrito.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HistorialComponent } from './historial/historial.component';

export const routes: Routes = [
    {path : 'registro',component:LoginRegisterComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path : 'login',component:LoginComponent},
    {path : 'producto',component:ListaProductoComponent},
    {path : 'carrito',component : CarritoComponent},
    {path : 'historial',component : HistorialComponent}
  ];