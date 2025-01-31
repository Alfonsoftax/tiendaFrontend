import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Clientes } from '../cliente';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cliente: Clientes = new Clientes();

  constructor(private loginService: LoginService, private router: Router, private appComponent: AppComponent) {}

  abrirRegistro() {
    this.router.navigate(['/registro']);
  }

  iniciarSesion() {
    this.loginService.login(this.cliente).subscribe(
      response => {
        if (response) {
          console.log('Inicio de sesión exitoso', response);
          this.appComponent.onLoginSuccess(response);
          this.router.navigate(['/producto']);
        } else {
          Swal.fire({
            title: 'Usuario no encontrado',
            text: `Usuario o contraseña incorrecta`,
            icon: 'error',
            confirmButtonText: 'OK'
          }).then(() => {
            location.reload();
          });
        }
      },
      error => {
        Swal.fire({
          title: 'Usuario no encontrado',
          text: `Usuario o contraseña incorrecta`,
          icon: 'error',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload();
        });
      }
    );
  }

}
