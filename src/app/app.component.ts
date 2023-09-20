import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'countries';
  theme: string = localStorage.getItem('theme') || 'light';
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2
  ) {}
  ngOnInit(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      this.setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      this.setTheme('light');
    }
  }
  private setTheme(theme: string) {
    theme === 'dark'
      ? this.renderer.addClass(this.document.body, 'dark')
      : this.renderer.removeClass(this.document.body, 'dark');
  }
}
