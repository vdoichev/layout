import {Component, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";
import {Color, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
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

  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  myColorScheme: Color = {
    name: "test",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#009473','#004A81','#FFD700', '#BE1E2D','#E0E0E0', '#BE1E2D']
  }

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
