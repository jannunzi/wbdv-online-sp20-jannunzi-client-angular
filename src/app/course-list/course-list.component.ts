import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courseTitle = '';
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '123', title: 'Course B'},
    {_id: '123', title: 'Course C'}
  ];
  addCourse = (title) =>
    this.courses.push({_id: '234', title})
  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse)
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
