import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-related-degrees',
  templateUrl: './related-degrees.component.html',
  styleUrls: ['./related-degrees.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class RelatedDegreesComponent implements OnInit {
  @Input() degree: Degree;
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(url) {
    return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');;
  }  
}
