import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-staff-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff-table.component.html',
  styleUrl: './staff-table.component.css'
})
export class StaffTableComponent {
  searchQuery: string = '';
  data: any[] = [];
  filteredData: any[] = [];


  authservice = inject(AuthService);


  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined' && (window.sessionStorage.getItem('userRole') === 'staff' ) ) {
      // ...
        this.authservice.getallApplicationService().subscribe((data) => {
        this.data = data;
        console.log(this.data);
      });
    }

    else if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined' && sessionStorage.getItem('userRole') === 'staff') {
      this.authservice.getAllUserDetails('staff').subscribe((data) => {
        this.data = data;
        this.filteredData =this.data.filter(item => item.roles[0].role !== 'admin' && item.roles[0].role !== 'super_admin' && item.roles[0].role !== 'staff');
      });
    }

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  filterData(): void {

  }
  Approve(item:any) {
    const applicationData = {
      userId: item.UserId._id,
      clubId: item.ClubId._id
    }
    console.log(applicationData);
    this.authservice.approvedApplicationService(applicationData, item._id).subscribe((data) => {
      console.log(data);
    });


  }

  Delete(id:any) {

    this.authservice.deleteApplicationService(id).subscribe((data) => {
      console.log(data);
    });

  }

}
