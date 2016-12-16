import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import * as d3 from '@types/d3';

@Component({
    moduleId:module.id,
    selector:'first-stand-alone',
    templateUrl:'first-stand-alone.component.html',
    styleUrls:['first-stand-alone.component.css']
})

export class FirstStandAloneComponent implements AfterViewInit{
    @ViewChild('myChartClass') myChart;
    constructor(private router:Router){
        console.log('===First Stand Alone Construct===');
    }
    ngAfterViewInit(){
        console.log('===First Stand Alone View Init===');
        var data = [10,20,30,40,60];
        var chart = d3.select(this.myChart.nativeElement);
        //to our original directive markup bars-chart
        //we add a div with out chart stling and bind each
        //data entry to the chart
        chart.append("div")
         .attr('class', 'chart')
         .selectAll('div')
         .data(data).enter().append("div")
         .transition().ease(d3.easeElastic)
         .style("width", function(d) { return d + "%"; })
         .text(function(d) { return d + "%"; });
        //a little of magic: setting it's width based
        //on the data value (d) 
        //and text all with a smooth transition
    }
}
