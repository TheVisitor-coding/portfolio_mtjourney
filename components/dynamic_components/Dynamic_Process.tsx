import dynamic from 'next/dynamic';

const Process = dynamic(() => import('../section/Process_Section'), {
  // Options pour le chargement dynamique
  loading: () => <p>Loading...</p>, // Message de chargement
  ssr: false, // Si nécessaire, désactivez le rendu côté serveur
});

export default Process;
