import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  datas
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data => {
      console.log(data)
      this.datas = data
    })
  }
  create() {
    this.router.navigateByUrl("task1")
  }
}
