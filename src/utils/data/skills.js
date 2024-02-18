import {
  Ellipses,
  GatsbyLogo,
  TailwindLogo,
  TsLogo,
} from "../../components/atoms/svg";

import React from "react";

export const skillsData = [
  {
    Logo: <TsLogo width="100%" />,
    heading: "TypeScript",
    bodyList: [
      "Strongly Typed JavaScript!",
      "Typesafe, API-Driven, React Application Development",
      "Unit Testing with Jest & Enzyme",
      `ES6 / ES${new Date().getFullYear()}+`,
    ],
  },
  {
    Logo: <TailwindLogo width="100%" />,
    heading: "Styling & Animation",
    bodyList: [
      "Advanced CSS Processing",
      "CSS-Modules | TailwindCSS | SCSS | CSS-in-JS",
      "Animations with Emotion, Framer-Motion, and GSAP",
      "Implementation of Modern Design Trends and -morphisms",
    ],
  },
  {
    Logo: <GatsbyLogo width="100%" />,
    heading: "Headless CMS",
    bodyList: [
      "Wordpress-Templating with GatsbyJS & GraphQL",
      "Source Data from Multiple APIs",
      "No-Code content-management for clients via Custom Post Types and Advanced Custom Fields",
    ],
  },

  {
    Logo: <Ellipses width="100%" className="skills-ellipses-icon" />,
    heading: "Other...",
    bodyList: [
      "CMS Development with Wordpress, Shopify, Wix, Squarespace, Etc.",
      "SVGs: Optization, Integration, Animation",
      "Deployment with Amazon Web Services",
    ],
  },
];
