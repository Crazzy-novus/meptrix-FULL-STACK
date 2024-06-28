import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, AboutComponent, CommonModule, FormsModule],
    host: {ngSkipHydration: 'false'}
})
export class HomeComponent {
  authService = inject(AuthService);
  clubs: any[] = [];
  ngOnInit(): void {
    this.authService.getClubsService().subscribe(clubDetails => {
    this.clubs = clubDetails;
    AOS.init({
      duration: 1200,
    });

    });
  }




  // Inject the service


}
