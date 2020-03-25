import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../services/QuizzesServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizzesServiceClient) { }

  quizzes = []
  ngOnInit(): void {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes)
  }

  deleteQuiz = (quizDeleted) =>
    this.service.deleteQuiz(quizDeleted._id)
      .then(status => this.quizzes = this.quizzes.filter(quiz => quiz._id !== quizDeleted._id))

  createQuiz = () =>
    this.service.createQuiz()
      .then(quiz => this.quizzes.push(quiz))

}
