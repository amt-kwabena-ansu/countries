import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() searcher = new EventEmitter<string>();
  searchValue:string=''
  constructor() {}
  find(){
    this.searcher.emit(this.searchValue)
  }
}
