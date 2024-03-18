import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ClubCardComponent } from "../club-card/club-card.component";


@Component({
    selector: 'app-clublist',
    standalone: true,
    templateUrl: './clublist.component.html',
    styleUrl: './clublist.component.css',
    imports: [FormsModule, CommonModule, ClubCardComponent]
})
export class ClublistComponent {
  @Input() eventType: any;
  club = [
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },
    {
      name: 'Event 1 **************',
      fees: '10:00 AM',
      description: 'Co curricular club',
      photo: '/assets/assets/linkedin-logo.png'
    },

  ]

}
