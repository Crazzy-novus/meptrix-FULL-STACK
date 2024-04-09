import { Component, inject } from '@angular/core';
import { ContestComponent } from "../contest/contest.component";
import { AboutComponent } from "../../about/about.component";
import { EventListComponent } from "../event-list/event-list.component";
import { BannerComponent } from "../banner/banner.component";
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [ContestComponent, AboutComponent, EventListComponent, BannerComponent]
})
export class MainComponent {
  eventType1 = "Co Curricular";
  eventType2 = "Extra Curricular";

  authService = inject(AuthService);
  events: any[] = []
  coCurricularEvents: any[] = [];
  extraCurricularEvents: any[] = [];

  ngOnInit() {
    this.authService.getClubsService().subscribe((EventDetails => {
    this.events = EventDetails;
    this.coCurricularEvents = this.events.filter((event) => event.type === this.eventType1);
    this.extraCurricularEvents = this.events.filter((event) => event.type === this.eventType2);
  } ));
}

}
