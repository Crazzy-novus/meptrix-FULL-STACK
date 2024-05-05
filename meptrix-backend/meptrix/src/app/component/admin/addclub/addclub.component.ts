import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { NavbarComponent } from "../../navbar/navbar.component";



@Component({
    selector: 'app-addclub',
    standalone: true,
    templateUrl: './addclub.component.html',
    styleUrl: './addclub.component.css',
    imports: [FormsModule, NavbarComponent]
})
export class AddclubComponent {
  clubData = {
    club_name: '',
    club_type: ''
  };

  authService = inject(AuthService); // Injecting AuthService to register a new user in the application using RESTful API endpoint (MEAN stack)
  // Injecting Router to navigate to the login page after successful registration


  logDetails() {
    if (this.clubData) {
      // Submit the form or perform other actions
      this.authService.addClubService(this.clubData)
      .subscribe({
        next: (res) => {

          alert("Club added Successfully");

        },
        error: (err) => {
          console.log (err);
          alert(err.error);
        }
      })

      console.log('Form submitted successfully:', this.clubData);

    } else {
      // Handle validation errors
      console.log('Form validation failed');

    }

  }

}
