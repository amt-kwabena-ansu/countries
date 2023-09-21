import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() search = new EventEmitter<string>();
  searchValue:string=''
  constructor() {}
  find(event:Event){
    console.log(event)
    this.search.emit('a')
  }
}
