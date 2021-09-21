import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-category-popular-skills',
  templateUrl: './popular-skills.component.html',
  styleUrls: [
    './popular-skills.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularSkillsComponent implements OnInit {
  @Input() skills: Skill[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getSkillPath(employer) {
    return employer.url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29');
  }
}
