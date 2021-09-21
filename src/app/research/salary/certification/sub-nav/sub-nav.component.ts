import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification.interface';

@Component({
  selector: 'app-certification-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class CertificationSubNavComponent implements OnInit {
  @Input() certification: Certification;
  constructor() { }

  ngOnInit(): void {
  }

}
