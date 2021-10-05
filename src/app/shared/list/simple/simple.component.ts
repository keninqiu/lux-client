import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-list-simple',
  templateUrl: './simple.component.html',
  styleUrls: [
    './simple.component.scss', 
  ]
})
export class ListSimpleComponent{
    @Input() title: string;
    @Input() items: any;
    constructor(private utilServ: UtilService) {}    
    getUrl(url: string) {
      return this.utilServ.getUrl(url);
    }
}