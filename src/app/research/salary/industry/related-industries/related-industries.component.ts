import { Component, Input, OnInit } from '@angular/core';
import { Industry } from 'src/app/interfaces/industry.interface';

@Component({
  selector: 'app-related-industries',
  templateUrl: './related-industries.component.html',
  styleUrls: ['./related-industries.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class RelatedIndustriesComponent implements OnInit {
  @Input() industry: Industry;
  constructor() { }

  ngOnInit(): void {
  }

}
