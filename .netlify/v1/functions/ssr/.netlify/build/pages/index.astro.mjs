/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_hzdxNUoF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/umami-logo.DdPiobUx.jpeg","width":1655,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bartoszjaniuk/private/astro-dietetics/public/assets/umami-logo.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("http://localhost:4321/");
const $$BaseSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseSeo;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = logo } = Astro2.props;
  return renderTemplate`<link rel="canonical"${addAttribute(canonicalURL, "href")}><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="dietetyk kliniczny, psychodietetyk, dietetyk online, dietetyk racibórz, dietetyk umami, mgr aleksandra kajstura janiuk, gabinet dietetyczny, obliczenie zapotrzebowania, dieta, jadłospis, akademia fitness"><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(typeof image === "string" ? new URL(image, Astro2.url) : "", "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(typeof image === "string" ? new URL(image, Astro2.url) : "", "content")}>`;
}, "/Users/bartoszjaniuk/private/astro-dietetics/src/components/BaseSeo/BaseSeo.astro", void 0);

const getColStartAndEnd = (gridColumn) => {
  const [start, end] = gridColumn.split("/");
  return { start, end };
};
const Column = ({ entries, heading, gridColumn }) => {
  const { start, end } = getColStartAndEnd(gridColumn);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `md:col-start-${start} md:col-end-${end} flex flex-col gap-2 w-full bg-inherit text-white font-questrial`,
      children: [
        /* @__PURE__ */ jsx("h5", { className: "text-xl sm:text-lg 2xl:text-2xl font-bold text-start pb-2 text-white font-questrial border-b-2 border-b-primary w-24 mb-2", children: heading }),
        entries.map((entry, index) => {
          if (entry.type === "normal")
            return /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-sm sm:text-base 2xl:text-lg font-thin  text-start text-white",
                children: entry.content
              },
              index
            );
          if (entry.type === "link")
            return /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-sm sm:text-base 2xl:text-lgfont-medium text-start text-white",
                href: entry.link,
                children: entry.content
              },
              index
            );
          if (entry.type === "contact")
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-col gap-4 text-white border border-white",
                children: [
                  entry.title && /* @__PURE__ */ jsx("h5", { className: "text-sm sm:text-base 2xl:text-lg font-medium text-start text-white  border-b-white border-b-2", children: entry.title }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-white", children: [
                    entry.icon === "phone" && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base 2xl:text-lg text-white", children: "Tel." }),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          className: "text-sm sm:text-base 2xl:text-lg text-white",
                          href: `tel:${entry.content}`,
                          children: entry.content
                        }
                      )
                    ] }),
                    entry.icon === "mail" && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base 2xl:text-lg text-white", children: "Mail:" }),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          className: "text-sm sm:text-base 2xl:text-lg underline text-white",
                          href: `mailto:${entry.content}`,
                          children: entry.content
                        }
                      )
                    ] })
                  ] }, index)
                ]
              },
              index
            );
        })
      ]
    }
  );
};

var AppRoute = /* @__PURE__ */ ((AppRoute2) => {
  AppRoute2["HOME"] = "";
  AppRoute2["ABOUT"] = "O mnie";
  AppRoute2["OFFER"] = "Oferta";
  AppRoute2["MENUS"] = "Jadłospisy";
  AppRoute2["KALKULATOR"] = "Kalkulator";
  AppRoute2["CONTACT"] = "Kontakt";
  AppRoute2["PRICE_LIST"] = "Cennik";
  return AppRoute2;
})(AppRoute || {});
var RoutePath = /* @__PURE__ */ ((RoutePath2) => {
  RoutePath2["HOME"] = "/";
  RoutePath2["ABOUT"] = "/o-mnie";
  RoutePath2["OFFER"] = "/oferta";
  RoutePath2["MENUS"] = "/diety";
  RoutePath2["KALKULATOR"] = "/kalkulator";
  RoutePath2["CONTACT"] = "/kontakt";
  RoutePath2["PRICE_LIST"] = "/cennik";
  return RoutePath2;
})(RoutePath || {});

const FOOTER_OFFERT = {
  heading: "Oferta",
  gridColumn: "3/4",
  entries: [
    {
      type: "link",
      content: "Uslugi",
      link: RoutePath.OFFER
    },
    {
      type: "link",
      content: "Jadłospisy",
      link: RoutePath.MENUS
    },
    {
      type: "link",
      content: "Dieta Indywidualna",
      link: RoutePath.PRICE_LIST
    },
    {
      type: "link",
      content: "Kalkulator kalorii",
      link: RoutePath.KALKULATOR
    }
  ]
};
const FOOTER_ABOUT = {
  heading: "O mnie",
  gridColumn: "3/4",
  entries: [
    {
      type: "link",
      content: "Wyksztalcenie",
      link: RoutePath.ABOUT
    },
    {
      type: "link",
      content: "Certyfikaty",
      link: `${RoutePath.ABOUT}#certyfikaty`
    },
    {
      type: "link",
      content: "Jak rozpocząć współpracę",
      link: `${RoutePath.HOME}#jak-rozpoczac-wspolprace`
    }
  ]
};
const FOOTER_CONTACT = {
  heading: "Kontakt",
  gridColumn: "1/2",
  entries: [
    {
      type: "normal",
      content: "Akademia Fitness"
    },
    {
      type: "normal",
      content: "ul. Ocicka 4, 47-400 Racibórz"
    },
    {
      type: "normal",
      content: "Numer telefonu"
    },
    {
      type: "normal",
      content: "+ 48 570 498 067"
    }
  ]
};
[
  { title: AppRoute.ABOUT, url: "/o-mnie" },
  { title: AppRoute.OFFER, url: "/oferta" },
  { title: AppRoute.PRICE_LIST, url: "/cennik" },
  { title: AppRoute.MENUS, url: "/diety" },
  { title: AppRoute.CONTACT, url: "/kontakt" }
];

const statuteReference = "/regulamin.pdf";

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "w-full bg-primary text-white h-full ", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto h-full primary-selection bg-inherit", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 py-8 responsive-padding bg-inherit text-inherit", children: [
      /* @__PURE__ */ jsx(Column, { ...FOOTER_CONTACT }),
      /* @__PURE__ */ jsx(Column, { ...FOOTER_OFFERT }),
      /* @__PURE__ */ jsx(Column, { ...FOOTER_ABOUT })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-white text-primary lg:h-16 flex lg:items-center py-4 ", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto responsive-padding flex  justify-between bg-inherit", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-xl sm:text-base 2xl:text-2xl  bg-inherit", children: "© 2022 Gabinet Dietetyczny UMAMI" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-xl sm:text-base 2xl:text-2xl", children: [
        /* @__PURE__ */ jsx("a", { href: statuteReference, target: "_blank", children: "Regulamin i RODO" }),
        /* @__PURE__ */ jsx("a", { href: "/polityka-cookies", children: "Polityka prywatności i cookies" })
      ] })
    ] }) })
  ] });
};

const MENU_LINKS = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "O mnie",
    path: "/o-mnie"
  },
  {
    title: "Oferta",
    path: "/oferta"
  },
  {
    title: "Diety",
    path: "/diety"
  },
  {
    title: "Kontakt",
    path: "/kontakt"
  }
];

const INSTAGRAM_URL = "https://www.instagram.com/dietetyk_umami/";
const FACEBOOK_URL = "https://www.facebook.com/dietetyk.umami/";
const TIKTOK_URL = "https://www.tiktok.com/@dietetyk.umami?_t=8oILTb37kQ4&_r=1";

const navigationVariant = {
  hidden: {
    y: "-100px",
    height: 0,
    x: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
    clipPath: `circle(30px at 40px 40px)`
  },
  visible: {
    clipPath: `circle(100vh at 40px 40px)`,
    height: "100vh",
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
const staggerItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
const ResponsiveLinks = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleButton = () => setIsOpen((prev) => !prev);
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToggleButton, { onClick: toggleButton, isOpen }),
    /* @__PURE__ */ jsxs(NavigationList, { isOpen, children: [
      MENU_LINKS.map((link, index) => /* @__PURE__ */ jsx(NavigationLink, { ...link }, index)),
      /* @__PURE__ */ jsx(SocialIcons, {})
    ] })
  ] });
};
const ToggleButton = ({
  onClick,
  isOpen
}) => {
  return /* @__PURE__ */ jsxs("button", { className: "burger z-40", onClick, children: [
    /* @__PURE__ */ jsx("span", { className: `${isOpen ? "opened" : ""} line` }),
    /* @__PURE__ */ jsx("span", { className: `${isOpen ? "opened" : ""} line` }),
    /* @__PURE__ */ jsx("span", { className: `${isOpen ? "opened" : ""} line` })
  ] });
};
const NavigationLink = ({ path, title }) => {
  return /* @__PURE__ */ jsx(
    motion.li,
    {
      variants: staggerItemVariant,
      className: "relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center",
      children: /* @__PURE__ */ jsx("a", { href: path, children: title })
    }
  );
};
const SocialIcons = () => /* @__PURE__ */ jsxs("ul", { className: "flex md:flex gap-8 list-none", children: [
  /* @__PURE__ */ jsx(
    motion.li,
    {
      variants: staggerItemVariant,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      children: /* @__PURE__ */ jsx("a", { href: INSTAGRAM_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 32, src: "/assets/ig.svg", alt: "Profil na Instagram" }) })
    }
  ),
  /* @__PURE__ */ jsx(
    motion.li,
    {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      variants: staggerItemVariant,
      children: /* @__PURE__ */ jsx("a", { href: FACEBOOK_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 32, src: "/assets/fb.svg", alt: "Profil na Facebook" }) })
    }
  ),
  /* @__PURE__ */ jsx(
    motion.li,
    {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      variants: staggerItemVariant,
      children: /* @__PURE__ */ jsx("a", { href: TIKTOK_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 32, src: "/assets/tiktok.svg", alt: "Profil na Tiktok" }) })
    }
  )
] });
const NavigationList = ({
  children,
  isOpen
}) => /* @__PURE__ */ jsx(
  motion.ul,
  {
    initial: "hidden",
    animate: isOpen ? "visible" : "hidden",
    variants: navigationVariant,
    className: "text-2xl absolute top-[95px] w-full bg-white left-0 lg:hidden py-8  flex flex-col gap-10 overflow-y-scroll items-center my-auto z-50",
    children
  }
);

const makePathFromLink = (path) => path.slice(1).replace(" ", "-");
const Navbar = ({ currentPath }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white w-full fixed z-[100]", children: /* @__PURE__ */ jsxs("nav", { className: "container responsive-padding mx-auto h-24 flex items-center justify-between gap-16 relative z-50 ", children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/umami-logo.jpeg",
        className: "w-48 mr-4",
        alt: "Gabinet Dietetyczny Umami logo"
      }
    ) }),
    /* @__PURE__ */ jsx(ResponsiveLinks, {}),
    /* @__PURE__ */ jsx("div", { className: "links", children: MENU_LINKS.map((link, index) => {
      const isActive = currentPath === makePathFromLink(link.path);
      return /* @__PURE__ */ jsx(
        "a",
        {
          className: `relative text-xl md:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap   ${isActive ? "text-primary" : null}`,
          href: link.path,
          children: link.title
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "gap-4 hidden xl:flex items-center", children: [
      /* @__PURE__ */ jsx("button", { className: "border border-primary rounded-sm px-4 py-2 text-xl ", children: "Napisz do mnie" }),
      /* @__PURE__ */ jsx("button", { className: "bg-primary text-white rounded-sm px-4 py-2 text-xl ", children: "Kalkulator" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "hidden lg:flex gap-4 h-[96px] list-none items-center", children: [
      /* @__PURE__ */ jsx(motion.li, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx("a", { href: INSTAGRAM_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 24, src: "/assets/ig.svg", alt: "Profil na Instagram" }) }) }),
      /* @__PURE__ */ jsx(motion.li, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx("a", { href: FACEBOOK_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 24, src: "/assets/fb.svg", alt: "Profil na Facebook" }) }) }),
      /* @__PURE__ */ jsx(motion.li, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx("a", { href: TIKTOK_URL, className: "cursor-pointer", children: /* @__PURE__ */ jsx("img", { width: 24, src: "/assets/tiktok.svg", alt: "Profil na TikTok" }) }) })
    ] })
  ] }) });
};

const $$Astro$1 = createAstro("http://localhost:4321/");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "currentPath": currentPath, "client:component-hydration": "load", "client:component-path": "/Users/bartoszjaniuk/private/astro-dietetics/src/components/Navbar/Navbar", "client:component-export": "Navbar" })}`;
}, "/Users/bartoszjaniuk/private/astro-dietetics/src/components/Navbar/Nav.astro", void 0);

const Cookie = () => {
  const [cookie, setCookie] = useState("");
  const [isAvaliable, setIsAvaliable] = useState(true);
  useEffect(() => {
    const cookie2 = localStorage.getItem("cookie");
    if (cookie2) {
      setIsAvaliable(true);
      setCookie(cookie2);
    } else {
      setIsAvaliable(false);
    }
  }, []);
  const handleSetCookie = () => {
    localStorage.setItem("cookie", (/* @__PURE__ */ new Date()).toUTCString());
    setCookie((/* @__PURE__ */ new Date()).toUTCString());
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !cookie && !isAvaliable ? /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 w-full bg-softGray z-[1000] shadow-md flex items-center px-6 py-40", children: /* @__PURE__ */ jsxs("div", { children: [
    "Ta strona wykorzystuje pliki cookies (tzw. ciasteczka). Kliknij",
    /* @__PURE__ */ jsx("button", { onClick: handleSetCookie, children: "Akceptuj" }),
    ", aby ta informacja nie pojawiała się więcej. Kliknij",
    " ",
    /* @__PURE__ */ jsx("a", { href: "/polityka-cookies", children: "Polityka Cookies" }),
    ", aby dowiedzieć się więcej."
  ] }) }) : "" });
};

const $$Astro = createAstro("http://localhost:4321/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/android-chrome-512x512.png"><link rel="icon" href="/android-chrome-192x192.png"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "BaseSeo", $$BaseSeo, { "title": title, "description": description })}${renderHead()}</head> <body> <div class="min-h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="pt-[96px] min-h-screen h-full">${renderSlot($$result, $$slots["default"])}</div> ${renderComponent($$result, "Cookie", Cookie, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bartoszjaniuk/private/astro-dietetics/src/components/Cookie/Cookie", "client:component-export": "Cookie" })} ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bartoszjaniuk/private/astro-dietetics/src/components/Footer/Footer", "client:component-export": "Footer" })} </div> </body></html>`;
}, "/Users/bartoszjaniuk/private/astro-dietetics/src/_ui/Layout.astro", void 0);

const ModalContext = React.createContext(
  void 0
);
const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [diet, setDiet] = React.useState(void 0);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  return /* @__PURE__ */ jsx(
    ModalContext.Provider,
    {
      value: { isModalOpen, closeModal, openModal, chooseDiet: setDiet, diet },
      children
    }
  );
};

const MotionComponent = ({
  as,
  ...props
}) => {
  const Component = as || "div";
  const MotionCustomComponent = motion(Component);
  return /* @__PURE__ */ jsx(MotionCustomComponent, { ...props });
};

const SlideX = ({
  children,
  from = "left",
  duration = 0.9,
  className,
  component = "div"
}) => {
  const slide = from === "left" ? -100 : 100;
  const variants = {
    hidden: { opacity: 1, scale: 0, x: slide },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration
      }
    }
  };
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      as: component,
      className,
      viewport: { once: true },
      variants,
      initial: "hidden",
      whileInView: "visible",
      children
    }
  );
};

const variantMap = {
  default: "text-white bg-primary hover:text-primary hover:bg-white hover:border-primary",
  inverted: "text-primary bg-white hover:text-white hover:bg-primary hover:border-white"
};
const LinkButton = ({
  navigateTo,
  text,
  variant = "default",
  className
}) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: `w-fit px-8 py-4 border border-transparent rounded-sm cursor-pointer transition-all hover:skew-y-1 hover:scale-110 xl:text-3xl xl:px-6 xl:py-6 ${variantMap[variant]} ${className}`,
      href: navigateTo,
      children: text
    }
  );
};

const AbstractShape = () => {
  return /* @__PURE__ */ jsx("span", { className: "absolute -bottom-8 -left-[20rem] w-[25rem] h-[25rem] lg:left-[-10%] lg:top-0 xl:w-[24rem] xl:h-[24rem] rounded-full border border-primary after:absolute after:content-[''] after:w-[98%] after:h-[98%] after:opacity-70 after:flex after:items-center after:justify-center after:bg-primary after:rounded-full" });
};

const Offer = () => {
  return /* @__PURE__ */ jsx("main", { className: "relative bg-white min-h-screen lg:min-h-[93vh] xl:min-h-screen z-50", children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen lg:min-h-[93vh] xl:min-h-screen flex flex-col lg:flex-row bg-white container responsive-padding mx-auto gap-8 xl:gap-0", children: [
    /* @__PURE__ */ jsx(AbstractShape, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col gap-8 justify-center items-center lg:items-start pt-4 md:pt-8 lg:pt-0 lg:w-1/2 ", children: [
      /* @__PURE__ */ jsx(
        SlideX,
        {
          component: "h2",
          from: "left",
          className: "text-5xl text-primary text-center",
          children: "Cześć! Nazywam się"
        }
      ),
      /* @__PURE__ */ jsx(
        SlideX,
        {
          component: "h2",
          from: "right",
          className: "text-5xl font-black text-primary text-center lg:text-left",
          children: "mgr Aleksandra Kajstura-Janiuk"
        }
      ),
      /* @__PURE__ */ jsx(
        SlideX,
        {
          component: "p",
          from: "left",
          className: "text-4xl font-light max-w-[600px] text-primary font-lato leading-[3rem] text-center lg:text-left",
          children: "Zdrowy styl życia, zrównoważona dieta i trochę aktywności fizycznej - klucz do Twojej wymarzonej sylwetki!"
        }
      ),
      /* @__PURE__ */ jsx(
        LinkButton,
        {
          className: "w-full text-center text-3xl md:text-4xl lg:text-left md:w-fit md:self-center lg:self-start",
          text: "Dowiedz się więcej",
          navigateTo: RoutePath.ABOUT
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 lg:w-1/2 flex items-center justify-center ", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full h-full max-h-screen flex items-end justify-center lg:justify-end bg-primary",
        style: { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/offer.png",
            alt: "Landing Image",
            className: "object-contain w-auto max-h-[100vh] max-w-full md:max-h-[80vh] lg:max-h-screen"
          }
        )
      }
    ) })
  ] }) });
};

const useInitMailer = () => {
  React.useEffect(() => {
    fetch("https://umami-get-mailed.onrender.com/api/v1/app/init", {
      method: "POST"
    });
  }, []);
};

const text = `„Sukces jest jak drabina – nie wejdziesz na nią trzymając ręce w
          kieszeni.” – Philip Wylie`;
const FixedQuote = () => {
  return /* @__PURE__ */ jsxs("section", { className: "min-h-80 w-full relative container responsive-padding mx-auto flex items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-20 fixed left-[0%] top-[0%] w-full h-full bg-fixedQuote xl:bg-no-repeat xl:bg-cover" }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl", children: text })
  ] });
};

const SlideY = ({
  children,
  from = "bottom",
  duration = 0.9,
  className,
  component
}) => {
  const slide = from === "bottom" ? 100 : -100;
  const variants = {
    hidden: { opacity: 1, scale: 0, y: slide },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration
      }
    }
  };
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      as: component,
      className,
      viewport: { once: true },
      variants,
      initial: "hidden",
      whileInView: "visible",
      children
    }
  );
};

const diets = [
  {
    clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_85%)]",
    title: "Dieta dla par",
    backgroundImage: "[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    details: {
      size: "2000 KCAL",
      descriptions: [
        "Wywiad zdrowotny i żywieniowy",
        "Pomiar na analizatorze składu masy ciała",
        "Omówienie dotychczasowej diety i błędów żywieniowych",
        "Edukacja żywieniowa i indywidualne zalecenia"
      ]
    }
  },
  {
    clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_85%)]",
    title: "Dieta Indywidualna",
    backgroundImage: "[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/4964123/pexels-photo-4964123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    details: {
      size: "Dieta Indywidualna",
      descriptions: [
        "Wywiad zdrowotny i żywieniowy",
        "Pomiar na analizatorze składu masy ciała",
        "Omówienie dotychczasowej diety i błędów żywieniowych",
        "Edukacja żywieniowa i indywidualne zalecenia"
      ]
    }
  },
  {
    clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]",
    title: "Gotowe Jadłospisy",
    backgroundImage: "[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    details: {
      size: "1600 KCAL",
      descriptions: [
        "Dania na słono",
        "Dania na słodko",
        "4 posiłki dziennie",
        "Jadłospis 7-dniowy"
      ]
    }
  }
];
const FloatingCard = ({ backgroundImage, clipPath, details, title }) => {
  return /* @__PURE__ */ jsx(
    SlideY,
    {
      from: "bottom",
      className: "group h-[600px] xl:h-[550px]  flex [perspective:1000px]",
      children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              id: "Header",
              className: `bg-cover h-72 bg-blend-screen rounded-t-md ${clipPath} ${backgroundImage} `,
              children: [
                " ",
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: "Heading",
                    className: "absolute right-0 left-0 top-0 xl:top-1/2 flex justify-center items-center",
                    children: /* @__PURE__ */ jsx("h1", { className: "text-4xl xl:text-4xl uppercase text-white [background-image:linear-gradient(to_left,#B29F94,#603813)] min-h-24 xl:min-h-fit flex items-center justify-center w-full xl:w-fit p-1 rounded-md text-center", children: title })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col justify-center items-center gap-4 pt-8 lg:pt-0", children: details.descriptions.map((detail) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "border-b-[1px] border-b-softGray py-2",
                children: /* @__PURE__ */ jsx("p", { className: "text-primary text-center", children: detail })
              },
              detail
            )) }),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                navigateTo: AppRoute.MENUS,
                className: "w-full text-center text-xl lg:hidden pt-4",
                text: "Przejdź do oferty"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 h-full w-full rounded-xl [background-image:linear-gradient(to_bottom,#57463c,#603813)]  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex min-h-full flex-col items-center justify-center gap-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-white text-5xl", children: title }),
          /* @__PURE__ */ jsx(
            LinkButton,
            {
              navigateTo: AppRoute.MENUS,
              variant: "inverted",
              className: "text-center text-3xl md:text-4xl ",
              text: "Przejdź do oferty"
            }
          )
        ] }) })
      ] })
    },
    title
  );
};
const classNameAfter$2 = 'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-softGray after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_75%)]';
const classNameBefore$2 = 'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-white';
const ThreeCards = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `min-h-[75rem] flex flex-col items-center justify-center z-10 py-8 gap-10 lg:gap-16 ${classNameAfter$2} ${classNameBefore$2}`,
      children: [
        /* @__PURE__ */ jsx(
          SlideY,
          {
            component: "h2",
            from: "bottom",
            className: "text-5xl font-black text-primary text-center container responsive-padding mx-auto pt-16 xl:pt-0",
            children: "Usługi dostosowane do Twoich potrzeb"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container responsive-padding mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex object-center xl:py-16", children: /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10", children: diets.map((diet, i) => /* @__PURE__ */ jsx(FloatingCard, { ...diet }, i)) }) }) }),
        /* @__PURE__ */ jsxs(
          SlideY,
          {
            component: "h2",
            from: "bottom",
            className: "text-primary text-center container responsive-padding mx-auto text-2xl py-8 max-w-[800px]",
            children: [
              "Sprawdź, ile powinieneś spożywać kalorii w ciągu dnia,",
              " ",
              /* @__PURE__ */ jsx("a", { href: AppRoute.KALKULATOR, className: "text-primary underline", children: "dzięki kalkulatorowi kalorii!" })
            ]
          }
        )
      ]
    }
  );
};

const steps = [
  {
    title: "CEL",
    description: "Zastanów się co chcesz osiągnąć. Jaki jest Twój cel? Może zmagasz się z jakimś schorzeniem? Chcesz schudnąć - zredukować poziom tkanki tłuszczowej, a może przytyć?",
    icon: /* @__PURE__ */ jsx("img", { width: 80, src: "/assets/target.svg", alt: "Cel" })
  },
  {
    title: "KONTAKT",
    description: "Napisz do mnie lub zadzwoń, umówimy się na pierwszą konsultację stacjonarnie lub online. Jeśli posiadasz, wyniki badań krwi również je wyślij do mnie na maila.",
    icon: /* @__PURE__ */ jsx("img", { width: 80, src: "/assets/contact.svg", alt: "Kontakt" })
  },
  {
    title: "OPIEKA",
    description: `Po pierwszej konsultacji zdecydujesz jaki plan żywieniowy lub pakiet wybierasz. Ceny znajdziesz w zakładce cennik.`,
    icon: /* @__PURE__ */ jsx("img", { width: 80, src: "/assets/healthcare.svg", alt: "Opieka" })
  },
  {
    title: "DZIAŁANIE",
    description: "Profil pacjenta online i aplikacja mobilna – to tam będzie udostępniony Twój jadłospis oraz postępy (istnieje również możliwość, aby wysłać go na Twojego maila). Teraz wszystko zależy od Ciebie, a ja będę Ci kibicować i wspierać!",
    icon: /* @__PURE__ */ jsx("img", { width: 80, src: "/assets/bodyweight.svg", alt: "Działanie" })
  }
];
const Card = ({ description, icon, title }) => {
  return /* @__PURE__ */ jsx(SlideY, { from: "bottom", children: /* @__PURE__ */ jsxs("div", { className: "bg-white h-full rounded-md flex flex-col gap-4 items-center p-8 shadow-lg transition-all hover:-translate-y-6 hover:scale-105", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full min-h-28 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl text-primary", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-primary", children: description })
  ] }) });
};
const classNameAfter$1 = 'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-white after:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)]';
const classNameBefore$1 = 'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-softGray';
const Content$1 = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `min-h-[65rem] flex flex-col items-center z-10 bg-white py-8 gap-10 lg:gap-16 ${classNameAfter$1} ${classNameBefore$1}`,
      children: [
        /* @__PURE__ */ jsx(
          SlideY,
          {
            component: "h2",
            from: "bottom",
            className: "text-5xl font-black text-primary text-center container responsive-padding mx-auto",
            children: "Jak rozpocząć ze mną współpracę w czterech krokach"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container responsive-padding mx-auto relative", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden xl:block absolute left-0 bottom-0 w-full h-full", children: /* @__PURE__ */ jsx("img", { src: "/assets/wavyline.svg", alt: "test" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex object-center lg:py-16 sm:py-24 ", children: /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10", children: steps.map((step, i) => /* @__PURE__ */ jsx(Card, { ...step }, i)) }) })
        ] }),
        /* @__PURE__ */ jsx(LinkButton, { navigateTo: "#napiszdomnie", text: "Napisz do mnie" })
      ]
    }
  );
};
const Cooperation = () => {
  return /* @__PURE__ */ jsx(Content$1, {});
};

const classNameAfter = 'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-softGray after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_75%)]';
const classNameBefore = 'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-white';
const CalculatorIntro = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: `min-h-[60rem] flex items-center z-10 py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container responsive-padding mx-auto flex flex-col xl:flex-row gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-8 xl:gap-16", children: [
          /* @__PURE__ */ jsxs(
            SlideX,
            {
              component: "h1",
              className: "text-4xl md:text-6xl xl:text-7xl flex flex-col gap-3 xl:text-center",
              children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  "Jaka",
                  /* @__PURE__ */ jsx("span", { className: "pl-3 md:border md:border-primary md:px-8 md:py-2 md:[border-radius:30%_70%_27%_73%/49%_31%_69%_51%]", children: "kaloryczność" })
                ] }),
                /* @__PURE__ */ jsx("p", { children: "będzie dla Ciebie " }),
                /* @__PURE__ */ jsx("p", { className: "md:border md:border-primary md:p-8 md:[border-radius:30%_70%_27%_73%/49%_31%_69%_51%] w-fit", children: "odpowiedia?" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(SlideX, { from: "right", component: "p", className: "text-2xl xl:text-3xl", children: "Skorzystaj z kalkulatora, aby dowiedzieć się, jakie obecnie masz zapotrzebowanie kaloryczne. Po wpisaniu swoich danych dowiesz się ile powinieneś jeść, aby osiągnąć swój cel." }),
          /* @__PURE__ */ jsxs(SlideY, { className: "flex flex-col text-xl lg:flex-row gap-2 lg:gap-8", children: [
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                navigateTo: AppRoute.KALKULATOR,
                className: "w-full text-center xl:w-fit xl:text-left",
                text: "Przejdź do kalkulatora"
              }
            ),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                navigateTo: "#contact",
                className: "w-full text-center xl:w-fit xl:text-left",
                text: "Napisz do mnie",
                variant: "inverted"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/personWithPhone.svg",
            alt: "Osoba patrząca na telefon komórkowy"
          }
        ) })
      ] })
    }
  );
};

const Content = () => {
  useInitMailer();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Offer, {}),
    /* @__PURE__ */ jsx(FixedQuote, {}),
    /* @__PURE__ */ jsx(ThreeCards, {}),
    /* @__PURE__ */ jsx(Cooperation, {}),
    /* @__PURE__ */ jsx(CalculatorIntro, {})
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsx(ModalProvider, { children: /* @__PURE__ */ jsx(Content, {}) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gabinet Dietetyczny UMAMI - mgr Aleksandra Kajstura-Janiuk", "description": "Dietetyk kliniczny i psychodietetyk. Dietetyk Racib\xF3rz i online. Indywidualny jad\u0142ospis dopasowany do Twoich potrzeb" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bartoszjaniuk/private/astro-dietetics/src/_views/Home/Home", "client:component-export": "Home" })} ` })}`;
}, "/Users/bartoszjaniuk/private/astro-dietetics/src/pages/index.astro", void 0);

const $$file = "/Users/bartoszjaniuk/private/astro-dietetics/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
