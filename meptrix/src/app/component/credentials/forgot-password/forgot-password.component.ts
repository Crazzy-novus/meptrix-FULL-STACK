import { AuthService } from './../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup , Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotForm !: FormGroup;
  fb = inject (FormBuilder);
  authService = inject(AuthService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.forgotForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  OnSubmit() {
    console.log(this.forgotForm.value);
    this.authService.sendEmailService(this.forgotForm.value.email)
    .subscribe ({
      next: (res) => {
        alert (res.message);
        this.forgotForm.reset();
      },
      error: (err) => {
        alert(err.console.error.message);
      }
    });
  }
}

