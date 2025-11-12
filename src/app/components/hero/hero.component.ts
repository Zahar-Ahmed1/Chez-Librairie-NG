import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  @ViewChild('heroContent', { static: true }) heroContent!: ElementRef;

  ngOnInit() {
    // Animation d'entrée avec GSAP
    gsap.fromTo('.hero-content', 
      { 
        opacity: 0, 
        y: 100 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power3.out' 
      }
    );
  }
}
