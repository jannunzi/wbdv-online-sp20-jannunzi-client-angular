import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'course-viewer/:courseId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
