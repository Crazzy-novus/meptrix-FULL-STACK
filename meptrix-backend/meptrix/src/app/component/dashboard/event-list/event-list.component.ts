
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import { FormsModule} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-event-list',
    standalone: true,
    templateUrl: './event-list.component.html',
    styleUrl: './event-list.component.css',
    imports: [EventCardComponent, FormsModule, CommonModule]
})

export class EventListComponent  {



  @Input() eventType: any;
  @Input() events: any;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log("from dassh",this.events);

  }




}
