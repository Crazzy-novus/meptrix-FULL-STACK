import { Component, OnInit, inject } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProfieAboutCardComponent } from '../profie-about-card/profie-about-card.component';
import { ProfiePhotCardComponent } from '../profie-phot-card/profie-phot-card.component';
import { ProfieClubsCardComponent } from '../profie-clubs-card/profie-clubs-card.component';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AuthService } from '../../../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Resolve } from '@angular/router';


@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [ProfiePhotCardComponent, ProfieAboutCardComponent, ProfieClubsCardComponent, SkillsComponent, NavbarComponent]
})
export class ProfileComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  authService = inject(AuthService);
  userDetails: any;


  ngOnInit() {
    this.authService.getUserDetails().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      userDetails => {
        this.userDetails = userDetails;
        console.log('User details:', this.userDetails);
      },
      error => {
        console.error('Failed to get user details:', error);
      }
    );
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
