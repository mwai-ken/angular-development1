import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // title: string;
  todoitem: string ="todo item"
  constructor() { }

  ngOnInit(): void {
  }

}
