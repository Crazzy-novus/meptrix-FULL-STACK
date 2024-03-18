import { Component } from '@angular/core';
import { ContestComponent } from "../contest/contest.component";
import { AboutComponent } from "../../about/about.component";
import { EventListComponent } from "../event-list/event-list.component";
import { BannerComponent } from "../banner/banner.component";

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

}
