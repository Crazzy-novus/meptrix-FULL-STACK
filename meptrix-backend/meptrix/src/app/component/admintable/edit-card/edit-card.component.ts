import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-card.component.html',
  styleUrl: './edit-card.component.css'
})
export class EditCardComponent {

  @Input() profile: string  ='';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() role: string = '';
  @Input() _id: string = '';
  @Input() clubDetails = '';
  @Output() cancelClicked = new EventEmitter<void>();
  @Output() updateClicked = new EventEmitter<{id: string, role: string}>();
  @Output() deleteClicked = new EventEmitter<void>();

  authService = inject(AuthService);

  roles: string[] = ['admin', 'student', 'staff', 'ob'];
  clubNames: string[] = [];
  clubName: string = '' ;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  update(): void {


    const updatedRow = {
      id: this._id,
      role: this.role,
      clubId: this.clubName
    };
    console.log(updatedRow);
    this.authService.updateRoleService(updatedRow).subscribe({
      next: (res) => {

        alert("User Role Updated  Successfully!");


        this.updateClicked.emit({id: this._id, role: this.role});
      },
      error: (err) => {
        console.log (err);
        alert(err.error);
      }
    })


  }

  deleteUser(): void {
    this.authService.deleteUserService(this._id).subscribe((data) => {
      console.log(data);
    });
    alert("User Deleted  Successfully!");
    this.cancelClicked.emit();
  }

  cancel(): void {
    this.cancelClicked.emit();
  }

  revoke(): void {
    this.authService.revokeRoleService(this._id).subscribe((data) => {
      console.log(data);
    });
    alert("User Role Revoked Successfully!");
    this.updateClicked.emit({id: this._id, role: 'student'});
  }
}
