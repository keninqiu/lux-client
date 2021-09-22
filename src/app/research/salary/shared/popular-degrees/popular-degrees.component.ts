import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-popular-degrees',
  templateUrl: './popular-degrees.component.html',
  styleUrls: ['./popular-degrees.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class SharedPopularDegreesComponent implements OnInit {
  @Input() entity: any;
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(url:any) {
    return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');;
  }
}
