export const containerVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Durée de l'animation
        delay: 0.5, // Délai avant le début de l'animation
      },
    },
  };

export const textVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1, // Délai pour que le texte apparaisse après le conteneur
      },
    },
  };

export const buttonVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5, // Délai pour que le bouton apparaisse après le texte
      },
    },
  };

export const textShadowVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.2,
      transition: {
        duration: 1,
        delay: 3,
      },
    },
  };

export const blurVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
        duration: 1,
        delay: 2.6,
        },
    },
}