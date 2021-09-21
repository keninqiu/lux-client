import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification.interface';

@Component({
  selector: 'app-salary-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  @Input() certification: Certification;
  constructor() { }

  ngOnInit(): void {
    console.log('certification here=', this.certification);
  }

}
