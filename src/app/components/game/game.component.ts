import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/question.model';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { QuestionsService } from 'src/app/core/services/questions.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('answerState', [
      state('notAnswered', style({
        display: 'flex'
      })),
      state('answered', style({
        display: 'none'
      })),
      transition('notAnswered <=> answered', animate(300))
    ]),
    trigger('correctState', [
      state('notAnswered', style({
        display: 'none'
      })),
      state('correct', style({
        display: 'flex'
      })),
      transition('notAnswered <=> correct', animate(800))
    ]),
  ]
})
export class GameComponent implements OnInit {
  height: number = +this.localStorageService.get('height');
  width: number = +this.localStorageService.get('width');
  username: string = this.localStorageService.get('username');
  imageUrl: string = this.localStorageService.get('imageUrl');
  heightGrid: Array<number> | undefined;
  widthGrid: Array<number> | undefined;
  questionIndex: number = 0;
  question: Question | undefined;
  answerState: string = 'notAnswered';
  correctState: string = 'notAnswered';

  constructor(private router: Router, private localStorageService: LocalStorageService, private questionsService: QuestionsService) { }

  //Compose game grid
  fillGrid() {
    this.heightGrid = Array(this.height).fill(0).map((x, i) => i);
    this.widthGrid = Array(this.width).fill(0).map((x, i) => i);
  }

  //Get question

  getQuestion(questionIndex: number) {
    return this.questionsService.getQuestionByIndex(questionIndex);
  }

  onSubmitAnswer(answer: boolean) {
    if (this.question?.answer == answer) {
    this.correctState = 'correct';
    this.answerState = 'answered';
    
  }}


  ngOnInit(): void {
    this.fillGrid();
    this.question = this.getQuestion(this.questionIndex);


  }

}
