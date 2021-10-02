import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.scss']
})
export class AdvComponent implements OnInit {
  @Input() adv: any;
  constructor() { }

  ngOnInit(): void {
  }

}
