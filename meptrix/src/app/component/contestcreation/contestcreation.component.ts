import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ImageStorageService } from '../../../services/VertexAI/imageStorage/image-storage.service';

@Component({
  selector: 'app-contestcreation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contestcreation.component.html',
  styleUrl: './contestcreation.component.css'
})
export class ContestcreationComponent implements OnInit {

  contestForm!: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);
  isLoading = false;
  ImageStorageService = inject(ImageStorageService);




  ngOnInit(): void {
    this.contestForm = this.fb.group({
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

  async onFileSelected(event: any )  {


    const file = event.target.files[0];
    if (file) {
      var result: string | boolean;
      this.isLoading = true;
      result = await this.ImageStorageService.onFileSelected(file, this.contestForm.value.club_name, this.contestForm.value.eventname)
      .then((res) => {
        console.log('File uploaded Durai:', res);
        this.contestForm.value.img = result;
        this.isLoading = false;
        return res;
      }
      ).catch((err) => {
        console.log('Error uploading file:', err);
        console.log('Error uploading file:');
        this.isLoading = false;
        return false;
      }
      );
      if (result) {
        this.contestForm.value.img = result;
        this.isLoading = false;
      } else {
        alert('Error uploading file');
        console.log('Error uploading file:');
        this.isLoading = false;
      }
    } else {
      console.log('No file selected');
    }
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



  onSubmit() {
    if (this.contestForm.valid) {
      // Form is valid, you can submit it
      console.log(this.contestForm.value);
      this.contestForm.reset();
      // Here you can call your service to send the form data to the server
    } else {
      // Form is invalid, handle errors or display messages to the user
      console.log('Form is invalid');

    }
  }
}
