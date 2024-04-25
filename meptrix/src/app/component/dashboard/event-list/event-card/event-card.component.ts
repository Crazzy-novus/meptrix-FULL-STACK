import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event: any;
  router = inject(Router);
  toasterService = inject(ToastrService);

  navigateToOtherComponent() {
    console.log(this.event);
    this.router.navigate(['/eventregistation'], {state: {data: this.event}});
  }
}
