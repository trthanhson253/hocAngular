import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Task } from './../../models/task.class';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input('task') task:Task[];
  @Output('setStatus') setStatus=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onSetStatus(){
    this.setStatus.emit();
  }
}
