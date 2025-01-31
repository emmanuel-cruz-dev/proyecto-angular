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
      this.renderer.listen(el, 'click', () => {
        this.renderer.setStyle(
          menuBackdrop,
          '--backdrop-top',
          `${el.offsetTop}px`
        );
        this.renderer.setStyle(
          menuBackdrop,
          '--backdrop-left',
          `${el.offsetLeft}px`
        );
        this.renderer.setStyle(
          menuBackdrop,
          '--backdrop-width',
          `${el.offsetWidth}px`
        );
        this.renderer.setStyle(
          menuBackdrop,
          '--backdrop-height',
          `${el.offsetHeight}px`
        );
      });
    });
  }
}
