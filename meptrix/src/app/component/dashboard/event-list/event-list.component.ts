
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import { FormsModule} from '@angular/forms';

@Component({
    selector: 'app-event-list',
    standalone: true,
    templateUrl: './event-list.component.html',
    styleUrl: './event-list.component.css',
    imports: [EventCardComponent, FormsModule, CommonModule]
})

export class EventListComponent {

  @Input() eventType: any;
  events = [
    {
      name: 'Event 1 ',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 1 ',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 3',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 4',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 5',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    {
      name: 'Event 6',
      time: '10:00 AM',
      place: 'Venue A',
      photo: '/assets/assets/Landing Page_files/image.png'
    },
    // Add more events as needed
  ];


}
