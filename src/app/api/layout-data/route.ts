import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Docs",
    path: "/documentation",
    newTab: false,
  }
];


const footerData = {
  name: "Leema Solutions",
  tagline: "Powering world-class broadcasts and productions with over 12 years of industry expertise.",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "hello@leemasolutions.com",
      href: "https://www.wrappixel.com/"
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Mumbai, India",
      href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8"
    }
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/projects" },
    // { name: "Terms", href: "/terms-and-conditions" },
    // { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Error 404", href: "/not-found" }  
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" }
  ],
  // copyright: "© Leema Solutions copyright 2025"
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData
  });
};