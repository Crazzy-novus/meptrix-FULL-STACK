import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-profie-phot-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profie-phot-card.component.html',
  styleUrl: './profie-phot-card.component.css'
})
export class ProfiePhotCardComponent {
  @Input() userDetails: any;
  @Output()  EditUser = new EventEmitter<void>();
  NameEditable: boolean = false;

  editClicked() {
    this.EditUser.emit();
  }


}
