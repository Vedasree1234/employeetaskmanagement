import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {
  constructor(private route:Router){}
  logout()
  {
  sessionStorage.clear();
  this.route.navigate(['/managerlogin'])
  }
  show()
  {

  }
}
