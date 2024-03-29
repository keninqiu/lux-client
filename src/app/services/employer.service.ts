import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employer} from "../interfaces/employer.interface";
import {ApiService} from './api.service';

@Injectable()
export class EmployerService {
  constructor(private api: ApiService) { }

  add(item: Employer): Observable<Employer> {
    return this.api.postPrivate('employer', item) as Observable<Employer>;
  }

  update(id: string, item: Employer): Observable<Employer> {
    return this.api.putPrivate('employer/' + id, item) as Observable<Employer>;
  }

  getAll(): Observable<Employer[]> {
    return this.api.getPrivate('employer') as Observable<Employer[]>;
  }

  get(id: string): Observable<Employer> {
    return this.api.getPublic('employer/' + id) as Observable<Employer>;
  }

  getAllByCountryCodeAndCategorySlug(countryCode: string, categorySlug: string): Observable<Employer[]> {
    console.log('categorySlug====', categorySlug);
    return this.api.getPublic('employer/countryCode/' + countryCode + '/categorySlug/' + categorySlug) as Observable<Employer[]>;
  }

  getByCountryCodeAndSlug(countryCode: string, slug: string): Observable<Employer> {
    return this.api.getPublic('employer/countryCode/' + countryCode + '/slug/' + slug) as Observable<Employer>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('employer/deleteMany', ids);
  }
}