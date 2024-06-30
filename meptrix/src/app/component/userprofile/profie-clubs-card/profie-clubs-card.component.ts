import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-profie-clubs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profie-clubs-card.component.html',
  styleUrl: './profie-clubs-card.component.css'
})
export class ProfieClubsCardComponent {

  @Input() member_Clubs: any;
  @Input() organizer_Clubs: any;
  Show_Organizer: boolean = false;
  router = inject(Router);
  authService = inject(AuthService);
  club: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.organizer_Clubs) {
      this.Show_Organizer = true;
    }
  }

  navigateToOtherComponent(clubName: string) {
    this.authService.getsingleClubsService(clubName).subscribe((res) => {
      this.club = res;
      this.router.navigate(['/club'], {state: {data: this.club}});
    });
  }

}
