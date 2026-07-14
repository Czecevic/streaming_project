# Plateforme de Vidéo & Dashboard d'Administration (React)

Cette application React répond au besoin d'une plateforme de streaming couplée à un espace d'administration.

Vous pouvez accéder directement à l'application déployée ici : [https://silly-centaur-272a62.netlify.app/](https://silly-centaur-272a62.netlify.app/)

## Installation et Lancement

Avant de lancer le projet, pensez à bien installer Bun via les commandes suivantes si vous ne l'avez pas encore :

- **Sous macOS / Linux :** `curl -fsSL https://bun.sh/install | bash`
- **Sous Windows :** `powershell -c "irm bun.sh/install.ps1 | iex"`

```bash
# Installer les dépendances
bun install

# Lancer le projet en mode développement
bun run dev

# Lancer la suite de tests unitaires (Vitest)
bun run test

```

---

## Choix Techniques & Fonctionnels

Pour cet exercice, je me suis orienté vers les technologies suivantes :

- **React & React-Router-DOM :** Choix indispensable pour gérer proprement la navigation entre la partie publique (Streaming) et la partie demandée (Admin) sans rechargement de page.
- **TailwindCSS :** Utilisé pour concevoir rapidement une interface moderne et responsive. Ce choix m'a permis de me concentrer pleinement sur la mise en place des fonctionnalités logiques et le service sans perdre trop de temps sur le CSS brut.
- **Vitest :** Pour la mise en place de tests unitaires sur notre logique métier.

---

## Les Arbitrages Réalisés

- **Simplicité du State :** Pour cette première version, j'ai arbitré en faveur d'un état local React (`useState`) couplé au `localStorage` pour simuler une base de données de manière simple et transparente pour l'utilisateur, plutôt que de complexifier le projet d'entrée de jeu avec une base de données distante.
- **Priorisation de la logique métier :** J'ai choisi d'isoler la logique pure (tri, création, suppression de films) dans un dossier `utils` (`movie.ts`). Cela a permis de nettoyer mes composants React et de rendre cette logique critique testable de manière autonome via la commande suivante :

```bash
bun run test

```

---

## Difficultés Rencontrées

La mise en place de la partie Administration a été le point le plus challengeant. N'ayant pas d'idées figées au départ sur la manière de la réaliser, j'ai commencé par poser des briques que je maîtrisais déjà, puis j'ai ajouté des détails et des fonctionnalités qui me semblaient essentiels au fur et à mesure.

Le projet a beaucoup évolué de manière dynamique : ma maquette et mon code ont évolué au fil du développement grâce à l'ajout de petites fioritures fonctionnelles et à des refactorisations successives.

---

## Les points à développer davantage & améliorations futures

Si je devais pousser ce projet dans une version ultérieure :

- **Amélioration de la gestion d'état globale :** Mettre en place un `useContext` ou intégrer **React Query** (TanStack Query) afin de gérer proprement la récupération des données, les requêtes asynchrones et le cache.
- **Optimisation et renommage des fonctions :** Poursuivre le travail de refactoring pour rendre le code encore plus lisible et standardiser les noms des fonctions utilitaires.
- **Couverture de tests unitaires :** Suite à l'optimisation des fonctions logiques, rajouter des tests unitaires plus poussés (notamment sur les cas limites) et tester des manipulations précises selon la structure de la BDD reçue.
- **Sécurisation :** Ajouter une authentification pour l'espace d'administration.
