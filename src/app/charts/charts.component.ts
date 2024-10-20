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
      { title: 'Вантажна партія', cols: 6, rows: 7 },
      { title: 'Черга в порт', cols: 6, rows: 7 },
      { title: 'Кількість авто з вантажем на експорт за місяць', cols: 12, rows: 9 },
    ];
  }
}
