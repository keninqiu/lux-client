import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from 'src/app/services/all.service';

interface Suggestion {
  name: string;
  url: string;
}
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
  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() countryCode: string;
  suggestions: Suggestion[];
  constructor(

    private router: Router,
    private allServ: AllService
  ) { }

  ngOnInit(): void {
    this.isOpen = false;
    this.suggestions = [
      /*
      {
        name: 'haha',
        url: 'hehe'
      }
      */
    ];
  }

  showTypeName() {
    if (this.type == 'School') {
      return '学校';
    } else
    if (this.type == 'Job') {
      return '工作';
    } else
    if (this.type == 'Employer') {
      return '公司';
    } else
    if (this.type == 'School') {
      return '学校';
    } else
    if (this.type == 'Industry') {
      return '行业';
    } else
    if (this.type == 'Skill') {
      return '技能';
    } else
    if (this.type == 'Certification') {
      return '证书';
    }
    return '全部';
  }

  changeType(type: string) {
    this.type = type;
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    this.router.navigate(['/salary']);
  }

  goUrl(url) {
    console.log('url===', url);
    this.router.navigate([url]);
  }

  onSearchChange(text: string) {
    this.allServ.getByName(this.type, this.countryCode, text).subscribe(
      (items: any[]) => {
        if(items && items.length <= 10) {
          this.suggestions = items.map(item => {
            return {
              name: item.name,
              url: item.url
            }
          });
        }
      }
    );
  }
}
