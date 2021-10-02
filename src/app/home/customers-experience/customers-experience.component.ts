import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-experience',
  templateUrl: './customers-experience.component.html',
  styleUrls: ['./customers-experience.component.scss']
})
export class CustomersExperienceComponent implements OnInit {
  @Input() experience: any;
  constructor() { }

  ngOnInit(): void {
  }

}
