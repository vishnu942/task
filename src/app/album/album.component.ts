import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  data: Object;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data => {
      console.log(data)
      this.data = data
    })
  }
  add(a) {
    console.log(a)
    localStorage.setItem("album", JSON.stringify(a))
    this.router.navigateByUrl("album1")
  }
}
