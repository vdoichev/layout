import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from "@angular/material/grid-list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import { ChartsComponent } from './charts/charts.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {NgxEchartsModule} from "ngx-echarts";
import { PieChartModule} from "@swimlane/ngx-charts";
import { CargoLotChartComponent } from './charts/cargo-lot-chart/cargo-lot-chart.component';
import { CargoLotChart2Component } from './charts/cargo-lot-chart2/cargo-lot-chart2.component';
import { PortOperatorCargoForwarderChartComponent } from './charts/port-operator-cargo-forwarder-chart/port-operator-cargo-forwarder-chart.component';
import { TicketCountChartComponent } from './charts/ticket-count-chart/ticket-count-chart.component';
import { TicketCountByOperatorChartComponent } from './charts/ticket-count-by-operator-chart/ticket-count-by-operator-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    CargoLotChartComponent,
    CargoLotChart2Component,
    PortOperatorCargoForwarderChartComponent,
    TicketCountChartComponent,
    TicketCountByOperatorChartComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    PieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
