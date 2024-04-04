import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import {Storage, getDownloadURL, ref, uploadBytes} from '@angular/fire/storage';
@Component({
  selector: 'app-clubcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './clubcreation.component.html',
  styleUrl: './clubcreation.component.css'
})
export class ClubcreationComponent implements OnInit {
  clubForm!: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);
  storage = inject(Storage);
  isLoading = false;


  ngOnInit(): void {
    this.clubForm = this.fb.group({
      clubname: ['', Validators.required],
      depthost: ['', Validators.required],
      clubstaff: ['', Validators.required],
      clubstudent: ['', Validators.required],
      clubshortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      clubdescription: ['', [Validators.required, Validators.maxLength(1000)]],
      img: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }

  async onFileSelected(event: any )  {
    const file = event.target.files[0];
    if (file) {
      this.isLoading = true;
      try {
        const filePath = 'events/' + this.clubForm.value.club_name + '/' + new Date().getTime() + '_' + this.clubForm.value.eventname;
        const storageRef = ref(this.storage, filePath);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        this.clubForm.value.img = downloadURL;
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
    if (this.clubForm.value) {
      // Submit the form or perform other actions
      this.authService.createEvent(this.clubForm.value)
      .subscribe({
        next: (res) => {

          alert("Club Created");
          //console.log(res);

        },
        error: (err) => {
          console.log (err);
          alert(err.error);
        }
      })

      console.log('Form submitted successfully:', this.clubForm.value);
      //this.eventForm.reset();
    } else {
      // Handle validation errors
      console.log('Form validation failed');

    }
  }




}
