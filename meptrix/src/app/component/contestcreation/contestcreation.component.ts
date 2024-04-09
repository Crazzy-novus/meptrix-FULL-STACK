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
      contesttype: ['', Validators.required],
      studentevent: ['', Validators.required],
      contestvenue: ['', Validators.required],
      contestdate: ['', Validators.required],
      contesttime: ['', Validators.required],
      contestshortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      contestdescripition: ['', [Validators.required, Validators.maxLength(1000)]],
      img: ['', Validators.required], // You might need to adjust the validation for image upload
    });
  }

  async onFileSelected(event: any )  {


    const file = event.target.files[0];
    if (file) {
      var result: string | boolean;
      this.isLoading = true;
      result = await this.ImageStorageService.onFileSelected(file, this.contestForm.value.club_name, this.contestForm.value.eventname)
      .then((res) => {

        return res;
      }
      ).catch((err) => {
        console.log('Error uploading file:', err);
        return false;
      }
      );
      if (result) {
        this.contestForm.value.img = result;
        this.isLoading = false;
        console.log('File uploaded successfully:', this.contestForm.value);
      } else {
        alert('Error uploading file:1111111111');
        console.log('Error uploading file:');
        this.isLoading = false;
      }
    } else {
      console.log('No file selected');
    }
  }




  onSubmit() {
    if (this.contestForm.value) {
      // Submit the form or perform other actions
      this.authService.createContest(this.contestForm.value)
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

      console.log('Form submitted successfully:', this.contestForm.value);
      //this.contestForm.reset();
    } else {
      // Handle validation errors
      console.log('Form validation failed');

    }
  }
}
