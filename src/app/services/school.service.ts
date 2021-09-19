import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {School} from "../interfaces/school.interface";
import {ApiService} from './api.service';

@Injectable()
export class SchoolService {
  constructor(private api: ApiService) { }

  add(item: School): Observable<School> {
    return this.api.postPrivate('school', item) as Observable<School>;
  }

  update(id: string, item: School): Observable<School> {
    return this.api.putPrivate('school/' + id, item) as Observable<School>;
  }

  getAll(): Observable<School[]> {
    return this.api.getPublic('school') as Observable<School[]>;
  }

  getAllByCountryCodeAndCategorySlug(countryCode: string, categorySlug: string): Observable<School[]> {
    console.log('categorySlug====', categorySlug);
    return this.api.getPublic('school/countryCode/' + countryCode + '/categorySlug/' + categorySlug) as Observable<School[]>;
  }

  getByCountryCodeAndSlug(countryCode: string, slug: string): Observable<School> {
    return this.api.getPublic('school/countryCode/' + countryCode + '/slug/' + slug) as Observable<School>;
  }

  get(id: string): Observable<School> {
    return this.api.getPublic('school/' + id) as Observable<School>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('school/deleteMany', ids);
  }
}