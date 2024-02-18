import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration_form/registration_form.component';
import { EmployeeLoginComponent} from './employee_loginfrom/employee_loginform.component';
import { AutherizationService } from './autherization.service';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { TaskhistoryComponent } from './taskhistory/taskhistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { TaskanalyticsComponent } from './taskanalytics/taskanalytics.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeDashboardComponent} from './employee_dashboard/employee_dashboard.component';
import { ManagerLoginComponent } from './manager_loginform/manager_loginform.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { TaskassignmentComponent } from './taskassignment/taskassignment.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmployeeLoginComponent,
    SkillsComponent,
    ContactComponent,
    PagenotfoundComponent,
    ViewtaskComponent,
    TaskhistoryComponent,
    TaskanalyticsComponent,
    HeaderComponent,
    ManagerLoginComponent,
    EmployeeDashboardComponent,
    EmployeelistComponent,
    ManagerDashboardComponent,
    TaskassignmentComponent,
    ManagerprofileComponent,
    TasklistComponent,
    MyprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right'}),
    ModalModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    provideToastr({
      timeOut:3000,
      preventDuplicates: true,
    }),
    AutherizationService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
