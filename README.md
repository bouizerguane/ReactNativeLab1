# Lab1 - React Native avec Composants Réutilisables

## Description
Application React Native (Expo) démontrant l'utilisation de composants réutilisables avec une interface "Pixel Perfect".

## Structure du Projet

```
Lab1/
├── App.js                      # Point d'entrée de l'application
├── components/
│   ├── AppHeader.js           # Composant Header (fond jaune)
│   ├── AppFooter.js           # Composant Footer (fond jaune, année dynamique)
│   └── MainCard.js            # Composant Card central (fond blanc, ombre)
├── package.json
├── app.json
└── babel.config.js
```

## Composants

### AppHeader.js
- **Couleur de fond** : Jaune (#F4CE14)
- **Contenu** : 
  - Titre principal en majuscules : "MON APPLICATION REACT NATIVE"
  - Sous-titre en italique : "Premier composant réutilisable"
- **Style** : Texte centré, gras pour le titre

### AppFooter.js
- **Couleur de fond** : Jaune (#F4CE14)
- **Contenu** : Texte dynamique avec nom de l'app et année courante
- **Props** : `appName` (par défaut: "MonApp")
- **Style** : Texte centré et discret

### MainCard.js
- **Style** : 
  - Fond blanc
  - Coins arrondis (borderRadius: 12)
  - Ombre légère (shadowOpacity: 0.25)
  - Padding interne (24px)
- **Contenu** : Titre "Bienvenue !" et texte explicatif

## Layout Principal (App.js)

### Structure
- **View racine** : `flex: 1` avec fond vert foncé (#495E57)
- **SafeAreaView** : Gère les zones sécurisées (encoches/notches)
- **Header** : Positionné en haut
- **Content** : Zone centrale avec `flex: 1` pour centrage parfait
- **Footer** : Positionné en bas

### Explication du `flex: 1`

La propriété `flex: 1` est cruciale pour le positionnement du footer en bas :

1. **Container principal** : `flex: 1` permet au container de prendre toute la hauteur disponible de l'écran
2. **Zone de contenu** : `flex: 1` sur la zone centrale lui permet de s'étendre et de prendre tout l'espace disponible entre le header et le footer
3. **Résultat** : Le footer est automatiquement "poussé" vers le bas car la zone de contenu occupe tout l'espace restant

```javascript
<View style={styles.container}>  {/* flex: 1 - prend toute la hauteur */}
  <AppHeader />                   {/* Hauteur fixe */}
  <View style={styles.content}>   {/* flex: 1 - s'étend pour remplir */}
    <MainCard />
  </View>
  <AppFooter />                   {/* Hauteur fixe - poussé en bas */}
</View>
```

## Installation et Exécution

### Prérequis
- Node.js installé
- Expo CLI installé globalement : `npm install -g expo-cli`

### Installation
```bash
cd "d:\TPs Master\React Native\Lab1"
npm install
```

### Lancement
```bash
# Démarrer le serveur de développement
npm start

# Ou directement sur Android
npm run android

# Ou directement sur iOS
npm run ios
```

## Gestion des Zones Sécurisées

L'application utilise `react-native-safe-area-context` pour gérer automatiquement :
- Les encoches (notches) des iPhone modernes
- Les barres de navigation Android
- Les zones non sécurisées sur différents appareils

Le composant `SafeAreaView` avec `edges={['top', 'bottom']}` assure que le contenu ne sera jamais masqué par les éléments système.

## Technologies Utilisées
- **React Native** : Framework mobile
- **Expo** : Plateforme de développement
- **react-native-safe-area-context** : Gestion des zones sécurisées
