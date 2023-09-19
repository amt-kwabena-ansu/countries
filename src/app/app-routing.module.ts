import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryPageComponent } from './country-page/country-page.component';

const routes: Routes = [
  {
    path: '',
    component: AllCountriesComponent,
    title: 'Rest countries',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
