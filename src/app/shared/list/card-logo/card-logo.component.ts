import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-list-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: [
    './card-logo.component.scss', 
  ]
})
export class ListCardLogoComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;

    constructor(private utilServ: UtilService) {}    
    getUrl(url: string) {
      return this.utilServ.getUrl(url);
    }
}