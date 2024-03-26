import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-profie-about-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profie-about-card.component.html',
  styleUrl: './profie-about-card.component.css'
})
export class ProfieAboutCardComponent {
  @Input() about: string = "";

  @Input() skills: Array<string> = [];

  showDiv = false;

  updateProfile() {
    // Implement your logic to update the profile here

    console.log('About:', this.about);
    console.log('Skills:', this.skills);
  }

  addNewSkill() {
    this.skills.push('New Skill');
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }


}
