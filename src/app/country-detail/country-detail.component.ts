import { Component, Input } from '@angular/core';
import { Currency, Language, country } from '../api/apiTypes';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent {
  @Input() country!: country[];

  constructor() {}

  language(languages: Language[]) {
    return languages.map((lang) => lang.name).join(', ');
  }
  currency(currencies: Currency[]) {
    return currencies.map((cur) => cur.name).join(', ');
  }
}
