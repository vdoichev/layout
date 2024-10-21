import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption, SeriesOption} from "echarts";

@Component({
  selector: 'app-ticket-count-by-operator-chart',
  templateUrl: './ticket-count-by-operator-chart.component.html',
  styleUrls: ['./ticket-count-by-operator-chart.component.css']
})
export class TicketCountByOperatorChartComponent implements OnInit {
  @Input() title: string = "";
  result = 0;
  array = [];

  series: SeriesOption[] = [
    {
      name: 'ТТГ ФОРВАРД ТОВ',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320, 301, 334, 390, 330, 320],
    },
    {
      name: 'Еко-Ресурс-Холдинг ТОВ',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    },
    {
      name: 'Транс-Сервіс ТОВ',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 0, 290, 330, 310, 191, 234, 290, 330, 310]
    },
    {
      name: 'Порт Сервіс ТОВ',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 0, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410]
    },
    {
      name: 'МТЧП ДП',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320]
    }
  ];
  /** Based on the screen size, switch from standard to one column per row */

  public options: EChartsOption = {};
  ngOnInit(): void {

    this.options = {
      title: {
        text: 'За 2023 рік',
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shtotalow' as default; can also be 'line' or 'shtotalow'
          // label:{
          //   formatter: function (params){
          //     let result:any;
          //     for ( let i = 0; i < params.seriesData.length-1; i++){
          //       result = result + params.seriesData[i].value
          //     }
          //     let resultFinal = params.value + " -------------------- total: " + result
          //     result = 0;
          //     return resultFinal;
          //   }
          // }
        }
      },
      legend: {
        show: true,
        bottom: '7%'
      },
      grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        containLabel: true
      },
      calculable: true,
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (n) {
            return Math.round(n) + '';
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          show: true
        },
        data: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
      },
      series: this.series
    };
    }
}
