import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  product?: Product;
  relatedProducts: Product[] = [];
  loading = true;
  errorMessage = '';
  readonly stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = Number(idParam);

    if (!idParam || Number.isNaN(productId)) {
      this.handleError('Produit introuvable.');
      return;
    }

    this.loadProduct(productId);
  }

  goBack(): void {
    this.location.back();
  }

  private loadProduct(productId: number): void {
    this.loading = true;

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.product = products.find((item) => item.id === productId);

        if (!this.product) {
          this.handleError('Produit introuvable ou indisponible.');
          return;
        }

        this.relatedProducts = products
          .filter((item) => item.category === this.product?.category && item.id !== this.product?.id)
          .slice(0, 4);

        this.loading = false;
      },
      error: () => {
        this.handleError('Impossible de charger le produit.');
      }
    });
  }

  get discountPercentage(): number | undefined {
    if (!this.product || !this.product.originalPrice || this.product.originalPrice <= 0) {
      return undefined;
    }

    return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100);
  }

  private handleError(message: string): void {
    this.errorMessage = message;
    this.product = undefined;
    this.relatedProducts = [];
    this.loading = false;
  }
}
