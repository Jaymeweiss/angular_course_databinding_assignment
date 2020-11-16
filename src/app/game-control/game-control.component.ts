import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number: number;
  timer;
  @Output() oddNumber = new EventEmitter<number>();
  @Output() evenNumber = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.number = 0;
  }

  onStartGame() {
    this.timer = setInterval(() => this.increment(), 1000);
  }

  increment() {
    this.number += 1;
    console.log(this.number);
    this.number % 2 === 0 ?
      this.evenNumber.emit(this.number) :
      this.oddNumber.emit(this.number);
  }

  onStopGame() {
    clearInterval(this.timer);
  }
}
