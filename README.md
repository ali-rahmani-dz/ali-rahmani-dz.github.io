# 🌐 Portfolio — Ali Rahmani

Site portfolio personnel présentant mon parcours et mes réalisations en **administration réseau** et **développement logiciel**.

🔗 **Démo en ligne :** [ali-rahmani-dz.github.io](https://ali-rahmani-dz.github.io)

---

## 👤 À propos

Administrateur réseau et développeur basé à Tlemcen, Algérie, avec plus de 20 ans d'expérience répartis entre :

- l'**administration systèmes et réseaux** (Windows Server, VMware, GNS3, Cisco, VLAN, pare-feu, DHCP/DNS) ;
- le **développement logiciel** (Delphi, Python, SQL) — applications métier, automatisation, outils de gestion ;
- la **gestion d'un cybercafé** pendant 10 ans (conception, câblage et maintenance d'un parc de 20+ postes).

Titulaire d'un **BTS Technicien Supérieur en Réseaux Informatiques**.

---

## ✨ Fonctionnalités du site

- Portfolio de projets filtrable par catégorie (Automation, Gestion, Réseau) et par mot-clé
- Galerie plein écran (lightbox) avec navigation clavier pour les captures d'écran multiples
- Copie rapide de l'adresse e-mail avec notification toast
- Design sombre, responsive, sans dépendance de build (Tailwind CSS + Lucide Icons via CDN)

---

## 🛠️ Stack technique

| Élément       | Technologie                          |
|---------------|---------------------------------------|
| Structure     | HTML5                                 |
| Style         | [Tailwind CSS](https://tailwindcss.com/) (CDN) + CSS personnalisé |
| Icônes        | [Lucide Icons](https://lucide.dev/)   |
| Comportement  | JavaScript vanilla (aucun framework, aucune dépendance à installer) |

Aucune étape de build n'est nécessaire : le site fonctionne directement dans le navigateur.

---

## 📁 Structure du projet

```
.
├── index.html          # Page principale (structure HTML)
├── css/
│   └── style.css       # Styles personnalisés (animations, sélection de texte)
├── js/
│   ├── data.js          # Données des projets (source unique pour la grille)
│   └── main.js          # Logique applicative (rendu, filtres, lightbox, toast)
├── screenshot/          # Captures d'écran des projets (à fournir)
└── README.md
```

---

## 🚀 Lancer le projet en local

Aucune installation n'est requise. Deux options :

**Option 1 — ouvrir directement le fichier**
```bash
git clone https://github.com/ali-rahmani-dz/ali-rahmani-dz.github.io.git
cd ali-rahmani-dz.github.io
```
Puis double-cliquez sur `index.html`.

**Option 2 — via un serveur local (recommandé)**
```bash
cd ali-rahmani-dz.github.io
python3 -m http.server 8000
```
Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

---

## ➕ Ajouter un projet au portfolio

Toutes les données de la section « Projets » sont centralisées dans `js/data.js`.
Pour ajouter une réalisation, ajoutez un objet au tableau `PROJECTS` :

```js
{
  id: "mon-nouveau-projet",
  title: "Titre du projet",
  category: "gestion", // "automation" | "gestion" | "network" | "cultural"
  techs: ["Delphi", "SQL"],
  description: "Courte description du projet.",
  imageFileName: "mon-projet.png",   // à placer dans /screenshot
  badge: "Étiquette affichée"
}
```

Pour une galerie multi-images, ajoutez `galleryFileNames: ["img1.png", "img2.png", ...]`.
Les images correspondantes doivent être déposées dans le dossier `screenshot/`.

---

## 📬 Contact

- **Email :** [rahmani.ali@hotmail.com](mailto:rahmani.ali@hotmail.com)
- **Localisation :** Tlemcen, Algérie

---

## 📄 Licence

Ce projet est un portfolio personnel. Le code source est libre de consultation ; merci de ne pas réutiliser les contenus, textes et captures d'écran des projets sans autorisation.
