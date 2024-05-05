import { CommonModule } from '@angular/common';
import { Component,  EventEmitter,  Input,  OnInit, Output, inject } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import {Storage, getDownloadURL, ref, uploadBytes} from '@angular/fire/storage';


@Component({
  selector: 'app-editclub',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editclub.component.html',
  styleUrl: './editclub.component.css'
})
export class EditclubComponent {

  //clubForm!: FormGroup;
  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  fb = inject(FormBuilder);
  storage = inject(Storage);
  isLoading = false;
  @Input()  clubForm: any;


  @Output() updateUser= new EventEmitter<void>();
  @Output() cancelEdit= new EventEmitter<void>();



  update(): void {

    this.updateUser.emit();
  }

  cancel(): void {
    this.cancelEdit.emit();
  }


  ngOnInit(): void {
    console.log(this.clubForm);


  }

  async onFileSelected(club: any, type: string)  {
    const file = club.target.files[0];
    if (file) {
      this.isLoading = true;
      try {
        const filePath = 'club/'+ type + '/' + this.clubForm.club_name + '/' + new Date().getTime();
        const storageRef = ref(this.storage, filePath);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        if (type === 'logo')
          this.clubForm.logo = downloadURL;
        else (type === 'banner')
          this.clubForm.banner = downloadURL;

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
      console.log(this.clubForm);
      this.authService.updateClubService(this.clubForm)
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
