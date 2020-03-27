import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  username: string
  password: string

  register = (username, password) => {
    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(actualUser => {
        console.log(actualUser)
        this.router.navigate(['profile']);
      });
  }

  ngOnInit(): void {
  }

}
