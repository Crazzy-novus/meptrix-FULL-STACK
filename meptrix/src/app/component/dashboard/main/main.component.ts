import { Component, inject } from '@angular/core';
import { ContestComponent } from "../contest/contest.component";
import { AboutComponent } from "../../about/about.component";
import { EventListComponent } from "../event-list/event-list.component";
import { BannerComponent } from "../banner/banner.component";
import { AuthService } from '../../../../services/auth.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ClubCardComponent } from "../club-card/club-card.component";
import * as AOS from 'aos';



@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [ContestComponent, AboutComponent, EventListComponent, BannerComponent, NavbarComponent, CommonModule, FormsModule, ClubCardComponent]
})
export class MainComponent {
  eventType1 = "co-curricular";
  eventType2 = "extra-curricular";

  authService = inject(AuthService);
  events: any[] = []
  coCurricularEvents: any[] = [];
  extraCurricularEvents: any[] = [];
  clubs! : any[];
  clubType : String = "null";



    ngOnInit() {
      this.authService.getAllEventService().subscribe((EventDetails => {
      this.events = EventDetails;

      this.coCurricularEvents = this.events.filter((event) => event.eventtype == this.eventType1);

      this.extraCurricularEvents = this.events.filter((event) => event.eventtype == this.eventType2);
    }));

    AOS.init({
      duration: 1200,
    });
  }

  getClubs( type: String) {
    this.clubType = type;
    this.authService.getParticularClubsService(type).subscribe(((ClubDetails: any[]) => {
      this.clubs = ClubDetails;
    }));
  }
}
