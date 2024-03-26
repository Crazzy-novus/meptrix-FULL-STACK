import { Component, OnInit, inject } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProfieAboutCardComponent } from '../profie-about-card/profie-about-card.component';
import { ProfiePhotCardComponent } from '../profie-phot-card/profie-phot-card.component';
import { ProfieClubsCardComponent } from '../profie-clubs-card/profie-clubs-card.component';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AuthService } from '../../../../services/auth.service';
import { Subject, catchError, of, takeUntil } from 'rxjs';

import { Resolve } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [ProfiePhotCardComponent, ProfieAboutCardComponent, ProfieClubsCardComponent, SkillsComponent, NavbarComponent, CommonModule]
})
export class ProfileComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  authService = inject(AuthService);
  userDetails: any;



  ngOnInit()  {

    const userDetails = this.authService.getUserDetails().pipe(
      takeUntil(this.unsubscribe$),
      catchError(error => {
        console.error('Failed to get user details:', error);
        return of(null);
      })
    );
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
