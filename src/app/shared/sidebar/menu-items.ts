import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/card',
    title: 'Card',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/accordion',
    title: 'Accordion',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/alert',
    title: 'Alert',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Carousel',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/dropdown',
    title: 'pagos',
    icon: 'mdi mdi-cash',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/modal',
    title: 'concurso',
    icon: 'mdi mdi-calendar',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/aportesylogros',
    title: 'Aportes y Logros',
    icon: 'mdi mdi-trophy',
    class: '',
    extralink: false,
    submenu: []
  }
  
];
