import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutherizationService } from '../autherization.service';


@Component({
  selector: 'app-manager_loginform',
  templateUrl: './manager_loginform.component.html',
  styleUrl: './manager_loginform.component.css'
})
export class ManagerLoginComponent {
  ManagerloginForm: FormGroup;
  registrationSuccess=false;
  submitted=false;
  get empId()
  {
    return this.ManagerloginForm.get('empId')
  }
  get password()
  {
    return this.ManagerloginForm.get('password')
  }
  constructor(private fb: FormBuilder,private route:Router,private ar:ActivatedRoute,private service:AutherizationService) {

    // this.route.queryParams.subscribe((params )=> {
    //   this.registrationSuccess = params['success'] === 'true';
    //  });
    this.ManagerloginForm = this.fb.group({
      empId: ['', [Validators.required,Validators.email]],
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
    // const{empId,password}=this.ManagerloginForm.value;
    // this.service. getManagerByEmpId(empId as string).subscribe(
    //   response=>{

    //     if(response[0].password===password)
    //     {
    //       sessionStorage.setItem('empId',empId as string)
    //       console.log(response)
    //       this.route.navigate(['/addtask'])
    //     }
    //   }
    //   ,
    //   errors=>{
    //     console.log(errors)
    //   }
    // )
   

  }

}
