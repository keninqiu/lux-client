import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() actionText: string;
  @Input() actionLink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
