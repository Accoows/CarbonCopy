# 🌐 Carbon Copy — Reproduction d'une page web

## 🎯 Objectif du projet

L'objectif de cet exercice est de reproduire une page web fournie en modèle (template) en utilisant **HTML**, **CSS** et **JavaScript**, en respectant différentes étapes de développement. Le tout en personnalisant un peu le style et les contenus pour en faire une version unique.

> Exercice réalisé à partir du sujet officiel disponible sur :  
👉 [01-edu/public – Carbon Copy](https://github.com/01-edu/public/tree/master/subjects/carbon-copy)

## 📁 Structure du projet

Le projet est découpé en **3 grandes phases** :

### 🧱 Phase 1 — Structure HTML

- Création du fichier `index.html` avec la structure sémantique complète de la page.
- Utilisation des balises `header`, `nav`, `section`, `footer`, etc.
- Liaison avec le fichier CSS existant `styles.css`.
- Mise en place des ancres dans le menu de navigation pour permettre le scroll vers les sections correspondantes.

### 🎨 Phase 2 — Personnalisation CSS

- Personnalisation du thème de couleurs (remplacement du bleu et jaune par deux couleurs personnelles).
- Ajout de **3 cartes** dans la section "Dashboard" avec :
  - Un titre
  - Un sous-titre
  - Un paragraphe
- Style CSS réalisé entièrement à la main pour ces nouvelles cartes.

### ⚙️ Phase 3 — Interactions JavaScript

Ajout de plusieurs interactions dynamiques avec JS :

- 🔁 **Inversion de l'ordre des images** : en cliquant sur la section d’images, la classe `row-reverse` est basculée dynamiquement.
- 📝 **Formulaire de présentation** : dans la section Contact, lorsqu'on clique sur le bouton, le texte saisi dans l’input est affiché dans une phrase personnalisée, et les éléments disparaissent.
- 🪟 **Modal interactif** (optionnel) : clic sur une carte pour ouvrir une fenêtre modale affichant l’article complet, avec bouton de fermeture ou touche `Échap`.
- ✍️ **Changement d'alignement de texte** dans la modale (optionnel).
- 🦸 **Citation aléatoire de Chuck Norris** (option warrior) : récupération et affichage de citations via [Chuck Norris API](https://api.chucknorris.io/), au chargement de la page et toutes les 10 secondes.

## 🧪 Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript (vanilla)**
- API externe : [Chuck Norris API](https://api.chucknorris.io/)

## 🚀 Lancer le projet

1. Cloner le dépôt ou extraire les fichiers.
2. Ouvrir le fichier `index.html` dans un navigateur.
3. Profiter de l’expérience interactive !

---

> Projet réalisé dans le cadre d’un exercice d’intégration front-end, basé sur un sujet de [01-edu](https://github.com/01-edu).
