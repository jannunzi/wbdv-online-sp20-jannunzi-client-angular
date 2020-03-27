import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  currentUser = {
    username: ''
  }

  logout = () => {
    fetch('http://localhost:3000/api/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(status => this.router.navigate(['']));
  }

  ngOnInit(): void {
    fetch('http://localhost:3000/api/currentUser', {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .then(currentUser => this.currentUser = currentUser)
  }

}
