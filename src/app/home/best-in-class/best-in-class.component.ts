import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-in-class',
  templateUrl: './best-in-class.component.html',
  styleUrls: ['./best-in-class.component.scss']
})
export class BestInClassComponent implements OnInit {
  @Input() best: any;
  constructor() { }

  ngOnInit(): void {
  }

}
