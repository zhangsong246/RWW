import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {MockDataComponent} from './mock-data.component';
import {FirstComponent} from './first.component';
import {FirstStandAloneComponent} from './first-stand-alone.component';

const routes:Routes = [
    {path:'',redirectTo:'/mock-datas', pathMatch:'full'},
    {path:'mock-datas', component:MockDataComponent},
    {path:'first', component:FirstComponent},
    {path:'first-stand-alone', component:FirstStandAloneComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

