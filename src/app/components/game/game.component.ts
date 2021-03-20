import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
height: number = +this.localStorageService.get('height');
width: number = +this.localStorageService.get('width');

heightGrid: Array<number> | undefined;
widthGrid: Array<number> | undefined;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.heightGrid = Array(this.height).fill(0).map((x,i)=>i);
    this.widthGrid = Array(this.width).fill(0).map((x,i)=>i);

    console.log(this.heightGrid);
    console.log(this.widthGrid);
    
  }

}
