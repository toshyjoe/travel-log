# TravelLog

## Aproche

### Problèmes, obstacles, solutions
Le premier problème a été de trouver une solution pour passer un objet à un autre composant qui n'est pas un composant enfant. 
Pour cela, découverte de BehaviorSubject et Subject de rxjs permettant de partager un objet dans un shareService, pour que tous les composants qui subscribe puissent détecter la modification, par exemple du Trip sélectionné. 



### Présentation de l'application



### Choix de développement
#### Intérêt pour les outils Google
Connaissant déjà bootstrap mais n'ayant aucune notion de Material, le projet a été une bonne occasion de s'y plonger. 
J'ai voulu tester (tant bien que mal) de reprendre la structure d'une application Google (style gMail)avec  une colonne sur la gauche de l'écran qui propose les Trips de l'utilisateur (comme gMail propose les dossiers/label) et avoir le détail du trip sélectionné sur la grande partie droite de l'écran (map + détail du trip + détail des lieux). 
https://material.angular.io/

Utilisant Google maps fréquemment comme utilisateur mais jamais eu l'occasion dans un projet de développement, c'était également une bonne occasion de voir comment Google propose ses API. 
Après quelques bonnes heures, la carte affiche bien les markers des lieux du Trip sélectionné. 

### Amélioration possibles
Meilleures gestion des erreurs. 
Chargement des images des Places par upload plutôt que par saisie de l'url de l'image. 
Utilisation correcte de GitHub. N'étant pas (pas encore!) habitué à l'outil, je suis resté sur la branche Master. Je tente à présent, pour ma culture générale, la rédaction du README dans une nouvelle branche pour la fusionner ensuite. 


# TravelLog - more informations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
