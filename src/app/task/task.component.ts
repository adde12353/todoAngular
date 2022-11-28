import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  taskData:any
  id:any;
  tasks:Array<{id: number, titel: string, description: string, fardig: boolean}>; 

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
    private router: Router
  ) {
    this.tasks = JSON.parse(localStorage.getItem("taskList") || '{}')
    this.id = this.route.snapshot.paramMap.get('id') 
    const filter = this.tasks.filter((task:any) => task.id == this.id)
    this.taskData = filter[0]
  }
  ngOnInit() {
    }
}
