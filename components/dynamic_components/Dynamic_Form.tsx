import dynamic from 'next/dynamic';

const Form = dynamic(() => import('../Form'), {
  // Options pour le chargement dynamique
  loading: () => <p>Loading...</p>, // Message de chargement
  ssr: false, // Si nécessaire, désactivez le rendu côté serveur
});

export default Form;
