import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: [
    './school.component.scss', 
    '../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../assets/css/research/d0672ccc0254cae98d85.css'
  ]
})
export class SchoolComponent implements OnInit {
  countryCode: string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
    });
  }

}
