import { Component, OnInit, inject } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProfieAboutCardComponent } from '../profie-about-card/profie-about-card.component';
import { ProfiePhotCardComponent } from '../profie-phot-card/profie-phot-card.component';
import { ProfieClubsCardComponent } from '../profie-clubs-card/profie-clubs-card.component';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AuthService } from '../../../../services/auth.service';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { EdituserComponent } from '../edituser/edituser.component';


import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [ProfiePhotCardComponent, ProfieAboutCardComponent,
       ProfieClubsCardComponent, SkillsComponent, NavbarComponent,
       CommonModule, EdituserComponent]
})
export class ProfileComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  authService = inject(AuthService);
  userDetails: any;
  orignalUserDetails: any;
  showEditComponent: boolean = false;



  ngOnInit()  {
    if (typeof window !== 'undefined') {
      this.authService.getUserDetails().pipe(
        takeUntil(this.unsubscribe$),
        catchError(error => {
          console.error('Failed to get user details:', error);
          return of(null);
        })
      ).subscribe(userDetails => {
        this.userDetails = userDetails;
        this.orignalUserDetails = {...userDetails};
      });
  }
}
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showEdit() {
    this.showEditComponent = true;
  }

  hideEdit() {
    this.showEditComponent = false;
  }

  updateUser() {
    if (JSON.stringify(this.userDetails) !== JSON.stringify(this.orignalUserDetails)) {
      // write Api qury to update user details
      this.authService.updateUserService(this.userDetails).subscribe( {
        next: (res) => {
          alert('User Details Updated Successfully!');
          //this.userDetails = this.userDetails;
          this.hideEdit();
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
          this.hideEdit();
        }
      })
    } else {
      console.log('Ori:', this.orignalUserDetails);
      console.log('New:', this.userDetails);
      alert('No changes made!');
      this.hideEdit();
    }

  }

  cancelEdit() {
    this.hideEdit();
  }
}
