import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    titlebar: {
      title: 'Accueil',
      subtitle: '',
    },
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    titlebar: {
      title: 'Dashboard',
      subtitle: '',
    },
  },
];

export default routes;
