import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService {
  url1 = "http://localhost:3000"
  url2="http://localhost:3000"
  constructor(private http: HttpClient,private route:Router) {
  }
  registerUser(userdetails: User) 
  {
    return this.http.post(`${this.url1}/Users`,userdetails);
  }
  getUserByEmail(email:string)
  {
    return this.http.get(`${this.url1}/Users?emailid=${email}`)
  }
  // registerManager(managerdetails:Admin)
  // {
  //   return this.http.post(`${this.url2}/admin/addtask`,managerdetails);
  // }
  // getManagerByEmpId(empId:string)
  // {
  //   return this.http.get(`${this.url2}/admin/addtask?empId=${empId}`)
  // }

}
