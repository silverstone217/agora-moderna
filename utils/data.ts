import { Rss, Headset, Info, Home } from 'lucide-react';
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";

export const LinksHome = [
    {
        label : 'Accueil',
        value: '/',
        icon:  Home

    },

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
        value: '/admins/overview'
    },
    {
        label : 'Blogs',
        value: '/admins/blogs'
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

export const HeroHomeData = [{
    title: "L'Aventure vous attend",
    description: "Explorez des horizons inconnus, vivez des expériences uniques et laissez-vous porter par l'esprit d'aventure.",
    image: img1
  },
  {
    title: "Paix et Sérénité",
    description: "Trouvez l'équilibre intérieur, cultivez la tranquillité d'esprit et savourez chaque instant avec calme et harmonie.",
    image: img2
  },
  {
    title: "Passion, Business et Progrès",
    description: "Alliez passion et ambition pour faire grandir vos projets, innover et avancer vers le succès durable.",
    image: img3
  },]

  export const Text_color_primary = "#7054cc"