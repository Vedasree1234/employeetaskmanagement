import { Component, OnInit } from '@angular/core';
import { AutherizationService } from '../autherization.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  profileInfo:any
  
  constructor(private auth: AutherizationService) { }
  ngOnInit(): void {
    this.getLoginDetails();
  }
  getLoginDetails() {
    const emailid =sessionStorage.getItem('emailid')
    if (emailid) {
      this.auth.getEmployeeByEmailid(emailid).subscribe((data) => {
        this.profileInfo=data;
      })
    }
  }
}
