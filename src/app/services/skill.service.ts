import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Skill} from "../interfaces/skill.interface";
import {ApiService} from './api.service';

@Injectable()
export class SkillService {
  constructor(private api: ApiService) { }

  add(item: Skill): Observable<Skill> {
    return this.api.postPrivate('skill', item) as Observable<Skill>;
  }

  update(id: string, item: Skill): Observable<Skill> {
    return this.api.putPrivate('skill/' + id, item) as Observable<Skill>;
  }

  getAll(): Observable<Skill[]> {
    return this.api.getPrivate('skill') as Observable<Skill[]>;
  }

  getAllByCountryCodeAndCategorySlug(countryCode: string, categorySlug: string): Observable<Skill[]> {
    console.log('categorySlug====', categorySlug);
    return this.api.getPublic('skill/countryCode/' + countryCode + '/categorySlug/' + categorySlug) as Observable<Skill[]>;
  }

  get(id: string): Observable<Skill> {
    return this.api.getPublic('skill/' + id) as Observable<Skill>;
  }

  getByCountryCodeAndSlug(countryCode: string, slug: string): Observable<Skill> {
    return this.api.getPublic('skill/countryCode/' + countryCode + '/slug/' + slug) as Observable<Skill>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('skill/deleteMany', ids);
  }
}