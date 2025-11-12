import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  stock: number;
  badge?: 'promo' | 'best-seller' | 'new';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(this.generateProductCatalog()).pipe(delay(450));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(map((products) => products.find((product) => product.id === id)));
  }

  getCategories(products: Product[]): string[] {
    return Array.from(new Set(products.map((product) => product.category))).sort((a, b) =>
      a.localeCompare(b)
    );
  }

  private generateProductCatalog(): Product[] {
    return [
      {
        id: 1,
        name: 'Cahier 96 pages Premium',
        category: 'Cahiers',
        description: 'Papier 90g ligné, couverture rigide plastifiée, reliure cousue pour une durabilité maximale.',
        price: 3.5,
        originalPrice: 4.2,
        discount: 17,
        rating: 4.8,
        reviews: 241,
        stock: 180,
        badge: 'best-seller'
      },
      {
        id: 2,
        name: 'Stylo bille bleu FlowMax',
        category: 'Stylos',
        description: 'Pointe 0.7mm, encre à séchage rapide anti-bavures. Lot de 3 stylos.',
        price: 2.7,
        originalPrice: 3.3,
        discount: 18,
        rating: 4.6,
        reviews: 189,
        stock: 320,
        badge: 'promo'
      },
      {
        id: 3,
        name: 'Cartable scolaire Explorer',
        category: 'Cartables',
        description: 'Volume 25L, renforts dorsaux ergonomiques, multiples compartiments et housse anti-pluie.',
        price: 58,
        rating: 4.9,
        reviews: 97,
        stock: 45,
        badge: 'best-seller'
      },
      {
        id: 4,
        name: 'Gomme blanche SoftClean',
        category: 'Fournitures',
        description: 'Gomme sans PVC, efface sans laisser de traces ni abîmer le papier.',
        price: 0.95,
        rating: 4.4,
        reviews: 112,
        stock: 410
      },
      {
        id: 5,
        name: 'Feutres de coloriage Artistik 12 couleurs',
        category: 'Papeterie créative',
        description: 'Encre à base d’eau, couleurs vibrantes, pointe fine et résistante idéale pour les détails.',
        price: 9.9,
        rating: 4.7,
        reviews: 158,
        stock: 130,
        badge: 'new'
      },
      {
        id: 6,
        name: 'Agenda scolaire 2025 Inspire',
        category: 'Papeterie créative',
        description: 'Agenda hebdomadaire, couverture souple, stickers organisateurs, pages ressources scolaires.',
        price: 12.5,
        rating: 4.5,
        reviews: 74,
        stock: 96
      },
      {
        id: 7,
        name: 'Calculatrice scientifique ProCalc X200',
        category: 'Technologie',
        description: '280 fonctions, écran haute résolution, mode examen conforme aux normes scolaires.',
        price: 39.9,
        rating: 4.8,
        reviews: 65,
        stock: 58,
        badge: 'new'
      },
      {
        id: 8,
        name: 'Lot de classeurs A4 ColorMix (x4)',
        category: 'Organisation',
        description: 'Classeur 4 anneaux, dos 4cm, carton rigide pelliculé, coloris assortis.',
        price: 14.5,
        rating: 4.3,
        reviews: 52,
        stock: 140
      },
      {
        id: 9,
        name: 'Sacoche ordinateur Campus 15"',
        category: 'Accessoires',
        description: 'Protection rembourrée, sangle ajustable, poches organisatrices pour chargeurs et stylos.',
        price: 32,
        rating: 4.6,
        reviews: 83,
        stock: 72,
        badge: 'promo'
      },
      {
        id: 10,
        name: 'Pack crayons à papier HB Graphite Pro (x12)',
        category: 'Stylos',
        description: 'Bois certifié FSC, mine 2.5mm HB, gomme intégrée, idéal pour le dessin et l’écriture.',
        price: 5.6,
        rating: 4.4,
        reviews: 131,
        stock: 260
      },
      {
        id: 11,
        name: 'Surligneurs PastelGlow (x6)',
        category: 'Fournitures',
        description: 'Couleurs pastel, encre anti-transfert, capuchon clip et grip ergonomique.',
        price: 6.8,
        rating: 4.7,
        reviews: 142,
        stock: 195,
        badge: 'best-seller'
      },
      {
        id: 12,
        name: 'Trousse organisatrice Modulo',
        category: 'Accessoires',
        description: 'Trousse modulable avec séparateurs, poches élastiques et fermeture renforcée.',
        price: 11.9,
        rating: 4.5,
        reviews: 121,
        stock: 160
      },
      {
        id: 13,
        name: 'Papier imprimante recyclé A4 (500 feuilles)',
        category: 'Organisation',
        description: '80g/m², blanc naturel, certifié écologique, compatible laser et jet d’encre.',
        price: 7.5,
        rating: 4.2,
        reviews: 98,
        stock: 210
      },
      {
        id: 14,
        name: 'Cahier de croquis ArtBoard A3',
        category: 'Papeterie créative',
        description: 'Papier 120g blanc naturel, spirales métalliques, 60 pages micro-perforées.',
        price: 8.9,
        rating: 4.6,
        reviews: 54,
        stock: 88
      },
      {
        id: 15,
        name: 'Pack étiquettes autocollantes scolaires (120 unités)',
        category: 'Organisation',
        description: 'Étiquettes résistantes à l’eau, plusieurs formats, parfaites pour marquer les fournitures.',
        price: 4.3,
        rating: 4.4,
        reviews: 77,
        stock: 240
      }
    ];
  }
}

