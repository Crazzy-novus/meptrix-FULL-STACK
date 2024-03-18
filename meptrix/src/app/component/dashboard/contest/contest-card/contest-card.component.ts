import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contest-card',
  standalone: true,
  imports: [],
  templateUrl: './contest-card.component.html',
  styleUrl: './contest-card.component.css'
})
export class ContestCardComponent {

  @Input() contest: any;
}
