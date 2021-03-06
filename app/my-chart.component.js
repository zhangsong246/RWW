"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var d3 = require('@types/d3');
var MyChartComponent = (function () {
    function MyChartComponent(elementRef) {
        console.log('===init component===');
        var el = elementRef.nativeElement;
        var graph = d3.select(el);
        this.divs = graph.
            append('div').
            attr('class', 'chart').
            style('width', '500px').
            style('height', '130px').
            selectAll('div');
    }
    MyChartComponent.prototype.render = function (newValue) {
        if (!newValue)
            return;
        this.divs.data(newValue).enter().append('div')
            .transition().ease(d3.easeElastic)
            .style('width', function (d) { return d + '%'; })
            .text(function (d) { return d + '%'; });
    };
    MyChartComponent.prototype.ngOnChanges = function (changes) {
        console.log('===OnChanges===');
        this.render(this.data);
    };
    MyChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-chart',
            template: '',
            styleUrls: ['my-chart.component.css'],
            inputs: ['data']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MyChartComponent);
    return MyChartComponent;
}());
exports.MyChartComponent = MyChartComponent;
//# sourceMappingURL=my-chart.component.js.map