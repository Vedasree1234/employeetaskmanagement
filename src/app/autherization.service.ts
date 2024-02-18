import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService {
  url= "http://localhost:3000"
  private employee=100
  private manager=200
  getEmployeeId()
  {
    return this.employee++;
  }
  getManagerId()
  {
     return this.manager++;
  }
  constructor(private http: HttpClient,private route:Router) {
  }
  registerEmployee(employeedetail:any)
  {
    return this.http.post(`${this.url}/employees`,employeedetail)
  }
  registerManager(managerdetails:any)
  {
    return this.http.post(`${this.url}/managers`,managerdetails)
  }
  getEmployeeByEmailid(email:string)
  {
    return this.http.get(`${this.url}/employees?emailid=${email}`)
  }
  getManagerByEmailid(email:string)
  {
    return this.http.get(`${this.url}/managers?emailid=${email}`)
  }
  getAllEmployees()
  {
    return this.http.get(`${this.url}/employees`)
  }
  getAllManagers()
  {
    return this.http.get(`${this.url}/managers`)
  }
  assignTask(taskdetails:any):Observable<any>
  {
    return this.http.post(`${this.url}/tasks`,taskdetails)
  }
  getAllTasks()
  {
    return this.http.get(`${this.url}/tasks`)
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
