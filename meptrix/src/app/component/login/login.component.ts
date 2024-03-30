import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';


import { Router, RouterLink } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { AuthService } from '../../../services/auth.service';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, AboutComponent, ReactiveFormsModule, RouterLink]
})


export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  loginForm !: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  router = inject(Router); // Injecting Router to navigate to the login page after successful registration

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      roles: ['default', Validators.required]
    })
  }

  onSubmit() {
    // Perform validation here
    if (this.loginForm.value) {
      // Submit the form or perform other actions
      this.authService.loginService(this.loginForm.value)
      .subscribe({
        next: (res) => {

          alert("User Loged in");
          //console.log(res);
          //localStorage.setItem('token', res.token);
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.log (err);
          alert(err.error);
        }
      })

      console.log('Form submitted successfully:', this.loginForm.value);
      this.loginForm.reset();
    } else {
      // Handle validation errors
      console.log('Form validation failed');

    }
  }

  onLogin() {
    // Handle login button click
    alert('Login functionality not implemented');
  }
}
