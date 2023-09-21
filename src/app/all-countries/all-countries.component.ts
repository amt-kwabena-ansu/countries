import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { country } from '../api/apiTypes';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  
})
export class AllCountriesComponent {
  output!: country[];
  countries = new Observable<country[]>();
  renderedCountries!: country[];
  searchValue=''
  constructor(private readonly allCountries: ApiService) {}

  searchHandler(data:string){
    this.searchValue=data
    console.log('data')
    this.filter(data)
  }

  private filter(search:string) {
    console.log(search)
    this.renderedCountries = this.output.filter((coutry) =>
      coutry.name.toLowerCase().includes(search.toLowerCase())
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
