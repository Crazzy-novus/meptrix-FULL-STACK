import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {FormsModule} from '@angular/forms';
import { EditCardComponent } from "./edit-card/edit-card.component";

@Component({
    selector: 'app-admintable',
    standalone: true,
    templateUrl: './admintable.component.html',
    styleUrl: './admintable.component.css',
    imports: [CommonModule, FormsModule, EditCardComponent]
})
export class AdmintableComponent implements OnInit{
  data: any[] = [];
  sortedData = [...this.data];
  filteredData: any[] = [];
  searchQuery: string = '';
  showEditCard = false;
  selectedItem: any;



  authservice = inject(AuthService);
  cdr = inject(ChangeDetectorRef);



  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.authservice.getAllUserDetails().subscribe((data) => {
        this.data = data;
        this.filteredData = [...this.data];
      });
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  sortTable(column: string): void {
  }


filterData(): void {
  if (!this.searchQuery) {
    this.filteredData = this.data;
    return;
  }

  this.filteredData = this.data.filter(item => {
    // Adjust this condition based on your specific search criteria
      return item.email.toLowerCase().startsWith(this.searchQuery.toLowerCase());
  });
}

editItem(item: any): void {
  this.showEditCard = true;
  this.selectedItem = item;

}

// Method to handle update button click
updateItem(updatedRow: { id: string; role: string; }){
  this.showEditCard = false;
  this.selectedItem.roles[0].role = updatedRow.role;
  // Implement update logic here
}

// Method to handle delete button click
deleteItem(): void {
  // Implement delete logic here
}

// Method to handle cancel button click
cancelEdit(): void {
  this.showEditCard = false;
  this.selectedItem = null;
}
}

