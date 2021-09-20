import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from "../interfaces/job.interface";
import {ApiService} from './api.service';

@Injectable()
export class JobService {
  constructor(private api: ApiService) { }

  add(item: Job): Observable<Job> {
    return this.api.postPrivate('job', item) as Observable<Job>;
  }

  update(id: string, item: Job): Observable<Job> {
    return this.api.putPrivate('job/' + id, item) as Observable<Job>;
  }

  getAll(): Observable<Job[]> {
    return this.api.getPublic('job') as Observable<Job[]>;
  }

  getAllByCountryCodeAndCategorySlug(countryCode: string, categorySlug: string): Observable<Job[]> {
    console.log('categorySlug====', categorySlug);
    return this.api.getPublic('job/countryCode/' + countryCode + '/categorySlug/' + categorySlug) as Observable<Job[]>;
  }

  get(id: string): Observable<Job> {
    return this.api.getPublic('job/' + id) as Observable<Job>;
  }

  getByCountryCodeAndSlug(countryCode: string, slug: string): Observable<Job> {
    return this.api.getPublic('job/countryCode/' + countryCode + '/slug/' + slug) as Observable<Job>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('job/deleteMany', ids);
  }
}