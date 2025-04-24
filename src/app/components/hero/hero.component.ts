import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { gsap } from 'gsap';
// import { CSSPlugin } from "gsap/CSSPlugin";


@Component({
  selector: 'app-hero',
  imports: [NavbarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  @ViewChild('mainTitle', { static: true }) mainTitle!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.animateTitle()
  }
  animateTitle() {
    // Set initial position (off-screen to the left)
    gsap.set(this.mainTitle.nativeElement, { x: -1000 });

    // Animate to final position
    gsap.to(this.mainTitle.nativeElement, {
      x: 0,
      duration: 2.5, // Animation duration in seconds
      ease: "power3.out", // Smooth easing function
      delay: 0.3 // Optional delay before animation starts
    });
  }
}


