import { Component } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks:Array<{id: number, titel: string, description: string, fardig: boolean}>; 

deleteTask(item:number) {
  let index = this.tasks.findIndex(e => e.id == item)
  if (index !== -1) {
    this.tasks.splice(index, 1);
  }
  localStorage.setItem("taskList", JSON.stringify(this.tasks))
}

taskDone(id:number){
  this.tasks.map((items:any) => {
    if(items.id === id){  
     console.log(items)  
      return  items = items.fardig = !items.fardig
    }
    return items
  })
  localStorage.setItem("taskList", JSON.stringify(this.tasks))
}


constructor() {
this.tasks = JSON.parse(localStorage.getItem("taskList") || '{}')
}
}
