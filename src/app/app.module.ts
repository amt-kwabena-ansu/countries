import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryPageComponent } from './country-page/country-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCountriesComponent,
    CountryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
