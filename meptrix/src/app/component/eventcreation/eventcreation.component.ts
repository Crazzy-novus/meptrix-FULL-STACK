import { CommonModule } from '@angular/common';
import { Component,  OnInit, inject } from '@angular/core';

import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


import { AuthService } from '../../../services/auth.service';
import { ImageStorageService } from '../../../services/VertexAI/imageStorage/image-storage.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { GetclubdetailsService } from '../../../services/clubsservice/getclubdetails.service';


@Component({
    selector: 'app-eventcreation',
    standalone: true,
    templateUrl: './eventcreation.component.html',
    styleUrl: './eventcreation.component.css',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent]
})

export class EventcreationComponent implements OnInit {

  eventForm!: FormGroup;
  ImageStorageService = inject(ImageStorageService);
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);

  isLoading = false;
  ClubDetails = inject(GetclubdetailsService);
  clubs: any[] = [];
  clubNames: string[] = [];


  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventname: ['', Validators.required],
      club_name: ['', Validators.required],
      eventtype: ['', Validators.required],
      eventstudent: ['', Validators.required],
      eventvenue: ['', Validators.required],
      eventdate: ['', Validators.required],
      eventtime: ['', Validators.required],
      shortdescription: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      img: ['', Validators.required], // You might need to adjust the validation for image upload
    });

    this.clubs = this.ClubDetails.getClubDetails();
    this.clubs.forEach((club) => {
      this.clubNames.push(club.club_name);
    });

  }


  async onFileSelected(event: any )  {


    const file = event.target.files[0];
    if (file) {
      var result: string | boolean;
      this.isLoading = true;
      result = await this.ImageStorageService.onFileSelected(file, this.eventForm.value.club_name, this.eventForm.value.eventname)
      .then((res) => {

        return res;
      }
      ).catch((err) => {
        console.log('Error uploading file:', err);
        return false;

      }
      );
      if (result) {
        this.eventForm.value.img = result;
        this.isLoading = false;

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
