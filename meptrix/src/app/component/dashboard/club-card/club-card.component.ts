import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-card.component.html',
  styleUrl: './club-card.component.css'
})
export class ClubCardComponent {

  router = inject(Router);
  @Input() club: any;
  navigateToOtherComponent() {
    this.router.navigate(['/club'], {state: {data: this.club}});
  }


}
