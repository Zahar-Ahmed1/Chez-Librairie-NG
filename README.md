# ChezLibrairie - Site de Fournitures Scolaires et Bureautiques

Une page d'accueil moderne et fluide pour un site de librairie spécialisé dans les fournitures scolaires, bureautiques et toners.

## 🚀 Technologies Utilisées

- **Angular 18** - Framework frontend
- **TailwindCSS** - Framework CSS utilitaire
- **GSAP** - Bibliothèque d'animations (ScrollTrigger)
- **TypeScript** - Langage de programmation

## 🎨 Design

### Palette de Couleurs
- **Bleu principal** : #2563eb
- **Vert secondaire** : #84cc16
- **Gris clair** : #f9fafb
- **Texte** : #1f2937
- **Accent jaune** : #facc15

### Police
- **Poppins** - Police moderne et arrondie

## 🧩 Structure

### Composants
- **Navbar** - Navigation fixe avec logo, menu et panier
- **Hero** - Section d'accueil avec titre principal et boutons d'action
- **Categories** - 3 cartes de catégories avec animations hover
- **Products** - Grille de 6 produits phares
- **Footer** - Informations de contact et liens

### Animations GSAP
- **Hero** : Fade-in + slide depuis le bas
- **Cartes catégories** : Effet hover (zoom et ombre)
- **Produits** : Fade + scale-in au scroll
- **Navbar** : Changement de fond au scroll

## 🚀 Installation et Lancement

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd chez-librairie
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:4200
   ```

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Mobile** (< 768px)
- **Tablette** (768px - 1024px)
- **Desktop** (> 1024px)

## 🎯 Fonctionnalités

- ✅ Design moderne et fluide
- ✅ Animations GSAP avec ScrollTrigger
- ✅ Navigation responsive
- ✅ Cartes de catégories interactives
- ✅ Grille de produits animée
- ✅ Footer informatif
- ✅ Palette de couleurs cohérente
- ✅ Typographie optimisée

## 🔧 Scripts Disponibles
- `Docker` - Lance le serveur de développement  
"
cd /chezlibrairie-main
docker build -t chezlibrairie .
docker run --rm -p 8080:80 chezlibrairie
"
- `npm start` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run test` - Lance les tests unitaires
- `npm run lint` - Vérifie le code avec ESLint

## 📝 Notes

- Pas de backend implémenté
- Pas de panier dynamique (interface uniquement)
- Animations optimisées pour les performances
- Code modulaire et maintenable

## 🎨 Personnalisation

Pour modifier les couleurs, éditez le fichier `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Bleu principal
      secondary: '#84cc16',  // Vert secondaire
      light: '#f9fafb',      // Gris clair
      text: '#1f2937',       // Texte
      accent: '#facc15',     // Accent jaune
    }
  }
}
```

---

Développé avec ❤️ pour ChezLibrairie