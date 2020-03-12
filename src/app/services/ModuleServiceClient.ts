import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules`)
      .then(response => response.json())
}
