# TravelLog

## Aproche

### Problèmes, obstacles, solutions
Le premier problème a été de trouver une solution pour passer un objet à un autre composant qui n'est pas un composant enfant. 
Pour cela, découverte de BehaviorSubject et Subject de rxjs permettant de partager un objet dans un shareService, pour que tous les composants qui subscribe puissent détecter la modification, par exemple du Trip sélectionné. 




### Présentation de l'application
#### Partie de gauche 
Le panneau de gauche affiche la liste des voyages de l'utilisateur. 
Deux boutons "Mes voyages" et "Tous" affichent soit tous les voyages soient uniquement ceux créés par l'utilisateur. 
En bas de la liste des voyages, un menu permettant de d'ajouter un nouveau voyage. 
Lors de la sélection d'un voyage, la carte se positionne sur le premier lieu du voyage. 


Une fois le voyage sélectionné, la liste des places apparaît. 
Celle-ci peut être filtrée. Le filtre s'applique au fur et à mesure que l'on tape dans le champs de filtre. 

En bas de la liste, possibilité d'ajouter une nouvelle place au voyage. 


#### Partie de droite 

Un bouton "plein écran" permet de cacher la zone de gauche pour voir la carte sur toute la largeur de l'écran. 

En dessous, une zone de recherche qui s'affiche lorsqu'on clique dessus. 
Celle-ci permet de rechercher un voyage par son nom exacte, ou de saisir un texte qui sera recherché dans les titres et les descriptions (par ex: "road trip").  

Lors de la première connexion, aucun voyage n'est sélectionné, la carte se positionne sur la zone géolocalisée de l'utilisateur. 

Une fois un voyage sélectionné, le détail du voyage est visible sous la carte. Le voyage peut être modifié ou supprimé. 

En dessous, le détail du lieu sélectionné. Qu'il soit sélectionné dans la liste à gauche ou en cliquant sur le marker sur la carte. 

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

Utilisation correcte de GitHub. N'étant pas (pas encore!) habitué à l'outil, je suis resté sur la branche Master. Je tente à présent, pour ma culture générale, la rédaction du README dans une nouvelle branche pour la fusionner ensuite. Il y a par contre la clé google utilisée pour l'api de maps qui est visible et ne devrait pas l'être. 

Manque des feed-back de confirmation de suppression/création des objets. Peut-être pas un message en vert/rouge lorsque success ou fail d'une action. 

Quelques bug -> par ex: lorsqu'on crée un voyage, le formulaire se vide mais le panel reste ouvert avec le formulaire de création visible .


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
