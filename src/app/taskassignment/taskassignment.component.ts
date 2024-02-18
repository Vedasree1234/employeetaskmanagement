import { Component, OnInit } from '@angular/core';
import { AutherizationService } from '../autherization.service';
import { ToastrService } from 'ngx-toastr';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taskassignment',
  templateUrl: './taskassignment.component.html',
  styleUrl: './taskassignment.component.css'
})
export class TaskassignmentComponent implements OnInit{
  employeelist:any;
  taskassign:FormGroup|any;
  priority:any=['low','medium','high']
constructor(private auth:AutherizationService,private toster:ToastrService,private fb:FormBuilder,private route:Router){}
ngOnInit()
{
  this.auth.getAllEmployees().subscribe((data)=>{
  this.employeelist=data;
  },
  error=>{
     console.log(error)
  })
  this.taskassign=this.fb.group({
    taskid:[],
    title:[''],
    description:[''],
    duedate:[''],
    priority:[''],
    assignto:['']
  })
}
assigntask()
{
if(this.taskassign.valid)
{
  console.log(this.taskassign.value.assignto)
    this.auth.assignTask(this.taskassign.value).subscribe((data)=>{
      this.toster.success("task assigned successfully","success")
      this.route.navigate(['/manager/tasklist'])
    })
}
}
}
