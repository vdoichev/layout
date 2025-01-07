import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-ticket-count-chart',
  templateUrl: './ticket-count-chart.component.html',
  styleUrls: ['./ticket-count-chart.component.css']
})
export class TicketCountChartComponent implements OnInit {
  @Input() title: string = "";

  json = {
    category: ['01.01.2025 8:00', '02.01.2025 8:00', '03.01.2025 8:00', '04.01.2025 8:00', '05.01.2025 8:00', '06.01.2025 8:00', '07.01.2025 8:00'],
    data: [
      { canceled: [10, 25, 76, 135, 162, 32, 20]},
      { pending: [232, 256, 767, 1356, 1622, 326, 200]},
      { in_port: [264, 287, 707, 1756, 1822, 487, 188]},
      { approval: [334, 278, 890, 236, 564, 67, 233]},
    ]
  }
  /** Based on the screen size, switch from standard to one column per row */

  public options: EChartsOption = {};
  ngOnInit(): void {

    this.options = {
      title: {
        text: 'За тиждень з 01.10.2024 по 07.10.2024',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ["Оформлено", "Скасовано", "В'їзд в порт", "Виїзд з порту"],
        bottom: '5%',
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
          data: ['01.01.2025 8:00', '02.01.2025 8:00', '03.01.2025 8:00', '04.01.2025 8:00', '05.01.2025 8:00', '06.01.2025 8:00', '07.01.2025 8:00']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Скасовано',
          type: 'bar',
          color: ['#595959'],
          stack: 'order',
          data: [
            10, 25, 76, 135, 162, 32, 20
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 162, xAxis: 4, yAxis: 162},
              {name: 'Min', value: 20, xAxis: 6, yAxis: 20}
            ]
          },
          emphasis: {
            focus: 'series'
          },
        },
        {
          name: 'Оформлено',
          type: 'bar',
          color: ['#FFD700'],
          stack: 'order',
          data: [
            232, 256, 767, 1356, 1622, 326, 200
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 1622, xAxis: 4, yAxis: 1784},
              {name: 'Min', value: 200, xAxis: 6, yAxis: 220}
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
