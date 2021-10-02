import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-skills-by-category',
  templateUrl: './browse-skills-by-category.component.html',
  styleUrls: [
    './browse-skills-by-category.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class BrowseSkillsByCategoryComponent implements OnInit {

  @Input() categories: Category[];
  constructor() { }

  ngOnInit(): void {

  }
}
