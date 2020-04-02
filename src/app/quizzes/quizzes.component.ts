import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../services/QuizzesServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizzesServiceClient) { }

  quizzes = [{
    title: '',
    attempts: []
  }]
  ngOnInit(): void {
    this.service.findAllQuizzes()
      .then(quizzes => {
        this.quizzes = quizzes
        return quizzes.map(quiz => {
          console.log(quiz._id)
          return fetch(`http://localhost:3000/api/quizzes/${quiz._id}/attempts`)
            .then(response => response.json())
        });
      })
      .then(attemptPromises => {
        return Promise.all(attemptPromises)
      })
      .then(attempts => {
        console.log(attempts);
        for (let i = 0; i < this.quizzes.length; i++) {
          this.quizzes[i].attempts = attempts[i]
        }
      })
  }

  deleteQuiz = (quizDeleted) =>
    this.service.deleteQuiz(quizDeleted._id)
      .then(status => this.quizzes = this.quizzes.filter(quiz => quiz._id !== quizDeleted._id))

  createQuiz = () =>
    this.service.createQuiz()
      .then(quiz => this.quizzes.push(quiz))

}
