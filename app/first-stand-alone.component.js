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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var d3 = require('@types/d3');
var FirstStandAloneComponent = (function () {
    function FirstStandAloneComponent(router) {
        this.router = router;
        console.log('===First Stand Alone Construct===');
    }
    FirstStandAloneComponent.prototype.ngAfterViewInit = function () {
        console.log('===First Stand Alone View Init===');
        var data = [10, 20, 30, 40, 60];
        var chart = d3.select(this.myChart.nativeElement);
        //to our original directive markup bars-chart
        //we add a div with out chart stling and bind each
        //data entry to the chart
        chart.append("div")
            .attr('class', 'chart')
            .selectAll('div')
            .data(data).enter().append("div")
            .transition().ease(d3.easeElastic)
            .style("width", function (d) { return d + "%"; })
            .text(function (d) { return d + "%"; });
        //a little of magic: setting it's width based
        //on the data value (d) 
        //and text all with a smooth transition
    };
    __decorate([
        core_1.ViewChild('myChartClass'), 
        __metadata('design:type', Object)
    ], FirstStandAloneComponent.prototype, "myChart", void 0);
    FirstStandAloneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'first-stand-alone',
            templateUrl: 'first-stand-alone.component.html',
            styleUrls: ['first-stand-alone.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FirstStandAloneComponent);
    return FirstStandAloneComponent;
}());
exports.FirstStandAloneComponent = FirstStandAloneComponent;
//# sourceMappingURL=first-stand-alone.component.js.map