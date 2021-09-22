import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-popular-companies',
  templateUrl: './popular-companies.component.html',
  styleUrls: [
    './popular-companies.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class SharedPopularCompaniesComponent implements OnInit {
  @Input() entity: any;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url) {
    return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');;
  }  

  getEmployers() {
    if(this.entity.byDimension.salaryByEmployer && this.entity.byDimension.salaryByEmployer.length > 0) {
      return this.entity.byDimension.salaryByEmployer;
    }
    return this.entity.byDimension.hourlyRateByEmployer;
  }
}
