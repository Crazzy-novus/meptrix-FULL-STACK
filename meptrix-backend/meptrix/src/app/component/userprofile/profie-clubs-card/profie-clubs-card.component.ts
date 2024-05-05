import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profie-clubs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profie-clubs-card.component.html',
  styleUrl: './profie-clubs-card.component.css'
})
export class ProfieClubsCardComponent {

  @Input() member_Clubs: any;
  @Input() organizer_Clubs: any;
  Show_Organizer: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.organizer_Clubs) {
      this.Show_Organizer = true;
    }
  }

}
