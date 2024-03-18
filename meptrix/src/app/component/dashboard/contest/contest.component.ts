import { Component } from '@angular/core';
import { ContestCardComponent } from "./contest-card/contest-card.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-contest',
    standalone: true,
    templateUrl: './contest.component.html',
    styleUrl: './contest.component.css',
    imports: [ContestCardComponent, FormsModule, CommonModule]
})
export class ContestComponent {
  contests = [
    {
      contestName: 'Contest 1',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      clubName: 'Club A'
    },
    {
      contestName: 'Contest 2',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      clubName: 'Club A'
    },
    {
      contestName: 'Contest 3',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      clubName: 'Club A'
    },
    // Add more contents as needed
  ];

}
