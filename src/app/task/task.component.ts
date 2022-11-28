import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  taskData:any;
  id:any;
  tasks:any;

taskDone(){
  this.tasks.map((items:any) => {
    if(items.id == this.id){  
     console.log(items)  
      return  items = items.fardig = !items.fardig
    }
    return items
  })
  console.log(this.tasks)
  localStorage.setItem("taskList", JSON.stringify(this.tasks))
}

  constructor(
    private route: ActivatedRoute,
  ) {
      this.tasks = JSON.parse(localStorage.getItem("taskList") || '{}')
  }
  ngOnInit() {
    let tasks = JSON.parse(localStorage.getItem("taskList") || '{}');

    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id, tasks)
    const filter = tasks.filter((task:any) => task.id == this.id)
    this.taskData = filter[0]
    console.log(this.taskData)
    }
  
  
}
