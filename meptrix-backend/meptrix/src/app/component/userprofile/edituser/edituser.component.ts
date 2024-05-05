import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ImageStorageService } from '../../../../services/VertexAI/imageStorage/image-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {


  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  imageStorageService = inject(ImageStorageService);

  @Input() userDetails: any;

  @Output() updateUser= new EventEmitter<any>();
  @Output() cancelEdit= new EventEmitter<void>();

  isLoading: boolean = false;
  labelText: string = 'Skills';


  changeLabel() {
    this.labelText = 'Skills [Enter comma seperated values]';
  }

  update(): void {
    console.log('User details:', this.userDetails)

    this.updateUser.emit();
  }

  cancel(): void {
    this.cancelEdit.emit();
  }

  async onFileSelected(event: any )  {


    const file = event.target.files[0];
    if (file) {
      var result: string | boolean;
      this.isLoading = true;
      result = await this.imageStorageService.onFileSelected(file, this.userDetails.name, this.userDetails.year)
      .then((res) => {

        return res;
      }
      ).catch((err) => {
        console.log('Error uploading file:', err);
        return false;
      }
      );
      if (result) {
        this.userDetails.profileImage = result;
        this.isLoading = false;
        console.log('File uploaded successfully:', this.userDetails.value);
      } else {
        alert('Error uploading file:1111111111');
        console.log('Error uploading file:');
        this.isLoading = false;
      }
    } else {
      console.log('No file selected');
    }
  }


}
