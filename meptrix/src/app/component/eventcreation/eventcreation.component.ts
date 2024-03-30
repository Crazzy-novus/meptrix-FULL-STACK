import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-eventcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './eventcreation.component.html',
  styleUrl: './eventcreation.component.css'
})
export class EventcreationComponent implements OnInit {
  eventForm!: FormGroup;

  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventname: ['', Validators.required],
      eventclub: ['', Validators.required],
      eventstudent: ['', Validators.required],
      eventvenue: ['', Validators.required],
      eventdate: ['', Validators.required],
      eventtime: ['', Validators.required],
      shortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      img: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // Form is valid, you can submit it
      console.log(this.eventForm.value);
      this.eventForm.reset();
      // Here you can call your service to send the form data to the server
    } else {
      // Form is invalid, handle errors or display messages to the user
      console.log('Form is invalid');

    }
  }


}
