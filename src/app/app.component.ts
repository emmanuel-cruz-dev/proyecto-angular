import { NgClass } from '@angular/common';
import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  menuOption: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }

  ngAfterViewInit() {
    const headerEls = this.el.nativeElement.querySelectorAll(
      '.collapse .nav-item'
    );
    const menuBackdrop = this.el.nativeElement.querySelector('#menu-backdrop');

    headerEls.forEach((el: HTMLElement) => {
      this.renderer.listen(el, 'mouseenter', () => {
        const { left, top, width, height } = el.getBoundingClientRect();
        menuBackdrop.style.setProperty('--backdrop-top', `${top}px`);
        menuBackdrop.style.setProperty('--backdrop-left', `${left}px`);
        menuBackdrop.style.setProperty('--backdrop-width', `${width}px`);
        menuBackdrop.style.setProperty('--backdrop-height', `${height}px`);
      });
    });
  }
}
