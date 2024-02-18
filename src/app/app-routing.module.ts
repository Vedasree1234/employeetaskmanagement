import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration_form/registration_form.component';
import { EmployeeLoginComponent} from './employee_loginfrom/employee_loginform.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { authGuard } from './auth.guard'; // Corrected import statement
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { TaskhistoryComponent } from './taskhistory/taskhistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { TaskanalyticsComponent } from './taskanalytics/taskanalytics.component';
import { AutherizationService } from './autherization.service';
import { ManagerLoginComponent } from './manager_loginform/manager_loginform.component';
import { EmployeeDashboardComponent } from './employee_dashboard/employee_dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';
import { TaskassignmentComponent } from './taskassignment/taskassignment.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [

  { path: '', redirectTo: '/employeelogin', pathMatch: 'full' },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'employeelogin', component: EmployeeLoginComponent },
  {path:'managerlogin',component:ManagerLoginComponent},
  { path: 'employeedashboard', component:EmployeeDashboardComponent,canActivate: [authGuard] },
  { path: 'employee/viewtask', component: ViewtaskComponent },
  { path: 'employee/taskhistory', component: TaskhistoryComponent },
  { path: 'employee/taskanalytics', component: TaskanalyticsComponent},
  { path: 'employee/myprofile', component: MyprofileComponent },
  { path: 'employee/myprofile/skills', component: SkillsComponent },
  { path: 'employee/myprofile/contact', component: ContactComponent },
  {path:'managerdashboard',component:ManagerDashboardComponent},
  { path: 'manager/employeelist', component:EmployeelistComponent},
  { path: 'manager/tasklist', component:TasklistComponent},
  { path: 'manager/addtask', component:TaskassignmentComponent },
  { path: 'manager/myprofile', component: ManagerprofileComponent },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
