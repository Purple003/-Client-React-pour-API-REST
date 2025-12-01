# Application de Gestion de Comptes Bancaires

## Description

Application React pour gérer des comptes bancaires. Permet d'ajouter et d'afficher des comptes de type Courant ou Epargne.

## Technologies Utilisées

- React 19.2.0
- Bootstrap 5.3.8
- Axios 1.13.2

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
```

L'application sera accessible sur http://localhost:3000

## Fonctionnalités

- Affichage de la liste des comptes
- Ajout de nouveaux comptes via un formulaire
- Validation des champs du formulaire
- Deux types de comptes disponibles : Courant et Epargne

## Structure du Projet

```
src/
├── components/
│   ├── CompteForm.js    # Formulaire d'ajout de compte
│   └── CompteList.js    # Liste des comptes
├── config.js            # Configuration de l'API
├── App.js               # Composant principal
└── index.js             # Point d'entrée
```

## Utilisation

1. Remplir le formulaire avec les informations du compte
2. Cliquer sur le bouton Ajouter
3. Le compte apparait dans la liste

## Démonstration

![Capture d'écran de l'application](demo.png)

## Notes

L'application utilise actuellement un état local pour stocker les comptes. Les données sont perdues lors du rechargement de la page.
