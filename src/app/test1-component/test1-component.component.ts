// import { Component, OnInit } from '@angular/core';
import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-test1-component',
  templateUrl: './test1-component.component.html',
  styleUrls: ['./test1-component.component.css']
})
export class Test1ComponentComponent implements AfterViewInit {
  @ViewChild('slide', { static: true }) slideRef!: ElementRef;
  @ViewChild('nextBtn', { static: true }) nextBtnRef!: ElementRef;
  @ViewChild('prevBtn', { static: true }) prevBtnRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.nextBtnRef.nativeElement, 'click', () => {
      const items = this.slideRef.nativeElement.querySelectorAll('.item');
      if (items.length) {
        this.slideRef.nativeElement.appendChild(items[0]);
      }
    });

    this.renderer.listen(this.prevBtnRef.nativeElement, 'click', () => {
      const items = this.slideRef.nativeElement.querySelectorAll('.item');
      if (items.length) {
        this.slideRef.nativeElement.prepend(items[items.length - 1]);
      }
    });
  }
}