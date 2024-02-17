import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutherizationService } from '../autherization.service';


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
  get emailid()
  {
    return this.loginForm.get('emailid')
  }
  get password()
  {
    return this.loginForm.get('password')
  }
  constructor(private fb: FormBuilder,private route:Router,private ar:ActivatedRoute,private service:AutherizationService) {

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
    this.service.getUserByEmail(emailid as string).subscribe(
      response=>{

        if(response[0].password===password)
        {
          sessionStorage.setItem('emailid',emailid as string)
          console.log(response)
          this.route.navigate(['/employee'])
        }
      }
      ,
      errors=>{
        console.log(errors)
      }
    )

  }

}
