import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import {TaskListComponent} from './task-list.component';
import {TaskEditComponent} from './task-edit.component';
import {NewTaskComponent} from './new-task.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  TaskListComponent,
                  TaskEditComponent,
                  NewTaskComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
