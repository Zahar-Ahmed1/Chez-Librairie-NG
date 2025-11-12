import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  bookCount: number;
  rating: number;
  genres: string[];
  color: string;
  isPopular?: boolean;
}

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit {
  // Data
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  featuredCategories: Category[] = [];
  
  // Filter states
  genres: string[] = [
    'Fiction', 'Non-fiction', 'Romance', 'Mystère', 'Science-fiction', 
    'Fantasy', 'Biographie', 'Histoire', 'Philosophie', 'Art', 
    'Cuisine', 'Voyage', 'Développement personnel', 'Business', 'Technologie'
  ];
  selectedGenres: string[] = [];
  searchTerm: string = '';
  sortBy: string = 'name';
  
  // UI states
  isLoading: boolean = true; // Start with loading true
  showFilters: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
    this.initializeAnimations();
  }

  // Initialize animations
  private initializeAnimations(): void {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    // Observe elements after view init
    setTimeout(() => {
      const elements = document.querySelectorAll('.slide-up, .fade-in');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  // Load categories data
  private loadCategories(): void {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.categories = [
        {
          id: 1,
          name: 'Littérature Classique',
          description: 'Les chefs-d\'œuvre intemporels de la littérature mondiale',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
          bookCount: 342,
          rating: 4.8,
          genres: ['Fiction', 'Classique', 'Histoire'],
          color: 'from-amber-400 to-orange-500',
          isPopular: true
        },
        {
          id: 2,
          name: 'Science-Fiction',
          description: 'Explorez des mondes futurs et des technologies avancées',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          bookCount: 278,
          rating: 4.6,
          genres: ['Science-fiction', 'Fantasy', 'Technologie'],
          color: 'from-blue-500 to-purple-600',
          isPopular: true
        },
        {
          id: 3,
          name: 'Développement Personnel',
          description: 'Livres pour améliorer votre vie et atteindre vos objectifs',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          bookCount: 195,
          rating: 4.4,
          genres: ['Développement personnel', 'Business', 'Psychologie'],
          color: 'from-green-400 to-teal-500'
        },
        {
          id: 4,
          name: 'Cuisine & Gastronomie',
          description: 'Recettes délicieuses et guides culinaires',
          icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
          bookCount: 156,
          rating: 4.7,
          genres: ['Cuisine', 'Art', 'Voyage'],
          color: 'from-red-400 to-pink-500'
        },
        {
          id: 5,
          name: 'Histoire & Géopolitique',
          description: 'Comprenez le monde à travers l\'histoire et l\'actualité',
          icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
          bookCount: 234,
          rating: 4.5,
          genres: ['Histoire', 'Non-fiction', 'Philosophie'],
          color: 'from-indigo-400 to-purple-500'
        },
        {
          id: 6,
          name: 'Romance Contemporaine',
          description: 'Histoires d\'amour modernes et émouvantes',
          icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
          bookCount: 289,
          rating: 4.3,
          genres: ['Romance', 'Fiction', 'Contemporain'],
          color: 'from-pink-400 to-rose-500',
          isPopular: true
        },
        {
          id: 7,
          name: 'Thriller & Suspense',
          description: 'Des récits palpitants qui vous tiendront en haleine',
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
          bookCount: 198,
          rating: 4.6,
          genres: ['Mystère', 'Thriller', 'Fiction'],
          color: 'from-gray-600 to-gray-800'
        },
        {
          id: 8,
          name: 'Art & Design',
          description: 'Explorez le monde de l\'art et du design',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
          bookCount: 167,
          rating: 4.4,
          genres: ['Art', 'Design', 'Créativité'],
          color: 'from-purple-400 to-pink-500'
        },
        {
          id: 9,
          name: 'Voyage & Aventure',
          description: 'Découvrez le monde à travers nos récits de voyage',
          icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
          bookCount: 143,
          rating: 4.5,
          genres: ['Voyage', 'Aventure', 'Nature'],
          color: 'from-teal-400 to-cyan-500'
        },
        {
          id: 10,
          name: 'Business & Entrepreneuriat',
          description: 'Stratégies et conseils pour réussir en affaires',
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
          bookCount: 212,
          rating: 4.4,
          genres: ['Business', 'Développement personnel', 'Finance'],
          color: 'from-emerald-400 to-green-500',
          isPopular: true
        }
      ];
      
      this.filteredCategories = [...this.categories];
      this.featuredCategories = this.categories.filter(cat => cat.isPopular);
      this.isLoading = false;
    }, 800);
  }

  // Filtering and search functionality
  filterCategories(): void {
    let filtered = [...this.categories];

    // Filter by search term
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(category => 
        category.name.toLowerCase().includes(searchLower) ||
        category.description.toLowerCase().includes(searchLower) ||
        category.genres.some(genre => genre.toLowerCase().includes(searchLower))
      );
    }

    // Filter by selected genres
    if (this.selectedGenres.length > 0) {
      filtered = filtered.filter(category => 
        category.genres.some(genre => this.selectedGenres.includes(genre))
      );
    }

    // Apply sorting
    this.sortFilteredCategories(filtered);
    this.filteredCategories = filtered;
  }

  private sortFilteredCategories(categories: Category[]): void {
    switch (this.sortBy) {
      case 'name':
        categories.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'count':
        categories.sort((a, b) => b.bookCount - a.bookCount);
        break;
      case 'popular':
        categories.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  // Genre filtering
  toggleGenre(genre: string): void {
    const index = this.selectedGenres.indexOf(genre);
    if (index > -1) {
      this.selectedGenres.splice(index, 1);
    } else {
      this.selectedGenres.push(genre);
    }
    this.filterCategories();
  }

  isGenreSelected(genre: string): boolean {
    return this.selectedGenres.includes(genre);
  }

  // Search functionality
  clearSearch(): void {
    this.searchTerm = '';
    this.filterCategories();
  }

  clearAllFilters(): void {
    this.searchTerm = '';
    this.selectedGenres = [];
    this.sortBy = 'name';
    this.filterCategories();
  }

  // Sorting
  sortCategories(): void {
    this.filterCategories();
  }

  // Navigation
  navigateToCategory(category: Category): void {
    // Simulate navigation to category detail page
    console.log(`Navigating to category: ${category.name}`);
    // In a real app, you would use: this.router.navigate(['/categories', category.id]);
    
    // Add visual feedback
    const element = document.querySelector(`[data-category-id="${category.id}"]`);
    if (element) {
      element.classList.add('success-state');
      setTimeout(() => element.classList.remove('success-state'), 500);
    }
  }

  // Scrolling functionality
  scrollToCategories(): void {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToFilters(): void {
    const element = document.getElementById('filters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Utility methods
  getCategoryIcon(category: Category): string {
    return category.icon || 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253';
  }

  getCategoryColor(category: Category): string {
    return category.color || 'from-blue-400 to-purple-500';
  }

  // Error handling
  private handleError(error: any): void {
    console.error('Error in category component:', error);
    this.isLoading = false;
    // Add visual error feedback
    const errorElement = document.querySelector('.categories-container');
    if (errorElement) {
      errorElement.classList.add('error-state');
      setTimeout(() => errorElement.classList.remove('error-state'), 1000);
    }
  }
}
