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
  filterValue=''
  constructor(private readonly allCountries: ApiService) {}

  searchHandler(data:string){
    this.searchValue=data
    this.filter()
  }
  
  filterByRegionHandler(data:string){
    this.filterValue=data
    this.filter()
  }

  private filter() {
    this.renderedCountries = this.output.filter((country) =>
      country.name.toLowerCase().includes(this.searchValue.toLowerCase())
    ).filter((country)=>country.region.toLowerCase().includes(this.filterValue.toLowerCase()));
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
