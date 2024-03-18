import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './club-details.component.html',
  styleUrl: './club-details.component.css'
})
export class ClubDetailsComponent {
  @Input() role: any;
  @Input() organizers: any;

}
