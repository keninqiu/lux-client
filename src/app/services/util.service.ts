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

  getUrl(url: string) {
    if(!url) {
      return url;
    }
    if((url.indexOf('/research') === 0) && ((url.indexOf('/Salary') > 0 || url.indexOf('/Hourly_Rate') > 0))) {
      console.log('url==', url);
      const arr = url.split('=');
      if(arr[1]) {
        const subarr = arr[1].split('/');
        const subarr0 = subarr[0].replace('(','%28').replace(')','%29');
        return arr[0] + '%3D' + subarr0 + '/' + subarr[1];        
      }
      return url;
    }
    return url;
  }
}