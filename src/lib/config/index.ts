import type { Link } from "../types";

export const SITE = {
  title: "Un Simple Programador",
  description: "Un sitio de noticias para autodidactas",
  author: "Carlos Fajardo",
  url: "https://unsimpleprogramador.com/",
  github: "https://github.com/CarlDesigner",
  locale: "es-CO",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/programacion",
    text: "Programación",
  },
  {
    href: "/categories/tips",
    text: "Tips & Trucos",
  },
  {
    href: "/categories/news",
    text: "Noticias y Tendencias",
  },
  {
    href: "/categories/recursos",
    text: "Recursos",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Acerca de",
  },
  {
    href: "/authors",
    text: "Autores",
  },
  {
    href: "/contact",
    text: "Contacto",
  },
  {
    href: "/privacy",
    text: "Privacidad",
  },
  {
    href: "/terms",
    text: "Términos",
  },
  {
    href: "/cookie-policy",
    text: "Política de cookies",
  },
  {
    href: "https://unsimpleprogramador.com/rss.xml",
    text: "RSS",
  },
  {
    href: "https://unsimpleprogramador.com/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/CarlDesigner",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.t.me",
    text: "Web",
    icon: "globe",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  }
];
