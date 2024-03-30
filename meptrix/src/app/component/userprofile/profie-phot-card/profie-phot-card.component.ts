import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profie-phot-card',
  standalone: true,
  imports: [],
  templateUrl: './profie-phot-card.component.html',
  styleUrl: './profie-phot-card.component.css'
})
export class ProfiePhotCardComponent {
  @Input() userDetails: any;


}
