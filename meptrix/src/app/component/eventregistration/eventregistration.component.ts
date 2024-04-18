import { GetclubdetailsService } from './../../../services/clubsservice/getclubdetails.service';
import { Component, Input, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-eventregistration',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, CommonModule, FormsModule],
  templateUrl: './eventregistration.component.html',
  styleUrl: './eventregistration.component.css',
  host: {ngSkipHydration: 'false'}
})
export class EventregistrationComponent {

  events: any;
  constructor(private EventDetails: GetclubdetailsService) { }
  ngOnInit(): void {
    this.events = this.EventDetails.getClubDetails();
  }


}

