import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // this is a property of the class
  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log("toggleAddTask fired");
  }

}
