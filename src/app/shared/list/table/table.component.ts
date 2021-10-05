import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.scss', 
  ]
})
export class ListTableComponent{
  
    @Input() title: string;
    @Input() description: string;
    @Input() tableTitle: string;
    @Input() items: any;
    constructor(private utilServ: UtilService) {}    
    getUrl(url: string) {
      return this.utilServ.getUrl(url);
    }
}