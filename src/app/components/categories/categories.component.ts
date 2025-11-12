import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  @ViewChild('categoriesSection', { static: true }) categoriesSection!: ElementRef;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animation des cartes de catégories
    gsap.fromTo('.category-card', 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.category-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
}
