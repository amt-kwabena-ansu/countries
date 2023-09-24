import { Component, OnInit } from '@angular/core';
import { country } from '../api/apiTypes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  countryCode: string = '';
  countries: country[] = JSON.parse(
    localStorage.getItem('countries') || '[{}]'
  );
  country!: country[];

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.countryCode = params.get('countryCode') || '';
    });
    console.log(this.countryCode);
  }

  ngOnInit(): void {
    this.country = this.countries.filter(
      (country) =>
        country.alpha3Code.toLowerCase() === this.countryCode.toLowerCase()
    );
    console.log(this.country);
  }
}
