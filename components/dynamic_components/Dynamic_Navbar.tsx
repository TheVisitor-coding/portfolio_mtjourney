import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../section/Navbar'), {
  // Options pour le chargement dynamique
  loading: () => <p>Loading...</p>, // Message de chargement
  ssr: false, // Si nécessaire, désactivez le rendu côté serveur
});

export default Navbar;
