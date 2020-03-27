import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string
  password: string
  login = (username, password) => {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(currentUser => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit(): void {

  }

}
