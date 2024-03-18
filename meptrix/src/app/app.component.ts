import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClubCardComponent } from "./component/clublist-page/club-card/club-card.component";
import { ClublistComponent } from "./component/clublist-page/clublist/clublist.component";
import { ChatbotComponent } from "./component/chatbot/chatbot.component";

import { ClubDescriptionComponent } from "./component/club-description/club-description/club-description.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClubCardComponent, ClublistComponent, ChatbotComponent, ClubDescriptionComponent]
})
export class AppComponent {
  title = 'meptrix';

  eventType = 'Co curricular club';
}
