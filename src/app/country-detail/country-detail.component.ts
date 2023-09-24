import { Component, Input } from '@angular/core';
import { Currency, Language, country } from '../api/apiTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent {
  @Input() country!: country[];

  constructor(private router:Router) {}

  language(languages: Language[]):string {
    return languages.map((lang) => lang.name).join(', ');
  }
  currency(currencies: Currency[]):string {
    return currencies.map((cur) => cur.name).join(', ');
  }
  navigateTo(code:string){
    this.router.navigateByUrl(`/country/${code}`).then(()=>location.reload())
  }
}
