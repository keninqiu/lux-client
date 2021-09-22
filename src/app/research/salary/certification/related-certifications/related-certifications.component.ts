import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification.interface';

@Component({
  selector: 'app-related-certifications',
  templateUrl: './related-certifications.component.html',
  styleUrls: ['./related-certifications.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class RelatedCertificationsComponent implements OnInit {
  @Input() certification: Certification;
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(url) {
    return encodeURIComponent(url);
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');;
  }  
}
