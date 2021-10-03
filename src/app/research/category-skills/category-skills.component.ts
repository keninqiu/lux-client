import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Skill } from 'src/app/interfaces/skill.interface';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';
import { SkillService } from 'src/app/services/skill.service';
import { Category } from 'src/app/interfaces/category.interface';
@Component({
  selector: 'app-category-skills',
  templateUrl: './category-skills.component.html',
  styleUrls: ['./category-skills.component.scss']
})
export class CategorySkillsComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  skills: Skill[];
  constructor(
    private route: ActivatedRoute, 
    private skillServ: SkillService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'Skill', this.categorySlug).subscribe(
        (category: Category) => {
          this.categoryName = category.namet ? category.namet.zh : category.name;
          if(category.country) {
            this.country = category.country;
          }
        }
      );

      this.skillServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (skills: Skill[]) => {
          this.skills = skills;
        }
      );

    });
  }

}
