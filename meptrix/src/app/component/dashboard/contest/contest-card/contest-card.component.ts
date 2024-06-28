import { DatePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-contest-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './contest-card.component.html',
  styleUrl: './contest-card.component.css'
})
export class ContestCardComponent {

  @Input() contest: any;



}
