import { DOCUMENT } from '@angular/common';
import { Component,Inject,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  theme = localStorage.getItem('theme')

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2
  ) {}

  toggleTheme(){
    this.theme === 'dark'
      ? this.renderer.addClass(this.document.body, 'dark')
      : this.renderer.removeClass(this.document.body, 'dark');
  }
}
