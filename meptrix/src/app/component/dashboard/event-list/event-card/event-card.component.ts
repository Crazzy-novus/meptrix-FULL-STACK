import { Component, Input, inject } from '@angular/core';
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
  toasterService = inject(ToastrService);


  display() {
    this.toasterService.warning("This feature is updated soon.");

  }
}
