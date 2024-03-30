import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-eventcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './eventcreation.component.html',
  styleUrl: './eventcreation.component.css'
})
export class EventcreationComponent implements OnInit {
  eventForm!: FormGroup;
  selectedImage: SafeUrl | undefined;

  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)


  fb = inject(FormBuilder);
  sanitizer = inject(DomSanitizer);


  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventname: ['', Validators.required],
      club_name: ['', Validators.required],
      eventstudent: ['', Validators.required],
      eventvenue: ['', Validators.required],
      eventdate: ['', Validators.required],
      eventtime: ['', Validators.required],
      shortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      img: [null, Validators.required], // You might need to adjust the validation for image upload
    });
  }

  onFileSelected(event: any )  {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {

          // Convert the file data to a base64 string
      const base64Data = reader.result as string;

      // Sanitize the base64 data to create a safe URL
      const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(base64Data);

      // Set the selected image as the safe URL
      this.selectedImage = safeUrl;

      // Set the base64 image data directly into the form control
      this.eventForm.patchValue({
        img: base64Data
      });
    };
      reader.readAsDataURL(file);
      console.log(this.eventForm);
    }
  }

  onSubmit() {
    if (this.eventForm.value) {
      // Submit the form or perform other actions
      this.authService.createEvent(this.eventForm.value)
      .subscribe({
        next: (res) => {

          alert("event Created");
          //console.log(res);

        },
        error: (err) => {
          console.log (err);
          alert(err.error);
        }
      })

      console.log('Form submitted successfully:', this.eventForm.value);
      //this.eventForm.reset();
    } else {
      // Handle validation errors
      console.log('Form validation failed');

    }
  }


}
