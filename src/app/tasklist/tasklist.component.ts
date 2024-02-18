import { Component, OnInit } from '@angular/core';
import { AutherizationService } from '../autherization.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
constructor(private auth:AutherizationService,private modal:BsModalService){}
tasks:any;
selectedTask:any;
modalRef:BsModalRef;
ngOnInit(){
this.auth.getAllTasks().subscribe((data)=>{
this.tasks=data
console.log(this.tasks)
})
}
openPopup(task:any)
{
  this.selectedTask = task;
  // this.modalRef = this.modal.show();
}
}
