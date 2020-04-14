import { NbMenuItem } from '@nebular/theme';

export const SIDE_BAR_ITEMS: NbMenuItem[] = [
    {
        title: 'Home',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
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
                link: '/pages/modal-overlays/dialog',
            },
            {
                title: 'English Premier League',
                link: '/pages/modal-overlays/window',
            },
            {
                title: 'UEFA Champions League',
                link: '/pages/modal-overlays/popover',
            },
            {
                title: 'UEFA Europa League',
                link: '/pages/modal-overlays/toastr',
            },
            {
                title: 'EFL Cup',
                link: '/pages/modal-overlays/tooltip',
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
