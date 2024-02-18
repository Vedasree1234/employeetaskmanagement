import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutherizationService } from '../autherization.service';
import { ToastrService } from 'ngx-toastr';
import { emitWarning } from 'process';


@Component({
  selector: 'app-manager_loginform',
  templateUrl: './manager_loginform.component.html',
  styleUrl: './manager_loginform.component.css'
})
export class ManagerLoginComponent {
  ManagerloginForm: FormGroup;
  registrationSuccess=false;
  submitted=false;
  get emailid()
  {
    return this.ManagerloginForm.get('emailid')
  }
  get password()
  {
    return this.ManagerloginForm.get('password')
  }
  constructor(private fb: FormBuilder,private route:Router,private ar:ActivatedRoute,private service:AutherizationService,private toster:ToastrService) {

    // this.route.queryParams.subscribe((params )=> {
    //   this.registrationSuccess = params['success'] === 'true';
    //  });
    this.ManagerloginForm = this.fb.group({
      emailid: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]

    });
  }
  ngOnInit()
  {
   this.registrationSuccess=true;
  }
submit=false;
array:any
  onSubmit() {
    this.submit=true;
    const{emailid,password}=this.ManagerloginForm.value;
    sessionStorage.setItem('emailid',emailid as string),
    this.service.getManagerByEmailid(emailid as string).subscribe(
      response=>{
        this.array=response
        if(this.array.length ===0)
        {
          this.toster.warning("please provide valid credentials","Warning")

        }

        if(response[0].password===password)
        {
          this.toster.success("Manager Login successfull","Success")
          this.route.navigate(['/managerdashboard'])
        }
      }
      ,
      errors=>{
        this.toster.error("Manager failed to login","Error")
      }
    )

  }

}
