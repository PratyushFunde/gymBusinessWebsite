import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-popular-exercises',
  imports: [],
  templateUrl: './popular-exercises.component.html',
  styleUrl: './popular-exercises.component.scss'
})
export class PopularExercisesComponent {

  @ViewChildren('grid-item') gridItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for Angular to finish rendering
    setTimeout(() => {
      this.animateGridItems();
    });
  }

  animateGridItems() {
    // Convert QueryList to array of native elements
    const items = this.gridItems.map(item => item.nativeElement);

    // Safety check
    if (!items.length) {
      console.warn('No grid items found!');
      return;
    }

    // Set initial state
    gsap.set(items, {
      opacity: 0,
      y: 50,
      willChange: 'transform, opacity'
    });

    // Create staggered animation with ScrollTrigger
    items.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: index * 0.1
      });
    });
  }



}
