import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employer} from "../interfaces/employer.interface";
import {ApiService} from './api.service';

@Injectable()
export class AllService {
    constructor(private api: ApiService) { }
    getByName(type: string, countryCode: string, text: string): Observable<Employer[]> {
        return this.api.postPublic('all/search', {type, countryCode, text}) as Observable<Employer[]>;
      }    
}