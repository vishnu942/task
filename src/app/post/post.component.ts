import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data
  public fulldata:any
  commentdata = []
  constructor(private http: HttpClient, private router: Router) {
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(data => {
      console.log(data)
      this.fulldata=data
    })
   }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("data"))
    console.log(this.data)

   
    setTimeout(() => {
      this.comparingComments()
    }, 2000);
    
  }

  comparingComments(){
    for (var i = 0; i < this.fulldata.length; i++) {
      if (this.data.id == this.fulldata[i].postId) {
        this.commentdata.push(this.fulldata[i])
      }
    }
    console.log(this.commentdata)
  }

}
