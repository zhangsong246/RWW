import {Directive, Attribute, ElementRef, OnChanges, Inject, SimpleChanges} from '@angular/core';
import * as d3 from '@types/d3';

@Directive({
    selector:   'myChart',
    inputs: ['data']
})
export class MyChartDirective implements OnChanges{
    data: Array<number>;
    divs: any;
    constructor(@Inject(ElementRef) elementRef: ElementRef){
        var el:any = elementRef.nativeElement;
        var graph:any = d3.select(el);
        this.divs = graph.
             append('div').
             attr('class', 'chart').
             style('width', '500px').
             style('height', '130px').
             selectAll('div');
    }

    render(newValue){
        if(!newValue) return;
        this.divs.data(newValue).enter().append('div')
            .transition().ease(d3.easeElastic)
            .style('width', d => d + '%')
            .text(d => d + '%');
    }
    
    ngOnChanges(changes: SimpleChanges){
        console.log('===ngOnChanges===');
        this.render(this.data);
    }

}

