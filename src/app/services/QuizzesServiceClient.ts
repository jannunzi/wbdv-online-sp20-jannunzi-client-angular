import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`http://localhost:3000/api/quizzes`)
      .then(response => response.json())
}
