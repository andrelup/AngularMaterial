import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  ingresar() {
    const usuario = this.form.value.usuario
    const password = this.form.value.password;
    console.log('usuario: ', usuario);
    console.log('password: ', password);
    if (usuario === 'jperez' && password === 'admin123') {

    } else {
      this.error();
    }
  }
  error() {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  redirectToDashboard() {

  }
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.redirectToDashboard()
    }, 3000)
  }
}
