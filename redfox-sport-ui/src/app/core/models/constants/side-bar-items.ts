import { NbMenuItem } from '@nebular/theme';

export const SIDE_BAR_ITEMS: NbMenuItem[] = [
    {
        title: 'Home',
        icon: 'home-outline',
        link: '/home',
        home: true
    },
    {
        title: 'News',
        icon: 'map-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'SPORTS',
        group: true,
    },
    {
        title: 'Football',
        icon: 'cube-outline',
        children: [
            {
                title: 'Football Home',
                link: '/football',
            },
            {
                title: 'English Premier League',
                link: '/football/leagues/24',
            },
            {
                title: 'UEFA Champions League',
                link: '/football/leagues/25',
            },
            {
                title: 'UEFA Europa League',
                link: '/football/leagues/26',
            },
            {
                title: 'EFL Cup',
                link: '/football/leagues/27',
            },
        ]
    },
    {
        title: 'Golf',
        icon: 'cube-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'Rugby',
        icon: 'cube-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'Tennis',
        icon: 'cube-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'Cricket',
        icon: 'cube-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'Formula 1',
        icon: 'cube-outline',
        link: '/pages/dashboard',
    }
];
