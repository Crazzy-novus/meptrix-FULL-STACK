import { GetclubdetailsService } from './../../../services/clubsservice/getclubdetails.service';
import { Component, Input, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, AboutComponent, CommonModule, FormsModule],
    host: {ngSkipHydration: 'false'}
})
export class HomeComponent {

  clubs: any[] = [];


  constructor(private ClubDetails: GetclubdetailsService) { }
  ngOnInit(): void {
    this.clubs = this.ClubDetails.getClubDetails();
  }


  // Inject the service


}
