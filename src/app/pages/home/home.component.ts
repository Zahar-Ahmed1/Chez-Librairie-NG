import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsComponent } from '../../components/products/products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProductsComponent, CategoriesComponent, TestimonialsComponent, StatsComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
