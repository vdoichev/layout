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
      "name": "ПОГОДЖЕНО",
      "value": 250000
    },
    {
      "name": "В ПОРТУ",
      "value": 380000
    },
    {
      "name": "ОБРОБЛЕНО",
      "value": 550000
    },
    {
      "name": "ЗАЛИШОК",
      "value": 123000
    },
    {
      "name": "ПОВЕРНУТО",
      "value": 25000
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
    domain: ['#FFD700', '#004A81', '#009473', '#E0E0E0', '#BE1E2D']
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
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }
}
