import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterOutlet, HomeComponent]
})
export class NavbarComponent {

  constructor(private router: Router) {}

  protected  doNavigation(): void {
    this.router.navigate(['/profile']);


  }

}
