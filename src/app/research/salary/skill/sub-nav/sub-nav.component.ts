import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skill-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class SkillSubNavComponent implements OnInit {
  @Input() skill: Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
