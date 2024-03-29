import { Component, Input } from '@angular/core';
import { ClubDetailsComponent } from "../club-details/club-details.component";
import { ClubHeadComponent } from "../club-head/club-head.component";
import { EventCardComponent } from "../../dashboard/event-list/event-card/event-card.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../../about/about.component";
import { ClubImagesComponent } from "../club-images/club-images.component";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-club-description',
    standalone: true,
    templateUrl: './club-description.component.html',
    styleUrl: './club-description.component.css',
    imports: [ClubDetailsComponent, ClubHeadComponent, EventCardComponent, FormsModule, CommonModule, AboutComponent, ClubImagesComponent]
})
export class ClubDescriptionComponent {
club: any;
constructor(private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
try {
    this.club = history.state.data;

} catch (error) {
  console.log("Error occured");

}
}

role = "Organizers";
role1 = "Chair person";
@Input() eventTense = "Past Event";
  organizers = [
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    { name: 'John Doe', designation: 'Event Coordinator', photo: 'assets/assets/Landing Page_files/git-hub-logo.png',department: 'Computer Science', year: 'Senior'  },
    // Add more organizers as needed
  ];
  remainingEvents: any[] = [
    // Additional events data
    // ...
  ];

  events = [
    {
      name: 'Event 1 ',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 1 ',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 3',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 4',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 5',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 6',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
  ];

    loadMoreEvents() {
      // Load the remaining events when the button is clicked
      this.events = [...this.events, ...this.remainingEvents];
    }


}
