import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    document.body.style.overflow = "auto"
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const navElement = document.querySelector('nav');

    if(navElement){
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > 0) {
        navElement.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      } else {
        navElement.style.boxShadow = 'none';
      }
    }
    
  }

  toggleMenu() {
    this.hide = !this.hide;
    if (this.hide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }


}
