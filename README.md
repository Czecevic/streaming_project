# 🎬 Streaming Project (Movie Admin Dashboard)

A modern, responsive web application built with **React**, **TypeScript**, and **Vite** (powered by **Bun**). This project features a complete movie management dashboard (CRUD) with persistent storage and dynamic filtering.

---

## Version Française

### Fonctionnalités

- **Tableau de Bord Admin (CRUD Complet) :**
  - **Ajout :** Formulaire de création de film avec validation des types.
  - **Modification :** Édition en ligne (_inline editing_) cellule par cellule grâce à un composant d'input modulaire et dynamique.
  - **Suppression :** Retrait instantané d'un film du catalogue.
- **Persistance des Données :** Synchronisation automatique de l'état de l'application avec le `localStorage` du navigateur.
- **Recherche & Filtrage :** Barre de recherche dynamique (`SearchBar`) et composants de filtres pour trier le catalogue en temps réel.
- **Interface Fluide :** Design sombre et moderne codé avec **Tailwind CSS**.

### Technologies Utilisées

- **Frontend :** React 18, TypeScript, Tailwind CSS
- **Outils de Build :** Vite, Bun (Gestionnaire de paquets & Runtime)
- **Design / Maquette :** Excalidraw (`maquette/streaming.excalidraw`)

### 📦 Installation et Lancement

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/Czecevic/streaming_project.git](https://github.com/Czecevic/streaming_project.git)
   cd streaming_project
   ```

````

2. **Installer les dépendances (avec Bun) :**
```bash
bun install

````

3. **Lancer le serveur de développement :**

```bash
bun dev

```

L'application sera disponible sur `http://localhost:5173`.

---

## 🇬🇧 English Version

### 🚀 Features

- **Admin Dashboard (Full CRUD):**
- **Create:** Movie creation form with strict type safety.
- **Read:** Clean grid layout (`MovieCard`) and analytical tabular view.
- **Update:** Inline cell-by-cell editing utilizing a reusable, dynamic input component.
- **Delete:** Instant removal of movies from the active catalog.

- **Data Persistence:** Seamless synchronization between the React application state and the browser's `localStorage`.
- **Search & Filtering:** Real-time query filtering (`SearchBar`) and structured element selection.
- **Sleek UI:** Modern dark-themed user interface styled with **Tailwind CSS**.

### 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tools:** Vite, Bun (Package manager & Runtime)
- **Design:** Excalidraw mockup included (`maquette/streaming.excalidraw`)

### 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone [https://github.com/Czecevic/streaming_project.git](https://github.com/Czecevic/streaming_project.git)
cd streaming_project

```

2. **Install dependencies (using Bun):**

```bash
bun install

```

3. **Start the development server:**

```bash
bun dev

```

The app will be up and running at `http://localhost:5173`.
