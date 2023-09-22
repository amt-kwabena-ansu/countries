import { Component, OnInit, inject } from '@angular/core';
import { country } from '../api/apiTypes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  countryName!: string;
  route: ActivatedRoute = inject(ActivatedRoute);
  countries: country[] = JSON.parse(
    localStorage.getItem('countries') || '[{}]'
  );
  country!: country[];
  constructor() {
    this.countryName = this.route.snapshot.params['countryName'];
  }

  ngOnInit(): void {
    this.country = this.countries.filter(
      (country) => country.alpha3Code.toLowerCase() === this.countryName.toLowerCase()
    );
  }
}
