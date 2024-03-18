import { AuthService } from './../../../services/auth.service.js';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  fb = inject(FormBuilder);
  registerForm !: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  router = inject(Router); // Injecting Router to navigate to the login page after successful registration

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      roles: ['default', Validators.required]
    })
  }

  onSubmit() {
    // Perform validation here
    if (this.registerForm.value) {
      // Submit the form or perform other actions
      this.authService.registerService(this.registerForm.value)
      .subscribe({
        next: (res) => {

          alert("User Created");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log (err);
          alert(err.error.message);
        }
      })

      console.log('Form submitted successfully:', this.registerForm.value);
      this.registerForm.reset();
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
