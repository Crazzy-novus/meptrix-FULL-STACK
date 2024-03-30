import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-club-head',
  standalone: true,
  imports: [],
  templateUrl: './club-head.component.html',
  styleUrl: './club-head.component.css'
})
export class ClubHeadComponent {
  @Input() club: any;

  clubs = {
    name: 'Awesome Club',
    description: "This is an awesome club that does stuff.",
    logoUrl: 'assets/assets/Landing Page_files/git-hub-logo.png', // Replace with actual logo URL
    totalMembers: 150,
    eventsConducted: 10,
  };
}
