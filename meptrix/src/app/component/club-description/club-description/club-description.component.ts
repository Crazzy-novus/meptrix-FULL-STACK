import { AuthService } from './../../../../services/auth.service';
import { Component, Input, inject } from '@angular/core';
import { ClubDetailsComponent } from "../club-details/club-details.component";
import { ClubHeadComponent } from "../club-head/club-head.component";
import { EventCardComponent } from "../../dashboard/event-list/event-card/event-card.component";
import { FormGroup, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../../about/about.component";
import { ClubImagesComponent } from "../club-images/club-images.component";
import { ActivatedRoute, Router } from '@angular/router';
import { EditclubComponent } from "../editclub/editclub.component";
import { ApplyclubComponent } from "../../applyclub/applyclub.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { EventListComponent } from "../../dashboard/event-list/event-list.component";


@Component({
    selector: 'app-club-description',
    standalone: true,
    templateUrl: './club-description.component.html',
    styleUrl: './club-description.component.css',
    imports: [ClubDetailsComponent, ClubHeadComponent, EventCardComponent, FormsModule, CommonModule, AboutComponent, ClubImagesComponent, EditclubComponent, ApplyclubComponent, NavbarComponent, EventListComponent]
})
export class ClubDescriptionComponent {
  showButton: boolean = false;
  showEditComponent: boolean = false;
  showJoinClubComponent: boolean = false;
  applicationStatus: string = 'notJoined';
  applicationData = {clubId: '', UserId: ''};
  UserID: string | null = '';
  club: any;
  ModifiedClub: any;
  chairperson: any;
  organizer: any;
  events?: any[];

  authService = inject(AuthService);


constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    try {
        this.club = history.state.data;
        this.ModifiedClub = {...this.club};
        if (typeof window !== 'undefined') {



          if (window.sessionStorage && (window.sessionStorage.getItem('userRole') === 'ob' || window.sessionStorage.getItem('userRole') === 'admin') || (window.sessionStorage.getItem('userRole') === 'staff')) {
            this.showButton = true;
          }
          if (window.sessionStorage) {
            this.UserID = window.sessionStorage.getItem('userId');
            if (this.UserID){
              this.authService.getParticularEventService(this.club.club_name).subscribe((EventDetails => {
                this.events = EventDetails;
              }));

              this.applicationData.clubId = this.club._id;
              this.applicationData.UserId = this.UserID;
              this.authService.getApplicationService(this.applicationData).subscribe({
                next: (res) => {
                  if (res.status === 'approved') {
                    this.applicationStatus = 'joined';
                  } else if (res.status === 'pending') {
                    this.applicationStatus = 'pending';
                  } else {
                    this.applicationStatus = 'notJoined';
                  }
                },
                error: (err) => {
                  console.log(err);
                }
              });

            }
          }

        }



    } catch (error) {
      console.log("Error occured");
    }

  }

  showEdit() {
    this.showEditComponent = true;
  }

  hideEdit() {
    this.showEditComponent = false;
  }

  updateClub() {
    console.log('Ori:', this.club);
      console.log('New:', this.ModifiedClub);

    if (JSON.stringify(this.ModifiedClub) !== JSON.stringify(this.club)) {
      // write Api qury to update user details
      this.authService.updateClubService(this.ModifiedClub).subscribe( {
        next: (res) => {
          alert('User Details Updated Successfully!');

          this.hideEdit();
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
          this.hideEdit();
        }
      })
    } else {
      console.log('Ori:', this.club);
      console.log('New:', this.ModifiedClub);
      alert('No changes made!');
      this.hideEdit();
    }

  }

  ShowEditScreen() {
    this.showEditComponent = true;
  }

  cancelEdit() {
    this.hideEdit();
  }

  joinClub() {
    this.showJoinClubComponent = true;
  }

  cancelJoin() {

    this.showJoinClubComponent = false;

  }

  role1 = "Organizers";


}
