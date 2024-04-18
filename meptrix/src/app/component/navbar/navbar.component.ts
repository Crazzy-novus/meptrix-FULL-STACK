import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterOutlet, HomeComponent, CommonModule, RouterModule]
})

export class NavbarComponent {
  USER_ROLE : string = '';

  constructor(private router: Router) {}


  ngOnInit(): void {

    if (typeof window !== 'undefined') {
      const role = sessionStorage.getItem('userRole');
      if (role) {
        this.USER_ROLE = role;

      }
    }

    // Use the 'role' variable as needed
  }

  protected  doNavigation(): void {
    this.router.navigate(['/login']);
  }
  protected  gotoStaffTable(): void {
    this.router.navigate(['/stafftable']);
  }

}
