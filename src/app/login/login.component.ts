import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val: FormGroup
  constructor(private http: HttpClient, private router: Router) {
    this.val = new FormGroup({
      name: new FormControl(''),
      pass: new FormControl('')
    })
  }
  ngOnInit() {
  }
  add(a) {
    let data = {
      email: a.value.name,
      password: a.value.pass
    }
    //console.log(data)
    this.http.post("https://reqres.in/api/register", data).subscribe(data => {
      console.log(data)
      console.log("sucessfully login")
      this.router.navigateByUrl("dash")
    })
  }
}
