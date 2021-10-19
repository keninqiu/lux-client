import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Survey} from "../interfaces/survey.interface";
import {ApiService} from './api.service';

@Injectable()
export class SurveyService {
  constructor(private api: ApiService) { }

  add(survey: any): Observable<Survey> {
    return this.api.postPrivate('survey', survey) as Observable<Survey>;
  }

  update(id: string, survey: any): Observable<Survey> {
    return this.api.putPrivate('survey/' + id, survey) as Observable<Survey>;
  }

  getAll(): Observable<Survey[]> {
    return this.api.getPrivate('survey') as Observable<Survey[]>;
  }

  get(id: string): Observable<Survey> {
    return this.api.getPublic('survey/' + id) as Observable<Survey>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('survey/deleteMany', ids);
  }
}
