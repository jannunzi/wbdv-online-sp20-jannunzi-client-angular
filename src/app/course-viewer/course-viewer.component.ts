import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  course = {
    title: 'Dummy Course'
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params.courseId;
      this.service.findCourseById(courseId)
        .then(course => this.course = course);
    });
  }
}
