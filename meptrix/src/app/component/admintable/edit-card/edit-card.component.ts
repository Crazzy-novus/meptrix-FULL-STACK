import { AuthService } from './../../../../services/auth.service';
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
  @Output() cancelClicked = new EventEmitter<void>();
  @Output() updateClicked = new EventEmitter<{id: string, role: string}>();
  @Output() deleteClicked = new EventEmitter<void>();

  authService = inject(AuthService);

  roles: string[] = ['admin', 'student', 'staff', 'ob'];

  update(): void {

    const updatedRow = {
      id: this._id,
      role: this.role
    };
    this.authService.updateRoleService(updatedRow).subscribe({
      next: (res) => {

        alert("User Role Updated  Successfully!");


        this.updateClicked.emit(updatedRow);
      },
      error: (err) => {
        console.log (err);
        alert(err.error);
      }
    })


  }

  delete(): void {

  }

  cancel(): void {
    this.cancelClicked.emit();
  }
}
