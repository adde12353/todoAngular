import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  maximumLetter: boolean
  
  test(e:any) {
    console.log(e)
  }


  taskCreate(item:any) {
    const data = {
      id: Math.random() *1000,
      titel:item.Titel,
      description: item.Description,
      fardig: false
    }    
    const upDatedTaskList:object = data

  //Startvärde 0 kolla så den inte pushar tomt
   if(localStorage.getItem('taskList') == null) {
    localStorage.setItem("taskList", "[]")
   }
   let taskList = JSON.parse(localStorage.getItem("taskList") || '{}');
    taskList.push(upDatedTaskList)
    localStorage.setItem("taskList", JSON.stringify(taskList))
    
    this.router.navigate(["/"])
  }


  
  
  constructor(private router : Router) {
    
 this.maximumLetter = false
  }
}
