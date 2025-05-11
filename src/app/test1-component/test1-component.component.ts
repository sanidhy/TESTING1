// import { Component, OnInit } from '@angular/core';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-test1-component',
  templateUrl: './test1-component.component.html',
  styleUrls: ['./test1-component.component.css']
})
export class Test1ComponentComponent {
 @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  @ViewChild('menuToggle', { static: true }) menuToggle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleSearch() {
    const navEl = this.nav.nativeElement;
    const searchEl = this.searchInput.nativeElement;

    if (navEl.classList.contains('search')) {
      this.renderer.removeClass(navEl, 'search');
      this.renderer.addClass(navEl, 'no-search');
      this.renderer.removeClass(searchEl, 'search-active');
    } else {
      this.renderer.addClass(navEl, 'search');
      this.renderer.removeClass(navEl, 'no-search');
      this.renderer.addClass(searchEl, 'search-active');
    }
  }

 

}