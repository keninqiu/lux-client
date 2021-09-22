import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-related',
  templateUrl: './related.component.html',
  styleUrls: [
    './related.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class SharedRelatedComponent implements OnInit {
  @Input() typeName: string;
  @Input() entity: any;
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(url) {
    return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');;
  }
}
