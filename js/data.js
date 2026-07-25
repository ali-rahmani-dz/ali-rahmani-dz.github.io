/* ==========================================================================
   Ali Rahmani — Portfolio
   Données des projets (source unique de vérité pour la grille de projets)
   ========================================================================== */

const PROJECTS = [
  {
    id: "automation-suite",
    title: "Automation Suite — WinSetup & AutoConfig",
    category: "automation",
    techs: ["Delphi", "Python", "Windows API", "Winget"],
    description:
      "Suite complète composée de 3 applications en Delphi et 1 en Python pour l'automatisation de l'installation, du paramétrage des postes de travail et du déploiement logiciel rapide.",
    imageFileName: "AutoSetupWinget.png",
    galleryFileNames: [
      "AutoSetupWinget.png",
      "AutoSetup-01.png",
      "AutoSetup-02.png",
      "AutoSetup-03.png",
    ],
    badge: "4 Captures — Suite 4-en-1",
  },
  {
    id: "certificats-diplomes",
    title: "Génération de certificats / diplômes",
    category: "gestion",
    techs: ["Delphi", "Publipostage", "Export PDF/PNG", "Modèle de données"],
    description:
      "Système automatisé de création et d'impression de diplômes et attestations par publipostage : de la gestion de la fiche du participant jusqu'à l'export final en PDF ou image HD.",
    imageFileName: "UOJAW CERTIFICAT.png",
    badge: "Bureautique Pro",
  },
  {
    id: "safir-click",
    title: "Safir.Click",
    category: "gestion",
    techs: ["Delphi", "Windows Desktop", "SQL", "GUI"],
    description:
      "Application desktop robuste conçue sous Windows pour la gestion complète et le suivi opérationnel d'une plateforme d'affiliation.",
    imageFileName: "Safir.Click.png",
    badge: "Gestion Affiliation",
  },
  {
    id: "flexy-contact",
    title: "Flexy Contact",
    category: "network",
    techs: ["Delphi", "Codes USSD", "GSM Gateway", "Télécom"],
    description:
      "Outil spécialisé dans la gestion automatisée de répertoire téléphonique et l'exécution directe de commandes et codes USSD orienté télécom et rechargement.",
    imageFileName: "Flexy Contact.png",
    badge: "Outil Télécom",
  },
  {
    id: "khotba-joumoua",
    title: "Khotba Al Joumoua",
    category: "cultural",
    techs: ["Delphi / Python", "Base de données", "Moteur de recherche", "Export"],
    description:
      "Application de rédaction, de catégorisation, de sauvegarde et de consultation rapide de sermons du vendredi avec archivage structuré.",
    imageFileName: "Khotba Al Joumoua.png",
    badge: "Application Métier",
  },
  {
    id: "certificat-scolarite",
    title: "Certificat de scolarité",
    category: "gestion",
    techs: ["Delphi", "Gestion d'élèves", "Impression directe", "Bases de données"],
    description:
      "Logiciel métier destiné aux établissements scolaires pour la saisie, l'archivage et l'impression automatisée des certificats de scolarité.",
    imageFileName: "Certificat de scolarite.png",
    badge: "Éducation",
  },
  {
    id: "gns3-vmware",
    title: "Architecture & Simulation Réseau (GNS3 / VMware)",
    category: "network",
    techs: ["GNS3", "VMware Workstation", "Cisco IOS", "VLANs", "Firewall"],
    description:
      "Maquettes de réseaux d'entreprise complexes sous GNS3 et VMware : routage, adressage, segmentation VLAN et règles de filtrage pare-feu.",
    imageFileName: "GNS3 VMWARE.png",
    badge: "Lab Réseau",
  },
  {
    id: "fatwas-albani",
    title: "Fatwas Al-Albani Database Viewer",
    category: "cultural",
    techs: ["Delphi", "Indexation de texte", "Moteur de recherche SQL"],
    description:
      "Application de recherche contextuelle rapide et de consultation d'extraits audio et écrits indexés.",
    imageFileName: "Fatwas Al-Albani.png",
    badge: "Base de données",
  },
  {
    id: "pos-lite",
    title: "Point de Vente Lite (POS Cybercafé / Caisse)",
    category: "gestion",
    techs: ["Delphi", "Impression Ticket", "Gestion Caisse"],
    description:
      "Solution légère de caisse et de suivi du temps d'occupation poste par poste issue de 10 ans d'expérience en gestion de cybercafé.",
    imageFileName: "Poin de vente Lite.png",
    badge: "Caisse & Temps",
  },
  {
    id: "mes-codes",
    title: "Mes Codes — Snippet Manager",
    category: "automation",
    techs: ["Delphi", "Syntax Highlighting", "Base de snippets"],
    description:
      "Gestionnaire de morceaux de code et de scripts pour stocker, filtrer et réutiliser rapidement les routines de programmation et commandes système.",
    imageFileName: "Mes Codes.png",
    badge: "Productivité",
  },
  {
    id: "mes-favoris",
    title: "Mes Favoris — Bookmark Manager",
    category: "gestion",
    techs: ["Delphi", "Base de données", "Classement par catégories"],
    description:
      "Utilitaire d'organisation et d'archivage rapide des liens web, ressources réseau et favoris professionnels.",
    imageFileName: "Mes Favoris.png",
    badge: "Utilitaire",
  },
  {
    id: "soft-launcher",
    title: "Software Launcher Utilities",
    category: "automation",
    techs: ["Delphi", "Raccourcis système", "Lanceur rapide"],
    description:
      "Lanceur d'applications centralisé permettant de regrouper et d'exécuter en un clic l'ensemble des outils administratifs et logiciels métier.",
    imageFileName: "Soft. Launcher.png",
    badge: "Système",
  },
];
