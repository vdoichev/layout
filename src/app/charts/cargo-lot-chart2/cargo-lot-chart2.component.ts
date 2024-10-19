import {Component, Input, OnInit} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-cargo-lot-chart2',
  templateUrl: './cargo-lot-chart2.component.html',
  styleUrls: ['./cargo-lot-chart2.component.css']
})
export class CargoLotChart2Component implements OnInit {
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
  ];

  // options
  gradient: boolean = false;

  myColorScheme: Color = {
    name: "test",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#009473','#004A81','#FFD700', '#BE1E2D','#E0E0E0', '#BE1E2D']
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
        }
      ]
    };
  }
}