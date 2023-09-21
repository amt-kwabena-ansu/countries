import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() searcher = new EventEmitter<string>();
  @Output() filterByRegion = new EventEmitter<string>();
  searchValue:string=''
  filterValue:string=''
  constructor() {}
  search(){
    this.searcher.emit(this.searchValue)
  }
  filter(){
    this.filterByRegion.emit(this.filterValue)
    console.log(this.filterValue)
  }
}
