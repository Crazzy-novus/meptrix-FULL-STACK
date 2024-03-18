import { AuthService } from './../../../../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  resetForm !: FormGroup;
  fb = inject (FormBuilder);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  token!: string;
  AuthService = inject(AuthService);

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe (val => {
      this.token = val['token'];
      console.log(this.token);

    })
  }

  reset() {
    let resetObj = {
      token: this.token,
      password: this.resetForm.value.newpassword,
    }

    console.log(this.resetForm.value);
    this.AuthService.resetPasswordService(resetObj)
    .subscribe ({
      next: (res) => {
        alert (res.message);
        this.resetForm.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.console.error.message);
      }
    });

  }

}


