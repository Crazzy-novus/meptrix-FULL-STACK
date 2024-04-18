import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-club-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-head.component.html',
  styleUrl: './club-head.component.css'
})
export class ClubHeadComponent {
  @Input() club: any;
  @Input() status: string | undefined;
  @Output() joinclub = new EventEmitter<void>();
  toasterService = inject(ToastrService);

  ShowJoinClubComponent() {
    this.joinclub.emit();
  }
  ShowStatus() {
    this.toasterService.success("Your application Is "+ this.status +" Please wait for the approval.");

  }

  clubs = {
    name: 'Awesome Club',
    description: "This is an awesome club that does stuff.",
    logoUrl: 'assets/assets/Landing Page_files/git-hub-logo.png', // Replace with actual logo URL
    totalMembers: 150,
    eventsConducted: 10,
  };
}
