import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {FormsModule} from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
