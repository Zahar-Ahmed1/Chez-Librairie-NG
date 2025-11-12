import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  searchQuery: string = '';
  sortBy: string = 'name';
  selectedCategory: string = 'all';
  loading: boolean = true;
  currentPage: number = 1;
  readonly productsPerPage: number = 12;

  categories: string[] = [];
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  private allProducts: Product[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  searchProducts(): void {
    this.applyFilters();
  }

  sortProducts(): void {
    this.filteredProducts = this.sortProductList([...this.filteredProducts]);
    this.updateDisplayedProducts();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  addToCart(product: Product): void {
    console.log('Ajouter au panier:', product);
  }

  private loadProducts(): void {
    this.loading = true;

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
        this.categories = this.productService.getCategories(products);
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits :', error);
        this.allProducts = [];
        this.categories = [];
        this.filteredProducts = [];
        this.displayedProducts = [];
        this.loading = false;
      }
    });
  }

  private applyFilters(): void {
    let products = [...this.allProducts];

    if (this.selectedCategory !== 'all') {
      products = products.filter((product) => product.category === this.selectedCategory);
    }

    if (this.searchQuery.trim().length > 0) {
      const query = this.normalizeString(this.searchQuery);
      products = products.filter((product) => {
        const base = `${product.name} ${product.category} ${product.description}`;
        return this.normalizeString(base).includes(query);
      });
    }

    this.filteredProducts = this.sortProductList(products);
    this.currentPage = 1;
    this.updateDisplayedProducts();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.updateDisplayedProducts();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  private updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  private sortProductList(products: Product[]): Product[] {
    switch (this.sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      case 'name':
      default:
        return products.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  private normalizeString(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
