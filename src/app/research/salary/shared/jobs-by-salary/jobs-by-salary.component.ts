import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-shared-jobs-by-salary',
  templateUrl: './jobs-by-salary.component.html',
  styleUrls: [
    './jobs-by-salary.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class SharedJobsBySalaryComponent implements OnInit {
  @Input() entity: any;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url: any) {
    return encodeURIComponent(url);
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');
  }
}
