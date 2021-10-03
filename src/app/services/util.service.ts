import {Injectable} from '@angular/core';

@Injectable()
export class UtilService {
   getTypeName(type: string) {

    if (type == 'School') {
      return '学校';
    } else
    if (type == 'Job') {
      return '工作';
    } else
    if (type == 'Employer') {
      return '公司';
    } else
    if (type == 'Degree') {
      return '学位';
    } else
    if (type == 'Industry') {
      return '行业';
    } else
    if (type == 'Skill') {
      return '技能';
    } else
    if (type == 'Certification') {
      return '证书';
    }
    return '全部';
  }
}