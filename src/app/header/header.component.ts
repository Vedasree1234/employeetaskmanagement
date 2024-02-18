import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router){}
  logout()
  {
  sessionStorage.clear();
  this.route.navigate(['/employeelogin'])
  }
  show()
  {
    
  }

  dropdownOptions: string[] = ['skills', 'contact', 'workinformation'];

  selectedOption: string = '';

  onOptionSelected() {
    this.selectedOption=this.selectedOption?'':'open'

  }
  selectOption(option: string) {
    // Handle the selection of a dropdown option
    console.log('Selected Option:', option);
    this.selectedOption = '';
  }
}
