import type { Dict } from './en';

export const fr: Dict = {
  lang: 'fr',
  dir: 'ltr',
  locale: 'fr_FR',
  label: 'Français',
  short: 'FR',

  ui: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    nav: { work: 'Réalisations', services: 'Services', about: 'À propos', contact: 'Contact' },
    cta: 'Démarrer un projet',
    whatsapp: 'Écrire sur WhatsApp',
    email: 'Envoyer un e-mail',
    call: 'Appeler',
    viewAll: 'Voir toutes les réalisations',
    home: 'Accueil',
    view: 'Voir',
    viewProject: 'Voir le projet',
    allWork: 'Toutes les réalisations',
    nextProject: 'Projet suivant',
    theme: 'Basculer entre thème clair / sombre',
    language: 'Langue',
    open: 'Disponible pour de nouveaux projets',
    beirutTime: 'Heure de Beyrouth',
    prev: 'Précédent',
    next: 'Suivant',
    sound: 'Activer / couper le son',
    play: 'Lire la vidéo',
    rights: 'Tous droits réservés.',
    footerLine: 'Conçu au Sud-Liban. Livré dans le monde entier.',
    backToTop: 'Retour en haut',
    explore: 'Explorer',
    getInTouch: 'Me contacter',
    waHello: 'Bonjour Tiama, j’ai découvert votre site et j’aimerais parler d’un projet.',
    brief: 'Le brief',
    concept: 'L’idée',
    logoSystem: 'Système de logo',
    palette: 'Palette de couleurs',
    gallery: 'Galerie',
    discipline: 'Discipline',
    deliverables: 'Livrables',
    scroll: 'Défiler',
    caption: (title: string, cat: string) => `${title} — ${cat} par Tiama Nassour`,
  },

  cats: {
    all: 'Tout',
    branding: 'Identité & packaging',
    illustration: 'Illustration',
    poster: 'Affiches',
    ugc: 'Contenu UGC & IA',
    motion: 'Animation IA',
  },

  home: {
    seo: {
      title: 'Tiama Nassour | Graphiste & illustratrice au Liban',
      description:
        'Graphiste et illustratrice freelance au Sud-Liban : identité visuelle, logos, packaging et illustration pour des clients au Liban, dans le Golfe, en Europe et aux États-Unis. Travaillons à distance.',
    },
    hero: {
      eyebrow: 'Graphiste & illustratrice',
      lead: 'Des marques qui',
      em: 'prennent vie',
      sub: 'Logos, packaging, illustration et motion, conçus au Sud-Liban pour des entreprises au Liban, dans le Golfe, en Europe et aux États-Unis.',
      cta1: 'Démarrer un projet',
      cta2: 'Voir une sélection',
      stats: [
        { n: '3+', l: 'ans d’expérience en design' },
        { n: '3', l: 'identités de marque complètes' },
        { n: '100 %', l: 'à distance, dans le monde entier' },
      ],
    },
    marquee: [
      'Identité visuelle',
      'Création de logo',
      'Packaging',
      'Illustration',
      'Character design',
      'Identités arabes & latines',
      'Affiches',
      'Contenu UGC',
      'Animation IA',
    ],
    work: {
      eyebrow: '01 — Sélection',
      title: 'Des histoires racontées par le design',
      sub: 'Trois univers de marque, du premier croquis jusqu’à la boîte, au gobelet et à l’enseigne.',
    },
    illustration: {
      eyebrow: '02 — Illustration',
      title: 'Personnages, culture & couleurs',
      sub: 'Des illustrations personnelles nourries par les récits du Levant, le patrimoine et la vie quotidienne.',
      hint: 'Faites glisser pour explorer',
    },
    services: {
      eyebrow: '03 — Services',
      title: 'Ce que je peux créer pour vous',
      sub: 'Du premier logo à un univers de marque complet, en arabe, en anglais ou les deux.',
      cta: 'Découvrir tous les services',
    },
    why: {
      eyebrow: '04 — Pourquoi Tiama',
      title: 'Du design avec du cœur, pensé pour votre activité',
      items: [
        { t: 'L’histoire d’abord', d: 'Chaque identité part de votre histoire, pas d’un modèle. Le résultat vous ressemble.' },
        { t: 'Bilingue par nature', d: 'Typographie arabe et latine, design attentif à la culture, pour des publics du Liban, du Golfe et d’Occident.' },
        { t: 'Prêt pour l’impression et le digital', d: 'Fichiers préparés pour les imprimeurs, le packaging, les réseaux sociaux et le web, sans rien à corriger de votre côté.' },
        { t: 'Simple à collaborer', d: 'Travail à distance, étapes claires, échanges honnêtes sur WhatsApp ou par e-mail. Aucune surprise.' },
      ],
    },
    process: {
      eyebrow: '05 — Méthode',
      title: 'Simple, claire, collaborative',
      steps: [
        { t: 'Découvrir', d: 'Nous parlons de votre activité, de votre public et de vos objectifs, sur WhatsApp, par e-mail ou lors d’un court appel.' },
        { t: 'Concevoir', d: 'Planches d’inspiration, croquis et premières pistes qui captent l’histoire de votre marque.' },
        { t: 'Créer', d: 'J’affine la piste choisie avec vos retours jusqu’à ce qu’elle soit exactement juste.' },
        { t: 'Livrer', d: 'Fichiers finaux organisés, prêts pour l’impression et le web, avec des conseils d’utilisation.' },
      ],
    },
    reach: {
      eyebrow: '06 — Dans le monde',
      title: 'Basée au Sud-Liban. Au service du monde.',
      text: 'Les fuseaux horaires ne sont pas un obstacle. Mes après-midis sont vos matins aux États-Unis, et ma journée recoupe celle du Golfe et de l’Europe : nous échangeons quand cela vous arrange.',
      regions: ['Liban', 'Émirats arabes unis', 'Arabie saoudite', 'Qatar', 'Koweït', 'Europe', 'États-Unis'],
    },
    about: {
      eyebrow: '07 — À propos',
      title: 'Bonjour, je suis Tiama.',
      text: 'Je suis graphiste et illustratrice, et j’aime transformer les idées en expériences visuelles réfléchies. Avec 3 ans d’expérience en identité visuelle, packaging, illustration, affiches et contenu digital, j’apporte à chaque projet une vraie pensée visuelle et le goût de raconter des histoires.',
      cta: 'En savoir plus',
    },
    faq: {
      eyebrow: '08 — FAQ',
      title: 'Bonnes questions',
    },
    cta: {
      title: 'Créons quelque chose dont on se souvient.',
      text: 'Parlez-moi de votre projet. J’aimerais savoir ce que vous construisez.',
    },
  },

  faq: [
    {
      q: 'Où êtes-vous basée, et travaillez-vous avec des clients à l’international ?',
      a: 'Je suis basée au Sud-Liban et je travaille entièrement en ligne. Je crée pour des clients au Liban, dans le Golfe, en Europe et aux États-Unis, et nous échangeons par WhatsApp, e-mail ou visioconférence.',
    },
    {
      q: 'De quoi ai-je besoin pour commencer ?',
      a: 'D’un court message sur votre activité et votre besoin. Des références, un nom de marque et vos premières idées sont utiles, mais je vous guide pour le reste.',
    },
    {
      q: 'Combien de temps dure un projet ?',
      a: 'Cela dépend de son ampleur. Un logo prend généralement une à deux semaines, une identité complète quelques semaines, et un packaging un peu plus. Je vous donne un calendrier clair avant de commencer.',
    },
    {
      q: 'Quels fichiers vais-je recevoir ?',
      a: 'Des fichiers prêts pour l’impression et pour le web, dans les formats dont vous avez besoin (PDF, PNG, JPG, fichiers vectoriels…), rangés dans des dossiers faciles à utiliser.',
    },
    {
      q: 'Concevez-vous en arabe comme en anglais ?',
      a: 'Oui. Je travaille en arabe et en anglais et j’aime les identités bilingues, y compris le lettrage arabe, pour que votre marque soit juste dans les deux écritures.',
    },
    {
      q: 'Comment se passe le paiement ?',
      a: 'Nous convenons ensemble du périmètre et du prix avant que je commence, et je vous propose les options de paiement les plus adaptées. Écrivez-moi et nous trouverons la solution.',
    },
  ],

  servicesPage: {
    seo: {
      title: 'Services de design graphique | Identité, logos, packaging | Tiama Nassour',
      description:
        'Identité visuelle, création de logo, packaging, illustration, affiches, contenu UGC et animation IA. Design bilingue arabe–anglais par une graphiste freelance au Liban, en ligne dans le monde entier.',
    },
    eyebrow: 'Services',
    title: 'Un design qui donne un visage et une voix à votre marque',
    sub: 'Tout ce qu’il faut pour paraître professionnel, mémorable et prêt pour votre marché, conçu avec soin et livré à temps.',
    includes: 'Ce qui est inclus',
    faqTitle: 'Questions fréquentes',
  },

  aboutPage: {
    seo: {
      title: 'À propos de Tiama Nassour | Graphiste & illustratrice, Sud-Liban',
      description:
        'Découvrez Tiama Nassour, graphiste et illustratrice du Sud-Liban avec 3 ans d’expérience en identité visuelle, packaging, illustration et storytelling visuel.',
    },
    eyebrow: 'À propos',
    title: 'Bonjour, je suis Tiama.',
    paras: [
      'Je suis graphiste et illustratrice, basée au Sud-Liban, passionnée par la transformation des idées en expériences visuelles réfléchies.',
      'Avec 3 ans d’expérience professionnelle en design graphique, j’ai travaillé sur des projets créatifs variés : illustration, character design, affiches, identité visuelle, packaging, contenu digital et storytelling visuel.',
      'Mon approche allie une forte pensée visuelle à l’amour du récit, de l’expérimentation et du détail. J’aime explorer différents styles et médiums pour créer un travail à la fois séduisant et porteur de sens.',
      'Je travaille entièrement en ligne avec des clients au Liban et à l’étranger : votre projet reçoit toute mon attention, où que vous soyez.',
    ],
    toolsTitle: 'Outils',
    eduTitle: 'Formation',
    edu: [
      { y: '2022 – 2025', t: 'Licence en design graphique', s: 'Université Antonine' },
      { y: '2020 – 2022', t: 'Baccalauréat technique en design graphique', s: 'Institut Amjad' },
    ],
    valuesTitle: 'Ma façon de travailler',
    values: [
      { t: 'J’écoute d’abord', d: 'Un bon design commence par comprendre votre activité, vos clients et vos objectifs.' },
      { t: 'Je crée avec du sens', d: 'Chaque forme, couleur et lettre est choisie pour une raison, jamais pour décorer.' },
      { t: 'Je reste curieuse', d: 'Illustration, motion et outils d’IA gardent mon travail vivant, et votre marque en avance.' },
    ],
  },

  workPage: {
    seo: {
      title: 'Portfolio | Identité, packaging, illustration & affiches | Tiama Nassour',
      description:
        'Réalisations de Tiama Nassour : identités de marque, logos et packaging, illustration de personnages, affiches, contenu UGC et animation IA.',
    },
    eyebrow: 'Portfolio',
    title: 'Réalisations',
    sub: 'Identité, packaging, illustration, affiches et motion. Touchez une œuvre pour la voir en grand.',
    filter: 'Filtrer les réalisations',
  },

  contactPage: {
    seo: {
      title: 'Contact | Engager une graphiste au Liban | Tiama Nassour',
      description:
        'Lancez votre projet avec Tiama Nassour. Écrivez sur WhatsApp, par e-mail ou via le formulaire. Design graphique et illustration pour clients au Liban, dans le Golfe, en Europe et aux États-Unis.',
    },
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    sub: 'Dites-moi ce que vous construisez. Je vous réponds personnellement.',
    fastest: 'Le plus rapide',
    form: {
      name: 'Votre nom',
      email: 'E-mail',
      phone: 'Téléphone / WhatsApp (facultatif)',
      type: 'De quoi avez-vous besoin ?',
      types: [
        'Identité visuelle & logo',
        'Packaging',
        'Illustration / personnages',
        'Affiches & réseaux sociaux',
        'Contenu UGC & IA',
        'Animation / vidéo',
        'Autre chose',
      ],
      budget: 'Budget (facultatif)',
      budgets: ['Moins de 300 $', '300 – 1 000 $', '1 000 – 3 000 $', 'Plus de 3 000 $', 'Pas encore défini'],
      message: 'Parlez-moi de votre projet',
      messagePh: 'Votre activité, votre besoin, vos délais, des liens ou des références…',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      ok: 'Merci ! Votre message est bien parti. Je vous réponds très vite.',
      fail: 'Une erreur est survenue. Écrivez-moi plutôt sur WhatsApp ou par e-mail.',
      mailFallback: 'Ouverture de votre application e-mail…',
      privacy: 'Vos informations servent uniquement à répondre à votre message.',
      required: 'Merci de renseigner votre nom, votre e-mail et votre message.',
    },
    nextTitle: 'Et ensuite ?',
    next: [
      'Je lis votre message et regarde vos références.',
      'Je vous réponds avec des questions, des idées et un périmètre clair.',
      'Nous validons le plan et je commence à créer.',
    ],
  },

  notFound: {
    title: 'Page introuvable',
    text: 'Cette page s’est égarée. Retournons voir les réalisations.',
    cta: 'Retour à l’accueil',
  },

  services: [
    {
      id: 'identity',
      t: 'Identité visuelle & création de logo',
      d: 'Logos, palettes de couleurs, typographies et éléments de marque qui donnent à votre activité un visage dont on se souvient.',
      l: ['Logo et déclinaisons', 'Palette de couleurs & typographie', 'Éléments & motifs de marque', 'Identités bilingues arabe–latin', 'Conseils d’utilisation'],
    },
    {
      id: 'packaging',
      t: 'Design de packaging',
      d: 'Boîtes, pots, bouteilles, gobelets et étiquettes qui sont beaux en rayon et racontent l’histoire de votre produit.',
      l: ['Boîtes, pots, bouteilles & gobelets', 'Étiquettes & stickers', 'Fichiers prêts pour l’impression', 'Enseignes & concepts de façade', 'Maquettes de présentation'],
    },
    {
      id: 'illustration',
      t: 'Illustration & character design',
      d: 'Des illustrations et des personnages sur mesure, pleins de caractère, ancrés dans la culture et faits pour marquer.',
      l: ['Création de personnages', 'Illustration de marque & éditoriale', 'Œuvres inspirées de la culture', 'Scènes narratives', 'Affiches illustrées'],
    },
    {
      id: 'posters',
      t: 'Affiches & réseaux sociaux',
      d: 'Des visuels qui arrêtent le regard pour vos campagnes, événements, menus et réseaux.',
      l: ['Affiches de campagne & d’événement', 'Posts & stories', 'Menus & supports promotionnels', 'Affiches culturelles & cinéma', 'Systèmes visuels cohérents'],
    },
    {
      id: 'ugc',
      t: 'Contenu UGC & IA',
      d: 'Des visuels produit et du contenu de style UGC, mêlant récit authentique et images enrichies par l’IA.',
      l: ['Visuels produit', 'Concepts & scripts UGC', 'Images enrichies par l’IA', 'Créations publicitaires', 'Contenu Instagram & TikTok'],
    },
    {
      id: 'motion',
      t: 'Motion & animation IA',
      d: 'Donnez vie à vos designs avec de courtes animations, des reels et des films de marque.',
      l: ['Affiches & personnages animés', 'Vidéos courtes & reels', 'Films d’histoire de marque', 'Motion pour les réseaux sociaux', 'Choix du son & de la musique'],
    },
  ],

  cases: {
    'mielle-dor': {
      title: 'Mielle d’Or',
      sub: 'Chocolat au rayon de miel',
      tag: 'Identité visuelle · Packaging · Illustration',
      tagline: 'Une marque de chocolat au rayon de miel, enveloppée d’une histoire de forêt.',
      seo: {
        title: 'Mielle d’Or : identité visuelle & packaging | Tiama Nassour',
        description:
          'Étude de cas : logo, packaging hexagonal et illustration de forêt pour Mielle d’Or, marque de chocolat au rayon de miel. Identité par Tiama Nassour.',
      },
      brief:
        'Le logo s’inspire du rayon de miel et d’une abeille croisée par hasard, qui a immédiatement attiré mon attention. J’ai combiné leurs formes naturelles et leurs détails pour créer un symbole simple et unique, qui évoque la nature, le miel et l’essence de Mielle d’Or.',
      packTitle: 'La boîte',
      pack: 'Le design de la boîte reflète l’univers naturel et chaleureux de Mielle d’Or. Inspiré de la forêt, du rayon de miel, des abeilles et d’un ours savourant son miel, le packaging donne vie à l’histoire de la marque tout en offrant au produit un côté chaleureux, ludique et premium. La forme hexagonale renvoie directement au rayon de miel : la boîte devient le prolongement du produit.',
      galleryTitle: 'L’univers de la marque',
      videoTitle: 'En mouvement',
      captions: {
        logo: 'Logo principal',
        black: 'Logo en noir',
        icon: 'Icône seule',
        elements: 'Les éléments',
        box: 'Boîte hexagonale',
        story: 'Illustration de l’histoire de marque',
        forest: 'Chocolats au rayon de miel dans la forêt',
        drizzle: 'Filet de miel',
        open: 'Boîte ouverte',
      },
    },
    'fig-and-olive': {
      title: 'Fig and Olive',
      sub: 'التين والزيتون · Fabriqué au Sud',
      tag: 'Identité visuelle · Packaging · Film',
      tagline: 'Une identité chaleureuse, faite main, pour une ferme du Sud.',
      seo: {
        title: 'Fig and Olive : identité arabe & packaging | Tiama Nassour',
        description:
          'Étude de cas : logo au lettrage arabe, pots, bouteilles et enseigne pour Fig and Olive (التين والزيتون), marque de ferme fabriquée au Sud. Par Tiama Nassour.',
      },
      brief:
        'Le logo associe figues, branches d’olivier, feuilles et une typographie raffinée pour refléter la richesse naturelle et l’authenticité de la ferme. Chaque élément représente la terre, sa récolte et le lien entre nature et tradition, pour une identité simple et chaleureuse, ancrée dans le patrimoine de la ferme.',
      packTitle: 'Packaging & lieu',
      pack: 'Pots coiffés de tissu, bouteilles de lait et enseigne suspendue portent le même lettrage arabe dessiné à la main : chaque point de contact semble sortir de la même table de cuisine.',
      galleryTitle: 'L’univers de la marque',
      videoTitle: 'Le film',
      videoText: 'Un court film de marque qui suit la terre, des épreuves jusqu’à la récolte.',
      captions: {
        logo: 'Logo principal',
        black: 'Logo en noir',
        elements: 'Les éléments',
        grandmother: 'La grand-mère de la ferme',
        milk: 'Bouteilles de lait',
        jars: 'Pots',
        zaatar: 'Pot de zaatar',
        seasoned: 'Pot d’épices',
        sign: 'Enseigne de la boutique',
      },
    },
    'king-of-the-game': {
      title: 'King of the Game',
      sub: 'ملك اللعبة',
      tag: 'Identité visuelle · Packaging · Espace',
      tagline: 'Café, repas, jeux et amis sous le même toit. Jouer, boire, recommencer.',
      seo: {
        title: 'King of the Game : identité d’un café-jeux | Tiama Nassour',
        description:
          'Étude de cas : logo arabe–anglais ludique, gobelets inspirés du jeu, façade et menu pour King of the Game (ملك اللعبة), café-jeux. Par Tiama Nassour.',
      },
      brief:
        'Quand quelqu’un gagne encore et encore, on dit qu’il est ملك اللعبة, le roi du jeu. Tout le monde veut ressentir cela, ne serait-ce que le temps d’une partie. C’est tout l’esprit du café : un lieu où l’on vient pour un bon café, où l’on joue entre amis, et d’où l’on repart avec le sentiment d’avoir gagné quelque chose.',
      slogan: 'Bon café = jours meilleurs.',
      vibeTitle: 'L’ambiance',
      cupsTitle: 'Des gobelets qui jouent le jeu',
      cupsText:
        'Chaque gobelet a un recto et un verso. Le gobelet labyrinthe cache un petit personnage à suivre, et le gobelet pixel se termine par des mots mêlés à finir en attendant.',
      placeTitle: 'Le lieu',
      colorsTitle: 'Couleurs & mots',
      chips: ['Jouer', 'Boire', 'Recommencer', 'Café', 'Jeux', 'Amis', 'Bonne ambiance'],
      captions: {
        logo: 'Le logo',
        scene: 'Scène du gobelet de café',
        gaming: 'Café & jeux',
        table: 'La table de jeu',
        mazeF: 'Gobelet labyrinthe, recto',
        mazeB: 'Gobelet labyrinthe, verso',
        pixelF: 'Gobelet pixel, recto',
        pixelB: 'Gobelet pixel, verso',
        store: 'La façade',
        floor: 'La salle d’arcade',
        menu: 'Le menu',
      },
      places: [
        'Une couronne lumineuse au-dessus de la porte, des dés géants dehors.',
        'Bornes d’arcade, tables de jeu, lumière chaleureuse.',
        'Le menu est un écran de jeu.',
      ],
      colorNames: ['Jaune Roi', 'Noir Arcade', 'Crème', 'Vert', 'Bleu', 'Rouge'],
    },
  },

  work: {
    notes: {
      'ish-ish': 'Une illustration personnelle inspirée du film égyptien Ish Ish, réinventée avec mes propres personnages et la chaleur du Levant.',
      'meets-reality': 'Une expérience qui associe un personnage illustré à un décor réel, pour explorer l’espace entre imagination et réalité.',
      'first-illustration': 'Le début de mon parcours d’illustratrice : mon premier pas vers les personnages, la couleur et un nouveau style créatif.',
    } as Record<string, string>,
    personal: 'Projet personnel',
  },
};
