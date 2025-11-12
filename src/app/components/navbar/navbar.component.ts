import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    this.isScrolled = scrollTop > 50;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  ngOnInit() {
    this.initializeAnimations();
  }

  ngOnDestroy() {
    // Nettoyage des animations si nécessaire
  }

  private initializeAnimations() {
    // Animation d'entrée du logo
    gsap.fromTo('.logo-animation',
      {
        opacity: 0,
        y: -50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.2
      }
    );

    // Animation des éléments de navigation
    gsap.fromTo('.nav-item',
      {
        opacity: 0,
        y: -30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        delay: 0.5
      }
    );

    // Animation des boutons d'action
    gsap.fromTo('.action-button',
      {
        opacity: 0,
        scale: 0.5,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        delay: 0.8
      }
    );
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      this.animateMobileMenuIn();
    } else {
      this.animateMobileMenuOut();
    }
  }

  private animateMobileMenuIn() {
    gsap.fromTo('.mobile-nav-item',
      {
        opacity: 0,
        x: -50,
        scale: 0.8
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.1
      }
    );
  }

  private animateMobileMenuOut() {
    gsap.to('.mobile-nav-item', {
      opacity: 0,
      x: -50,
      scale: 0.8,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in'
    });
  }
}
