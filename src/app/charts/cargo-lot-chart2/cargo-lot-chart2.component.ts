import {Component, Input} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-cargo-lot-chart2',
  templateUrl: './cargo-lot-chart2.component.html',
  styleUrls: ['./cargo-lot-chart2.component.css']
})
export class CargoLotChart2Component {
  @Input() title: string = "";
  single: any[]= [
    {
      "name": "В порту",
      "value": 125
    },
    {
      "name": "На під'їзді",
      "value": 47
    },
    {
      "name": "В черзі",
      "value": 13
    },
    {
      "name": "В дорозі",
      "value": 229
    },
  ];

  // options
  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  myColorScheme: Color = {
    name: "test",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#004A81','#009473', '#FFD700', '#93a9d1']
  }
}
