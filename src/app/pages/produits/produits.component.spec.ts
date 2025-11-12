import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProduitsComponent } from './produits.component';
import { ProductService, Product } from '../../services/product.service';

class MockProductService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Produit test',
      category: 'Tests',
      description: 'Description test',
      price: 10,
      rating: 4.5,
      reviews: 10,
      stock: 5
    }
  ];

  getProducts() {
    return of(this.products);
  }

  getCategories() {
    return ['Tests'];
  }
}

describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsComponent, RouterTestingModule],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
