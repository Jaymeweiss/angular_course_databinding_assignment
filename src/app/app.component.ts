import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oddNumbers: number[];
  evenNumbers: number[];

  ngOnInit(): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  onNewEvenNumber(number: number) {
    this.evenNumbers.push(number);
  }

  onNewOddNumber(number: number) {
    this.oddNumbers.push(number);
  }

}
