import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contestcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contestcreation.component.html',
  styleUrl: './contestcreation.component.css'
})
export class ContestcreationComponent implements OnInit {
[x: string]: any;
  contentForm!: FormGroup;

  fb = inject(FormBuilder);
contestForm: any;


  ngOnInit(): void {
    this.contentForm = this.fb.group({
      contestname: ['', Validators.required],
      clubevent: ['', Validators.required],
      studentevent: ['', Validators.required],
      contestvenue: ['', Validators.required],
      contestdate: ['', Validators.required],
      contesttime: ['', Validators.required],
      contestshortdescripition: ['', [Validators.required, Validators.maxLength(100)]],
      contestdescripition: ['', [Validators.required, Validators.maxLength(1000)]],
      contestimg: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }

  onSubmit() {
    if (this.contentForm.valid) {
      // Form is valid, you can submit it
      console.log(this.contentForm.value);
      this.contentForm.reset();
      // Here you can call your service to send the form data to the server
    } else {
      // Form is invalid, handle errors or display messages to the user
      console.log('Form is invalid');

    }
  }
}