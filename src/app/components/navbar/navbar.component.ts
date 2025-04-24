import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.initHoverAnimations()
  }

  initHoverAnimations() {
    this.navItems.forEach(item => {
      const link = item.nativeElement.querySelector('a');
      const underline = item.nativeElement.querySelector('.underline');

      // Initial state
      gsap.set(underline, { scaleX: 0, transformOrigin: 'left center' });

      // Hover animation
      link.addEventListener('mouseenter', () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(link, {
          color: '#3f51b5',
          duration: 0.2
        });
      });

      // Mouse leave animation
      link.addEventListener('mouseleave', () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
        gsap.to(link, {
          color: '#333',
          duration: 0.3
        });
      });
    });
  }


}
