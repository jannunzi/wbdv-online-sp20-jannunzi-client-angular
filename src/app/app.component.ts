import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From Component';
  students = [
    'Alice', 'Bob', 'Charlie'
  ];
  faculty = [
    {username: 'ada', first: 'Ada'},
    {username: 'tlee', first: 'Tim'}
  ];
}
