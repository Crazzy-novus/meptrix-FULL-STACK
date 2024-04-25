import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetclubdetailsService } from '../services/clubsservice/getclubdetails.service';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  constructor (private clubDetails: GetclubdetailsService) {}

  ngOnInit(): void {
    this.clubDetails.setClubDetails();

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  title = 'meptrix';

  eventType = 'Co curricular club';
}
