import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { country } from '../api/apiTypes';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent {
  countries= new Observable<country[]>();
  constructor(private readonly allCountries:ApiService){}

  ngOnInit():void{
    this.countries= this.allCountries.getAllCountries()
  }
}
