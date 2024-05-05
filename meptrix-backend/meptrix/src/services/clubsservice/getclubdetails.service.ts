
import { AuthService } from '../auth.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetclubdetailsService {
  authService = inject(AuthService);


  constructor() { }

  clubs: any[] = [];

  setClubDetails() {
    this.authService.getClubsService().subscribe((clubDetails: any[]) => {
      this.clubs = clubDetails;


  }
    );
  }

  getClubDetails() {
    return this.clubs;
  }

}
