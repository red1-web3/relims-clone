export type NavLinkProps = {
  label: string;
  url: string;
  subLinks?: {
    label: string;
    url: string;
  }[];
};

export const navLinks: NavLinkProps[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "#",
  },
  {
    label: "Solutions",
    url: "#",
    subLinks: [
      {
        label: "Genetics",
        url: "#",
      },
      {
        label: "Infetious Disease",
        url: "#",
      },
      {
        label: "Toxiology",
        url: "#",
      },
      {
        label: "Blood Chemistry",
        url: "#",
      },
      {
        label: "Cannabis",
        url: "#",
      },
    ],
  },
  {
    label: "Features",
    url: "#",
  },
  {
    label: "Contact Us",
    url: "#",
  },
];
