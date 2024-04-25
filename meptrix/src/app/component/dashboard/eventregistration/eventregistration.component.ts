import { Component, Input, inject, input } from '@angular/core';
import { ClubDetailsComponent } from "../../club-description/club-details/club-details.component";
import { AboutComponent } from "../../about/about.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-eventregistration',
    standalone: true,
    templateUrl: './eventregistration.component.html',
    styleUrl: './eventregistration.component.css',
    imports: [ClubDetailsComponent, AboutComponent, CommonModule, NavbarComponent]
})
export class EventregistrationComponent {

  event: any = {};
  authService = inject(AuthService);
  private unsubscribe$ = new Subject<void>();


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.event = history.state.data;

  }

  OnRegister() {
    const userId = sessionStorage.getItem('userId');

    this.authService.registerEventService(this.event._id, userId).pipe(
      takeUntil(this.unsubscribe$),
      catchError(error => {
        console.error('Failed to Register:', error);
        return of(null);
      })
    ).subscribe((applicationForm) => {

      console.log(applicationForm);
      alert("registered");

    });

  }

  organizers = [
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    // Add more organizers as needed
  ];

}
