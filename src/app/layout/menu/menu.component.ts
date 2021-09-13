import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showMobileMenu:boolean;
  constructor() { }

  ngOnInit(): void {
    this.showMobileMenu = false;
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
