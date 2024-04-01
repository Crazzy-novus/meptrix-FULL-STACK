import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-contestcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contestcreation.component.html',
  styleUrl: './contestcreation.component.css'
})
export class ContestcreationComponent implements OnInit {

  contentForm!: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);
  contestForm: any;
  isLoading = false;



  ngOnInit(): void {
    this.contentForm = this.fb.group({
      contestname: ['', Validators.required],
      clubevent: ['', Validators.required],
      studentevent: ['', Validators.required],
      contestvenue: ['', Validators.required],
      contestdate: ['', Validators.required],
      contesttime: ['', Validators.required],
      contestshortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      contestdescripition: ['', [Validators.required, Validators.maxLength(1000)]],
      contestimg: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }
/*
  async onFileSelected(event: any )  {
    const file = event.target.files[0];
    if (file) {
      this.isLoading = true;
      try {
        const filePath = 'events/' + this.contestForm.value.club_name + '/' + new Date().getTime() + '_' + this.contestForm.value.eventname;
        const storageRef = ref(this.storage, filePath);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        this.contestForm.value.img = downloadURL;
      } catch (error) {
        console.log('Error uploading file:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      console.log('No file selected');
    }*/
  }

/*
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
}*/
