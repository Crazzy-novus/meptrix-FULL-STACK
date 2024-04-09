import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() updateClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();

  roles: string[] = ['Admin', 'User', 'Moderator'];

  update(): void {
    this.updateClicked.emit();
  }

  delete(): void {
    this.deleteClicked.emit();
  }

  cancel(): void {
    this.cancelClicked.emit();
  }
}
