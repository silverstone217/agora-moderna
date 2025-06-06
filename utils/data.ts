import { Rss, Headset, Info } from 'lucide-react';

export const LinksHome = [

    {
        label : 'Blogs',
        value: '/blogs',
        icon:  Rss

    },
    {
        label : 'Contact',
        value: '/contact',
        icon:  Headset
    },
    {
        label : 'A propos',
        value: '/a-propos',
        icon:  Info
    }
]

export const AdminPages =  [
    {
        label: 'Overview',
        value: '/dashboard/overview'
    },
    {
        label : 'Blogs',
        value: '/dashboard/blogs'
    },
    {
        label : 'Contact',
        value: '/contact'
    },
    {
        label : 'A propos',
        value: '/a-propos'
    }
]
