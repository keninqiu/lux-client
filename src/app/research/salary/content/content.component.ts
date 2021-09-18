import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.scss'
  ]
})
export class ContentComponent implements OnInit {
  countryCode: string;
  type: string;
  salaryType: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryCode = params.get('countryCode');
      this.type = params.get('type');
      this.salaryType = params.get('salaryType');
      console.log('type=', this.type);
    });
  }

}
