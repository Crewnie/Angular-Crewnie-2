import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Demo', icon: 'ft-droplet', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/demo/colors', title: 'Paleta de colores', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/demo/cards', title: 'Cards', icon: '', class: '', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
        ]
    },

    { path: '/registration-wizard', title: 'Registration Wizard', icon: 'ft-compass', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    {
        path: '', title: 'Father', icon: 'ft-home', class: 'has-sub', badge: '4', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {
                path: '', title: 'First child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/demo/cards', title: 'Tercer Nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/demo/colors', title: 'Hermana en 3er nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/registration-wizard', title: 'Second level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    // Demo elements

    {
        path: '', title: 'Demo', icon: 'ft-activity', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/demo/colors', title: 'Paleta de colores', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/demo/cards', title: 'Cards', icon: '', class: '', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
        ]
    },

    { path: '/registration-wizard', title: 'Registration Wizard', icon: 'ft-feather', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    {
        path: '', title: 'Father', icon: 'ft-home', class: 'has-sub', badge: '4', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {
                path: '', title: 'First child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/demo/cards', title: 'Tercer Nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/demo/colors', title: 'Hermana en 3er nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/registration-wizard', title: 'Second level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },


    {
        path: '', title: 'Demo', icon: 'ft-mic', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/demo/colors', title: 'Paleta de colores', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/demo/cards', title: 'Cards', icon: '', class: '', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
        ]
    },

    { path: '/registration-wizard', title: 'Registration Wizard', icon: 'ft-shield', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    {
        path: '', title: 'Father', icon: 'ft-video', class: 'has-sub', badge: '4', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {
                path: '', title: 'First child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/demo/cards', title: 'Tercer Nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/demo/colors', title: 'Hermana en 3er nivel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/registration-wizard', title: 'Second level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    }

];
