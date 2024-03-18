import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-club-card',
  standalone: true,
  imports: [],
  templateUrl: './club-card.component.html',
  styleUrl: './club-card.component.css'
})
export class ClubCardComponent {
  @Input() club: any;

}
