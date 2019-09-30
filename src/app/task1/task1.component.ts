import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  totaldata
  data1: Object;
  entiredata: any;
  newtask: FormGroup;
  constructor(private http: HttpClient, private router: Router) {
    this.newtask = new FormGroup({
      userid: new FormControl(''),
      id: new FormControl(''),
      title: new FormControl(''),
      comp: new FormControl('')

    })

  }

  ngOnInit() {
    // let data2=this.http.get("https://jsonplaceholder.typicode.com/posts")
    // //.subscribe(data=>{
    //   //console.log(data)
    //   //this.totaldata=data
    // //})
    // let data3=this.http.get("https://jsonplaceholder.typicode.com/comments")
    // //.subscribe(data=>{
    //   //console.log(data)
    //  // this.data1=data
    // //})
    // forkJoin([data2,data3]).subscribe(res=>{
    //   console.log(res)
    //   this.entiredata=res['1']
    // })
    // //console.log(this.entiredata)
  }
  add(val) {
    let data = {
      userId: val.value.userid,
      id: val.value.id,
      title: val.value.title,
      completed: val.value.comp
    }
    this.http.post("https://jsonplaceholder.typicode.com/todos", data).subscribe(data => {
      console.log(data)
      alert("Enter Data Sucessfully")
      this.router.navigateByUrl("task")
    })
  }
}
