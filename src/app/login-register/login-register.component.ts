import { Component } from '@angular/core';
import { Clientes } from '../cliente';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
volver() {
  this.router.navigate(['/login']);
}

  cliente: Clientes = new Clientes();
  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
    if(this.cliente == null) {
      this.cliente = new Clientes();
    }
}
  constructor(private loginService: LoginService, private router: Router, private clienteService: ClienteService, private appComponent: AppComponent) {}

  isLogged() {
    return this.appComponent.isLoggedIn;
  }
  registrarCliente() {
    this.loginService.registro(this.cliente).subscribe(
      response => {
        if(!this.isLogged()) {
          Swal.fire({
            title: 'Registro correcto',
            text: `Se ha registrado correctamente`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            location.reload();
          });
          this.router.navigate(['/login']);
        } else {
          Swal.fire({
            title: 'Registro correcto',
            text: `Se ha actualizado correctamente`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      },
      error => {
        Swal.fire({
          title: 'Registro incorrecto',
          text: `El nombre de usuario ya existe`,
          icon: 'error',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload();
        });
      }
    );
  }
}
