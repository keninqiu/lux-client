import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Certification} from "../interfaces/certification.interface";
import {ApiService} from './api.service';

@Injectable()
export class CertificationService {
  constructor(private api: ApiService) { }

  add(item: Certification): Observable<Certification> {
    return this.api.postPrivate('certification', item) as Observable<Certification>;
  }

  update(id: string, item: Certification): Observable<Certification> {
    return this.api.putPrivate('certification/' + id, item) as Observable<Certification>;
  }

  getAll(): Observable<Certification[]> {
    return this.api.getPrivate('certification') as Observable<Certification[]>;
  }

  get(id: string): Observable<Certification> {
    return this.api.getPublic('certification/' + id) as Observable<Certification>;
  }

  deleteMany(ids: string[]): Observable<any> {
    return this.api.postPrivate('certification/deleteMany', ids);
  }
}