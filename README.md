# Pinakes Zeografikis - Galerie d'Art Impressionniste

Site web minimaliste et responsive pour la galerie d'art d'Ekaterini Gouva.

## 🎨 Fonctionnalités

- **Design minimaliste** avec fond d'écran fixe
- **Responsive** (desktop, tablette, mobile)
- **Multilingue** (grec et anglais)
- **Galerie interactive** avec modales et zoom
- **Lazy loading** pour optimiser les performances
- **Accessibilité** améliorée (ARIA, navigation clavier)

## 📁 Structure du Projet

```
/
├── index.html          # Page d'accueil
├── galerie.html        # Page galerie
├── css/
│   └── style.css       # Styles principaux
├── js/
│   └── script.js       # Logique JavaScript
├── images/             # Images du site
│   ├── fond_ecran_crop.jpg
│   ├── DEL_1694.JPG
│   ├── DEL_1697.JPG
│   └── ... (17 images total)
└── fonts/              # Polices (optionnel)
```

## 🚀 Installation

1. Placez tous les fichiers dans votre serveur web
2. Ajoutez vos images dans le dossier `images/`
3. Le site est prêt à être utilisé !

## 📱 Responsive Design

- **Desktop** : Images à 75% de largeur
- **Tablette** : Images à 90% de largeur
- **Mobile** : Images en pleine largeur (100%)

## 🌐 Gestion Multilingue

Le site supporte le grec et l'anglais avec :
- Sélecteur de langue en haut à droite
- Sauvegarde de la préférence dans localStorage
- Contenu traduit dynamiquement

## 🖼️ Images Requises

Le site attend 17 images nommées :
- DEL_1694.JPG à DEL_1712.JPG
- fond_ecran_crop.jpg (arrière-plan)

## 🎯 Optimisations

- **Lazy loading** pour les images
- **Préchargement** des images de la galerie
- **Animations CSS** fluides
- **Gestion des erreurs** d'images manquantes

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `style.css` :
```css
:root {
  --primary-color: #3A3A3A;
  --background-beige: rgba(245, 245, 220, 0.8);
}
```

### Ajouter des images
1. Ajoutez l'image dans le dossier `images/`
2. Créez un élément `.artwork` dans `galerie.html`
3. Ajoutez la modale correspondante
4. Mettez à jour le JavaScript si nécessaire

## 📋 TODO pour la production

- [ ] Compresser les images (WebP recommandé)
- [ ] Ajouter les vraies images (fond_ecran_crop.jpg + 17 tableaux)
- [ ] Tester sur différents navigateurs
- [ ] Optimiser le SEO (meta tags, sitemap)
- [ ] Configurer le serveur web (.htaccess si Apache)

## 🎨 Polices Utilisées

- **Titre** : Dancing Script (alternative à Bergstena Script)
- **Texte** : Open Sans

## 📋 OpenSpec Change Management

This project uses **OpenSpec** for structured change management. All changes follow an artifact-driven workflow:

### Workflow
1. **Proposal** (`proposal.md`) - Why this change is needed
2. **Design** (`design.md`) - How to implement it  
3. **Specs** (`specs/<capability>/spec.md`) - What requirements must be met
4. **Tasks** (`tasks.md`) - Implementation checklist

### Commands
```bash
# Start a new change
openspec new change <name>

# Check status
openspec status --change <name>

# Get instructions for an artifact
openspec instructions <artifact> --change <name>

# Validate a change
openspec verify --change <name>

# Archive completed change
openspec archive --change <name>
```

### Project Specs
Project capabilities are documented in `openspec/specs/`:
- `change-management/` - OpenSpec workflow requirements
- `project-documentation/` - Capability specification format

## 📞 Support

Pour toute question ou modification, consultez la documentation du code ou contactez le développeur.
