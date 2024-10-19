import {Component} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  cards: any;
  constructor() {
  this.cards = [
      { title: 'Вантажна партія 1', cols: 1, rows: 1 },
      { title: 'Вантажна партія 2', cols: 1, rows: 1 },
      { title: 'Обробка вантажів по порту', cols: 2, rows: 1 },
    ];
  }
}
