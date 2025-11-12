import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @ViewChild('productsSection', { static: true }) productsSection!: ElementRef;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animation des cartes de produits
    gsap.fromTo('.product-card', 
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.product-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
}
