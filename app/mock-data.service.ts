import {Injectable} from '@angular/core';
import {MockData} from './mock-data';
import {MOCKDATAS} from './mock-datas';


@Injectable()
export class MockDataService{
    getDatas():Promise<MockData[]>{
        return Promise.resolve(MOCKDATAS);
    }
}
