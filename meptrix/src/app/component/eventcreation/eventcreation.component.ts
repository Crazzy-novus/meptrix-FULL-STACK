import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


import { AuthService } from '../../../services/auth.service';
import {Storage, getDownloadURL, ref, uploadBytes} from '@angular/fire/storage';

@Component({
  selector: 'app-eventcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './eventcreation.component.html',
  styleUrl: './eventcreation.component.css'
})

export class EventcreationComponent implements OnInit {

  eventForm!: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);
  storage = inject(Storage);
  isLoading = false;


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
      img: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }

  async onFileSelected(event: any )  {
    const file = event.target.files[0];
    if (file) {
      this.isLoading = true;
      try {
        const filePath = 'events/' + this.eventForm.value.club_name + '/' + new Date().getTime() + '_' + this.eventForm.value.eventname;
        const storageRef = ref(this.storage, filePath);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        this.eventForm.value.img = downloadURL;
      } catch (error) {
        console.log('Error uploading file:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      console.log('No file selected');
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
