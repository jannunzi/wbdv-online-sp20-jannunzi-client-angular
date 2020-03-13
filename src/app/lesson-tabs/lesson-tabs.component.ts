import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) { }

  lessons = [  ]
  lessonId = ''
  moduleId = ''
  courseId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
    });
  }

}
