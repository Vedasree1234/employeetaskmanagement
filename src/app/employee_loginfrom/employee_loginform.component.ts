import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutherizationService } from '../autherization.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'employee_loginform-component',
  templateUrl: './employee_loginform.component.html',
  styleUrls: ['./employee_loginform.component.css']
})
export class EmployeeLoginComponent implements OnInit{
[x: string]: any;
  loginForm: FormGroup;
  registrationSuccess=false;
  submitted=false;
  checkemail:any
  get emailid()
  {
    return this.loginForm.get('emailid')
  }
  get password()
  {
    return this.loginForm.get('password')
  }
  constructor(private fb: FormBuilder,private route:Router,private ar:ActivatedRoute,private service:AutherizationService,private toaster:ToastrService) {

    // this.route.queryParams.subscribe((params )=> {
    //   this.registrationSuccess = params['success'] === 'true';
    //  });
    this.loginForm = this.fb.group({
      emailid: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]

    });
  }
  ngOnInit()
  {
   this.registrationSuccess=true;
  }
submit=false;

  onSubmit() {
    this.submit=true;
    const{emailid,password}=this.loginForm.value;
    if(this.loginForm.value)
    {
    this.service.getEmployeeByEmailid(emailid as string).subscribe(
      response=>{
         this.checkemail=response;
         if(this.checkemail.length==0)
         {
          this.toaster.warning("please provide valid credentials","Warning")
         }
         else{
          const checkdesignation=this.checkemail[0].designation;
          sessionStorage.setItem('emailid',emailid as string)
          if(checkdesignation==='employee')
          {
           if(response[0].password===password)
           {
             this.toaster.success(" Employee Login successfull","Success")
             this.route.navigate(['/employeedashboard'])
           }
          }
         }


      }
      ,
      errors=>{
        this.toaster.error("employee failed to login","Error")
      }
    )

  }

}

}
