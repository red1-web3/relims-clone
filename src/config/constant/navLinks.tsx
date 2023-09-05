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
    url: "https://www.relims.com/about-us",
  },
  {
    label: "Solutions",
    url: "#",
    subLinks: [
      {
        label: "Genetics",
        url: "https://www.relims.com/solutions-genetics",
      },
      {
        label: "Infetious Disease",
        url: "https://www.relims.com/solutions-infectious-disease",
      },
      {
        label: "Toxiology",
        url: "https://www.relims.com/solutions-genetics",
      },
      {
        label: "Blood Chemistry",
        url: "https://www.relims.com/solutions-blood-chemistry",
      },
      {
        label: "Cannabis",
        url: "https://www.relims.com/solutions-cannabis",
      },
    ],
  },
  {
    label: "Features",
    url: "https://www.relims.com/features",
  },
  {
    label: "Contact Us",
    url: "https://www.relims.com/get-in-touch",
  },
];
