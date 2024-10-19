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
      { title: 'Вантажна партія', cols: 1, rows: 1 },
      { title: 'Черга в порт', cols: 1, rows: 1 },
      { title: 'Кількість авто з вантажем на експорт за місяць', cols: 2, rows: 2 },
    ];
  }
}
