import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';



@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  taskData:any; 
  tasks:Array<{id: number, titel: string, description: string, fardig: boolean}>; 
  id:any;

  taskEdit(item:any){
    this.taskData.titel = item.Titel
    this.taskData.description = item.Description
  
    let tasks = JSON.parse(localStorage.getItem("taskList") || '{}');
   
    const updatedTask = tasks.map((items:any) => {
      if(items.id === this.taskData.id){  
        return items = this.taskData
      }
      return items
    })
  
    localStorage.setItem("taskList", JSON.stringify(updatedTask))
    this.router.navigate(["/"])
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tasks = JSON.parse(localStorage.getItem("taskList") || '{}');
    this.id = this.route.snapshot.paramMap.get('id')
    const filter = this.tasks.filter((task:any) => task.id == this.id)
    this.taskData = filter[0]  
  
  }
  ngOnInit() {
   
  }

}
