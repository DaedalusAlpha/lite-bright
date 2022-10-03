import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lite-bright';
  size: number = 10;
  alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  chosenColor: string = '';

  setColor(c: string): void {
    this.chosenColor = c;
  }

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  lb_grid: boolean[][] = [];

  lb_col: number[] = [];

  lb_row: number[] = Array.from(Array(10).keys());
}
