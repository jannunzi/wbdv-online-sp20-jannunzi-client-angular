import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) { }

  modules = [
    {_id: '123', title: 'Module 1'},
    {_id: '234', title: 'Module 2'},
    {_id: '345', title: 'Module 3'},
    {_id: '456', title: 'Module 4'},
    {_id: '567', title: 'Module 5'},
  ]
  courseId = ''
  moduleId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }

}
