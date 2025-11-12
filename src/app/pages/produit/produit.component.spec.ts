import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProduitComponent } from './produit.component';
import { ProductService, Product } from '../../services/product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
}

class MockLocation {
  back = jasmine.createSpy('back');
}

describe('ProduitComponent', () => {
  let component: ProduitComponent;
  let fixture: ComponentFixture<ProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitComponent],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: Location, useClass: MockLocation },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '1' }) } }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
