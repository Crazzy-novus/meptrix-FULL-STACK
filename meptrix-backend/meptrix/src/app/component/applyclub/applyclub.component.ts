import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { takeUntil, catchError, of, Subject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
    selector: 'app-applyclub',
    standalone: true,
    templateUrl: './applyclub.component.html',
    styleUrl: './applyclub.component.css',
    imports: [CommonModule, FormsModule, NavbarComponent]
})
export class ApplyclubComponent {

  @Input() clubDetails: any;
  @Output() Canceljoinclub = new EventEmitter<void>();
  userDetails =  {_id: '', name: '', email: '', branch: '', year: ''};
  appluicationForm = {rollno: '', admissionNo: '', duration: '', UserId: '', ClubId: ''};
  authService = inject(AuthService);
  private unsubscribe$ = new Subject<void>();

  buttonWidth = 240;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (typeof window !== 'undefined') {
      this.authService.getUserDetails().pipe(
        takeUntil(this.unsubscribe$),
        catchError(error => {
          console.error('Failed to get user details:', error);
          return of(null);
        })
      ).subscribe(userDetails => {
        this.userDetails = {
          _id : userDetails._id,
          name: userDetails.name,
          email: userDetails.email,
          branch: userDetails.branch,
          year: String(userDetails.year),
        }

      });
  }
  }

  cancelJoin() {
    this.Canceljoinclub.emit();
  }

  OnSubmit() {

    if (this.appluicationForm.rollno === '' || this.appluicationForm.admissionNo === '' || this.appluicationForm.duration === '') {
      alert('Please fill all the fields');
      return;
    }
    this.appluicationForm.UserId = this.userDetails._id;
    this.appluicationForm.ClubId = this.clubDetails._id;
    this.authService.applyClubService(this.appluicationForm).pipe(
      takeUntil(this.unsubscribe$),
      catchError(error => {
        console.error('Failed to apply club:', error);
        return of(null);
      })
    ).subscribe((applicationForm) => {

      console.log(applicationForm);
      this.Canceljoinclub.emit();
    });
  }



}
