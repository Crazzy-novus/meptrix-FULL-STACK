import { Component, inject } from '@angular/core';
import { ContestComponent } from "../contest/contest.component";
import { AboutComponent } from "../../about/about.component";
import { EventListComponent } from "../event-list/event-list.component";
import { BannerComponent } from "../banner/banner.component";
import { AuthService } from '../../../../services/auth.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';



@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [ContestComponent, AboutComponent, EventListComponent, BannerComponent, NavbarComponent, CommonModule, FormsModule]
})
export class MainComponent {
  eventType1 = "co-curricular";
  eventType2 = "extra-curricular";

  authService = inject(AuthService);
  events: any[] = []
  coCurricularEvents: any[] = [];
  extraCurricularEvents: any[] = [];


  ngOnInit() {
    this.authService.getAllEventService().subscribe((EventDetails => {
    this.events = EventDetails;

    this.coCurricularEvents = this.events.filter((event) => event.eventtype == this.eventType1);

    this.extraCurricularEvents = this.events.filter((event) => event.eventtype == this.eventType2);
  }));
}


}
