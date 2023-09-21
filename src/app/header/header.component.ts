import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  theme = localStorage.getItem('theme');

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'light');
      this.setTheme('light');
    } else {
      localStorage.setItem('theme', 'light');
      this.setTheme('light');
    }
    console.log(this.theme);
  }

  private setTheme(theme: string) {
    theme === 'dark'
      ? this.renderer.addClass(this.document.body, 'dark')
      : this.renderer.removeClass(this.document.body, 'dark');
    this.theme = theme === 'dark' ? 'dark' : 'light';
  }
  public toggleTheme() {
    this.theme === 'dark' ? this.setTheme('light') : this.setTheme('dark');

    this.theme === 'dark'
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light');
    console.log('Theme change');
  }
}
