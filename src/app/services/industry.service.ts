import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Industry} from "../interfaces/industry.interface";
import {ApiService} from './api.service';

@Injectable()
export class IndustryService {
  constructor(private api: ApiService) { }

  add(item: Industry): Observable<Industry> {
    return this.api.postPrivate('industry', item) as Observable<Industry>;
  }

  update(id: string, item: Industry): Observable<Industry> {
    return this.api.putPrivate('industry/' + id, item) as Observable<Industry>;
  }

  getAll(): Observable<Industry[]> {
    return this.api.getPrivate('industry') as Observable<Industry[]>;
  }

  getAllByCountryCodeAndCategorySlug(countryCode: string, categorySlug: string): Observable<Industry[]> {
    console.log('categorySlug====', categorySlug);
    return this.api.getPublic('industry/countryCode/' + countryCode + '/categorySlug/' + categorySlug) as Observable<Industry[]>;
  }

  get(id: string): Observable<Industry> {
    return this.api.getPublic('industry/' + id) as Observable<Industry>;
  }
  getByCountryCodeAndSlug(countryCode: string, slug: string): Observable<Industry> {
    return this.api.getPublic('industry/countryCode/' + countryCode + '/slug/' + slug) as Observable<Industry>;
  }
  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('industry/deleteMany', ids);
  }
}