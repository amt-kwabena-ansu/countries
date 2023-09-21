import { Component, Output } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { country } from '../api/apiTypes';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  template:`
  <app-child (search)="filter($event)"></app-child>
`,
})
export class AllCountriesComponent {
  output!: country[];
  countries = new Observable<country[]>();
  renderedCountries!: country[];

  constructor(private readonly allCountries: ApiService) {}

  filter(search:Event) {
    console.log(search)
    this.renderedCountries = this.renderedCountries.filter((coutry) =>
      coutry.name.toLowerCase().includes('b')
    );
  }

  ngOnInit(): void {
    this.countries = this.allCountries.getAllCountries();
    this.countries.subscribe(
      (output) => {
        this.output = output;
        this.renderedCountries = output;
        localStorage.setItem('countries', JSON.stringify(output));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
