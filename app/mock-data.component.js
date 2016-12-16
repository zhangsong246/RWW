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
var mock_data_service_1 = require('./mock-data.service');
var MockDataComponent = (function () {
    function MockDataComponent(mockDataService) {
        this.mockDataService = mockDataService;
        this.title = 'Dev-Mock';
        this.datas = [];
    }
    MockDataComponent.prototype.getDatas = function () {
        var _this = this;
        this.mockDataService.getDatas().then(function (datas) { return _this.datas = datas; });
    };
    MockDataComponent.prototype.ngOnInit = function () {
        console.log("===mock.onInit===");
        this.getDatas();
    };
    MockDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mock-data',
            templateUrl: 'mock-data.component.html',
            styleUrls: ['mock-data.component.css']
        }), 
        __metadata('design:paramtypes', [mock_data_service_1.MockDataService])
    ], MockDataComponent);
    return MockDataComponent;
}());
exports.MockDataComponent = MockDataComponent;
//# sourceMappingURL=mock-data.component.js.map