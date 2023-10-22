export const project = [
  {
    nom: "Twint E-Sport",
    img: "/project/twint.webp",
    img2: "/project/twint.png",
    alt: "App twint",
    desc: "Application E-Sport Actu et Match",
    descFull: "Projet fictif d'une application web ayant pour but de recenser l'actualité et les matchs de l'e-sport. Nous avions une semaine pour développer l'application et c'est pourquoi nous nous sommes orientés sur du PHP que nous connaissions déjà. Nous avons utilisé une API pour récupérer les données des matchs et des actualités.\n\nNous avons également utilisé une base de données pour stocker les données des utilisateurs et des matchs. L'application comprenait plusieurs fonctionnalités comme de la recherche de joueurs ou d'équipes en temps réel grâce à des appels d'API. Nous avons également développé un système de connexion et d'inscription avec une base de données permettant d'avoir accès à une page Compte.",
    attr1: "PHP",
    attr2: "Javascript"
  },
  {
    nom: "Locker",
    img: "/project/locker.webp",
    alt: "img Locker",
    desc: "Locker avec Raspberry PI",
    descFull: "Création de locker dans le style d'Amazon avec une interface frontend, un backend ainsi qu'une base de données. Le locker était un cervomoteur que je faisais bouger avec du script python grâce à la librairie RPI GPIO. En fonction du code que rentrait l'utilisateur sur l'interface web, le backend en PHP appelait la base de données. Si le code correspond à une commande alors le backend ouvre le script Python afin d'intéragir avec le cervomoteur correspondant. Le backend renvoir ensuite une réponse à l'interface web afin de notifier l'utilisateur que son code est bon ou non. Ce projet fut très intéressant car il m'a permis de découvrir le Raspberry PI tout en me permettant d'intéragir avec lui. Ce projet comportait toutes les phases d'un projet avec du back, du front, de la base de données et de l'intéraction avec un objet.",
    attr1: "Python",
    attr2: "PHP",
    link: "https://github.com/TheVisitor-coding/Locker_Project_Raspberry"
  },
  {
    nom: "Portfolio",
    img: "/project/portfolio.webp",
    alt: "img accueil portfolio",
    desc: "Développement Portfolio",
    descFull: "L'objectif derrière ce portfolio était de créer un site représentant mon univers. Pour atteindre le meilleur résultat possible j'y suis donc allé étape par étape. J'ai d'abord commencé par la partie réflexion du projet, avec des moodbards et des ateliers d'idéations. Je me suis donc lancé ensuite dans la conception graphique avec Figma où j'ai pu créer une maquette graphique animée représentative du résultat final que je voulais.  J'ai ensuite commencé le développement du site avec nextJS afin d'utiliser React avec sa logique de composants et tailwindCSS pour sa rapidité et son gain de temps. Mon site étant une Landing Page, j'ai préféré utiliser Tailwind. Pour ce qui est des animations j'ai choisi la librairie Framer Motion qui est très simple d'utilisation et qui permet de faire des animations très rapidement. Pour finir, j'ai choisi de déployer mon site sur Vercel.",
    attr1: "Nextjs",
    attr2: "Tailwindcss"
  },
]