import {  Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from '../../../../highcharts.service'

@Component({
  selector: 'app-st-radio-chart',
  templateUrl: './st-radio-chart.component.html',
  styleUrls: ['./st-radio-chart.component.scss']
})
export class StRadioChartComponent implements OnInit {
  @ViewChild('charts', { static: false }) chartEl: ElementRef = new ElementRef('div');
  constructor(private highcharts: HighchartsService) {
   }
  ngOnInit(){
   
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
   myOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };
}