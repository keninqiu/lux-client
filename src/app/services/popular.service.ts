import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Popular} from "../interfaces/popular.interface";
import {ApiService} from './api.service';

@Injectable()
export class PopularService {
  constructor(private api: ApiService) { }

  add(item: Popular): Observable<Popular> {
    return this.api.postPrivate('popular', item) as Observable<Popular>;
  }

  update(id: string, item: Popular): Observable<Popular> {
    return this.api.putPrivate('popular/' + id, item) as Observable<Popular>;
  }

  getAll(): Observable<Popular[]> {
    return this.api.getPublic('popular') as Observable<Popular[]>;
  }

  getAllByType(type: string): Observable<Popular[]> {
    return this.api.getPublic('popular/type/' + type) as Observable<Popular[]>;
  }

  getByCountryCodeAndType(countryCode: string, type: string): Observable<Popular> {
    return this.api.getPublic('popular/countryCode/' + countryCode +'/type/' + type) as Observable<Popular>;
  }

  get(id: string): Observable<Popular> {
    return this.api.getPublic('popular/' + id) as Observable<Popular>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('popular/deleteMany', ids);
  }
}
