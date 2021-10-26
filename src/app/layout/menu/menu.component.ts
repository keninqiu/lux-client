import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showMobileMenu:boolean;
  showMobileMenuNew:boolean;
  activeTab: string;
  constructor() { }

  ngOnInit(): void {
    this.activeTab = '';
    this.showMobileMenu = false;
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleMenuNew() {
    this.showMobileMenuNew = !this.showMobileMenuNew;
  }
  
  toggleActiveTab(tabName: string) {
    if(!this.activeTab) {
      this.activeTab = tabName;
    } else {
      this.activeTab = '';
    }
  }
}
