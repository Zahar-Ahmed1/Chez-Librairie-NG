import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/produits/produits.component').then(m => m.ProduitsComponent)
  },
  /*{
    path: 'products/:id',
    loadComponent: () => import('./pages/produit/produit.component').then(m => m.ProduitComponent)
  },
 
 {
    path: 'categories',
    loadComponent: () => import('./pages/categorie/categorie.component').then(m => m.CategorieComponent)
  },
  
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }
  */
];
