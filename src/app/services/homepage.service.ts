import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Homepage} from "../interfaces/homepage.interface";
import {ApiService} from './api.service';

@Injectable()
export class HomepageService {
  constructor(private api: ApiService) { }

  getLatest(): Observable<Homepage> {
    return this.api.getPublic('homepage/latest') as Observable<Homepage>;
  } 


}
