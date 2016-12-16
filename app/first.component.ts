import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'first',
    templateUrl:'first.component.html',
    styleUrls:['first.component.css']
})

export class FirstComponent implements AfterViewInit{
    graphData: Array<number>;
    constructor(private router:Router){
        this.graphData = [10, 20, 30, 40, 60];
    }
    ngAfterViewInit(){
    }
}
                
