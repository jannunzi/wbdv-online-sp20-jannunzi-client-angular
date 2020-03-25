import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  createQuiz = () =>
    fetch(`http://localhost:3000/api/quizzes`, {
      method: 'post',
      body: JSON.stringify({title: 'New Quiz'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  findAllQuizzes = () =>
    fetch(`http://localhost:3000/api/quizzes`)
      .then(response => response.json())

  deleteQuiz = (id) =>
    fetch(`http://localhost:3000/api/quizzes/${id}`, {
      method: 'delete'
    })
      // .then(response => response.json())
}
