import { GetclubdetailsService } from './../../../../services/clubsservice/getclubdetails.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ClubCardComponent } from "../club-card/club-card.component";
import { NavbarComponent } from "../../navbar/navbar.component";



@Component({
    selector: 'app-clublist',
    standalone: true,
    templateUrl: './clublist.component.html',
    styleUrl: './clublist.component.css',
    imports: [FormsModule, CommonModule, ClubCardComponent, NavbarComponent]
})
export class ClublistComponent {

  constructor(private ClubDetails: GetclubdetailsService) { }
  @Input() eventType: any;
  club: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.club = this.ClubDetails.getClubDetails();
  }

  clubs = [
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Club Name 1',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/Landing Page_files/image.png'
    },

  ]

}
