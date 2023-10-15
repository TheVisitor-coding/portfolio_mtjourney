"use static";

export const contenuSection = [
  {
    id: 1,
    titre: "Echange avec le client",
    description: "Discuter d'un projet afin d'en comprendre ses motivations et ses enjeux est pour moi une des étapes voir l'étape la plus importante. C'est pourquoi je prends pour chaque projet un temps d'échange avec l'interlocuteur afin d'analyser les besoins et les critères du projet",
    txtpercent: "Selon une étude le taux de réussite d'un projet lorsqu'il y a une communication initiale solide entre le freelance et le client est de :   ",
    pourcentage: "70%",
    subtxt: "S'élancer dans un projet sans avoir pris le temps d'échanger avec le client peut être une erreur. En effet, il est important de comprendre les motivations et les enjeux du projet afin de pouvoir y répondre au mieux et c'est pourquoi je m'éfforce à prendre le temps qu'il faut avec le client.",
    wrdImportant: "Communication",
    char3D: "https://prod.spline.design/0kOJ6pLbz5GJfbp4/scene.splinecode"
  },
  {
    id: 2,
    titre: "Cahier des Charges",
    description: "Suite au premier échange, un cahier des charges est rédigé afin de définir les objectifs du projet, les contraintes, les délais, les ressources nécessaires, les coûts, etc. Ce document permet d'organiser et de planifier le projet. Sauf si le client l'a déjà rédigé, je vous accompagne dans la rédaction de celui-ci afin de structurer et simplifier la gestion du projet pour assurer une mission rapide et optimale.",
    txtpercent: "Selon une étude de Malt, le taux de freelances estimant que des informations claires et précises dans le cahier des charges permettent de réduire les risques d'erreurs et de retards est de :",
    pourcentage: "65%",
    subtxt: "Le cahier des charges a pour but de contenir toutes les informations fonctionnelles et techniques du projet afin d'en avoir toutes les spécificités. En participant à rédiger ce document, je m'assure de minimiser les risques d'erreurs ou malentendus.",
    char3D: "https://prod.spline.design/TYob2ZXi262fdwh1/scene.splinecode"
  },
  {
    id: 3,
    titre: "Design",
    description: "Le design d'un projet c'est l'univers et le sens que l'on veut donner au projet. Un bon design est un design répondant aux besoins de la cible visé par le projet. Dans ma conception graphique j'utilise donc des outils comme Figma afin de créer des maquettes accessibles tout en réflechissant à fournir une expérience utilisateur qui s'approche au mieux de la perfection.",
    txtpercent: "L'ergonomie est souvent un facteur délaissé qui peut être fatal pour la réussite d'un projet. On compte, le pourcentage de business en ligne échouant à cause d'une mauvaise ergonomie à :",
    pourcentage: "70%",
    subtxt: "L'aspect visuel ainsi que l'ergonomie sont deux fondements de la réussite d'un projet. L'étape du design permet donc d'assurer avant le développement une expérience utilisateur réussie et une interface agréable.",
    char3D: "https://prod.spline.design/2qvSswuu5US01cYp/scene.splinecode"
  },
  {
    id: 4,
    titre: "Développement",
    description: "Viens ensuite l'étape du développement. C'est à ce moment que le projet prend vie. Je développe votre projet en utilisant les dernières technologies du marché afin de vous fournir un produit de qualité. Je m'assure également de vous fournir un code propre et optimisé afin de faciliter la maintenance et l'évolution de votre projet. J'assure également la mise en ligne de votre projet ainsi que son adaptabilité et accessibilité.",
    txtpercent: "Une règle de plus en plus importante dans le développement est la performance. En effet, on compte le pourcentage d'utilisateurs quittant un site internet à cause d'un temps de chargement trop long à :",
    pourcentage: "40%",
    subtxt: "Le développement informatique étant ma spécialité, j'interviens sur tous les domaines de celui-ci. J'assure le bon développement du frontend (ce que vois l'utilisateur), du backend (ce qui se passe côté serveur), de la base de données, ainsi que la mise en ligne et l'adaptabilité du projet.",
    char3D: "https://prod.spline.design/rHJdsubOr1cE-v6Q/scene.splinecode"
  },
  {
    id: 5,
    titre: "Réussite !!",
    description: "Ca y'est le projet est terminé et est un grand succès. Fini ! Enfin non pas vraiment. En effet, un projet n'est jamais vraiment terminé. Il faut le maintenir, le faire évoluer, le mettre à jour, etc. C'est pourquoi je vous accompagne dans la maintenance de votre projet afin de vous assurer une pérennité de celui-ci.",
    txtpercent: "La maintenance d'un site permet de garder le site optimiser, d'éviter les bugs et les failles de sécurités. On compte le pourcentage de sites Wordpress ayant des failles de sécurités à : ",
    pourcentage: "42%",
    subtxt: "Lorsqu'un client arrive à cette étape en ma compagnie, j'espère que celui-ci est satisfait du travail effectué. C'est toujours un plaisir d'agir sur de nouveaux projets et d'en lancer ensuite de nouveaux.",
    char3D: "https://prod.spline.design/9lWlxeeLg39wVZZp/scene.splinecode"
  },
]

export const buttons = [
  { id: 1, isOpen: true, name: "Echange", icon: "/process/discuss.png", classBtn: "rounded-full w-14 h-14 border-1 flex justify-center items-center lg:translate-x-5 lg:translate-y-5", classDiv: "lg:top-1/3 lg:right-2/3 top-14 -right-14" },
  { id: 2, isOpen: false, name: "CDC", icon: "/process/task.png", classBtn: "rounded-full w-14 h-14 border-1 flex justify-center items-center lg:-translate-x-7 lg:translate-y-5", classDiv: "lg:top-1/3 lg:right-20 top-14 -right-14" },
  { id: 3, isOpen: false, name: "Design", icon: "/process/pen.png", classBtn: "rounded-full w-14 h-14 border-1 flex justify-center items-center lg:-translate-x-12 lg:translate-y-2", classDiv: "lg:top-2 lg:right-24 top-14 -right-14" },
  { id: 4, isOpen: false, name: "Développement", icon: "/process/code.png", classBtn: "rounded-full w-14 h-14 border-1 flex justify-center items-center lg:-translate-x-9 lg:translate-y-5", classDiv: "lg:top-1/3 lg:right-20 top-14 -right-14" },
  { id: 5, isOpen: false, name: "Succès", icon: "/process/trophy.png", classBtn: "rounded-full w-14 h-14 border-1 flex justify-center items-center lg:translate-y-5", classDiv: "lg:top-1/3 lg:right-12 top-14 right-0" },
]