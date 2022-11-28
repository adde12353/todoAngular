import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ErrorComponent } from './error/error.component';
import { TaskComponent } from './task/task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';


const appRoute: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
{path: 'tasks', component: TasksComponent},
{path: 'create', component: CreateTaskComponent},
{path: 'edit/:id', component: EditTaskComponent},
{path: 'task/:id', component: TaskComponent},
{path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,
    ErrorComponent,
    TaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
