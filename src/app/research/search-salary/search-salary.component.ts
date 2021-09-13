import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-salary',
  templateUrl: './search-salary.component.html',
  styleUrls: [
    './search-salary.component.scss', 
    '../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../assets/css/research/d0672ccc0254cae98d85.css'
  ]
})
export class SearchSalaryComponent implements OnInit {
  isOpen: boolean;
  @Input() title: string;
  @Input() selectedCategory: string;
  @Input() placeholder: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isOpen = false;
    
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    this.router.navigate(['/salary']);
  }
}
