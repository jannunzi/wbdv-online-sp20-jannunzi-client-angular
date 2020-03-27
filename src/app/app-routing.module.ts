import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quizzes/:qid', component: QuizComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseListComponent},
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
