import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-cargo-lot-chart',
  templateUrl: './cargo-lot-chart.component.html',
  styleUrls: ['./cargo-lot-chart.component.css']
})
export class CargoLotChartComponent implements OnInit {
  @Input() title: string = "";
  single: any[]= [
    {
      "name": "Оброблено",
      "value": 550000
    },
    {
      "name": "В порту",
      "value": 380000
    },
    {
      "name": "Погоджено",
      "value": 250000
    },
    {
      "name": "Повернуто",
      "value": 23000
    },
    // {
    //   "name": "Залишок",
    //   "value": 123000
    // },
    // {
    //   "name": "Надлишок",
    //   "value": 22000
    // }
  ];

  single2: any[]= [
    {
      "name": "Надлишок",
      "value": 22000
    }
  ];

  cards: any;
  constructor() {
    this.cards = [
      { title: 'Card 1', cols: 1, rows: 2 },
      { title: 'Card 2', cols: 1, rows: 1 },
    ];
  }


  /** Based on the screen size, switch from standard to one column per row */

  public options: EChartsOption = {};
  ngOnInit(): void {

    this.options = {
      title: {
        text: 'Вага вантажної партії - 1 303 000 кг',
        left: 'center'
      },
      darkMode: 'auto',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} кг.'
      },
      legend: {
        top: '55%',
        left: 'center',
      },
      animation: true,
      series: [
        {
          label: {
            formatter: '{b}: {d}%'
          },
          color: ['#009473','#004A81','#FFD700', '#008cbc'],
          name: 'Вага нетто в перепустках',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          // adjust the start and end angle
          startAngle: 180,
          endAngle: 360,
          data: this.single
        },
        {
          name: 'Вага нетто в перепустках',
          type: 'pie',
          color: ['#BE1E2D'],
          radius: ['0', '20%'],
          center: ['50%', '50%'],
          // adjust the start and end angle
          startAngle: 180,
          endAngle: 360,
          data: this.single2
        }
      ]
    };
  }
}
