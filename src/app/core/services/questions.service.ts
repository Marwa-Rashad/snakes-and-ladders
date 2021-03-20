import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Array<Question> = [
    {
      id: 1,
      questionText: 'Meghan Markle’s first name is Rachel',
      answer: true
    }
  ]
  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestionByIndex(index: number): Question {
    return this.questions[index];
  }
}
