import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {MockData} from './mock-data';
import {MockDataService} from './mock-data.service';


@Component({
    moduleId:module.id,
    selector:'mock-data',
    templateUrl:'mock-data.component.html', 
    styleUrls:['mock-data.component.css']
})

export class MockDataComponent implements OnInit{
    constructor(private mockDataService:MockDataService){}
    title = 'Dev-Mock';
    datas:MockData[] = [];
    getDatas():void{
        this.mockDataService.getDatas().then(datas => this.datas = datas);
    }
    ngOnInit():void{
        console.log("===mock.onInit===");
        this.getDatas();
    }
}
