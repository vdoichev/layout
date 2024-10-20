import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-ticket-count-chart',
  templateUrl: './ticket-count-chart.component.html',
  styleUrls: ['./ticket-count-chart.component.css']
})
export class TicketCountChartComponent implements OnInit {
  @Input() title: string = "";

  /** Based on the screen size, switch from standard to one column per row */

  public options: EChartsOption = {};
  ngOnInit(): void {

    this.options = {
      // title: {
      //   text: 'Оформлено vs Прибуття в порт',
      //   subtext: 'Fake Data'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ["Оформлено", "В'їзд в порт", "Виїзд з порту"]
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Оформлено',
          type: 'bar',
          color: ['#FFD700'],
          data: [
            232, 256, 767, 1356, 1622, 326, 200
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 1622, xAxis: 4, yAxis: 1622},
              {name: 'Min', value: 200, xAxis: 6, yAxis: 200}
            ]
          },
          emphasis: {
            focus: 'series'
          },
        },
        {
          name: "В'їзд в порт",
          type: 'bar',
          color: ['#004A81'],
          data: [
            264, 287, 707, 1756, 1822, 487, 188
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 1822, xAxis: 4, yAxis: 1822},
              {name: 'Min', value: 188, xAxis: 6, yAxis: 188}
            ]
          },
          emphasis: {
            focus: 'series'
          },
        },
        {
          name: 'Виїзд з порту',
          type: 'bar',
          color: ['#009473'],
          data: [
            334, 278, 890, 236, 564, 67, 233
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 890, xAxis: 2, yAxis: 890},
              {name: 'Min', value: 67, xAxis: 5, yAxis: 67}
            ]
          },
          emphasis: {
            focus: 'series'
          },
        }
      ]
    }
  }
}
