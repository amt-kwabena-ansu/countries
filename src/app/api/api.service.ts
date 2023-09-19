import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://restcountries.com/v2';
  constructor(private readonly http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
