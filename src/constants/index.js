import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    
    
    
    
    carrent,
    jobit,
    threejs,
    gamestore,
    oculoss,
    threads
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  
  
 
  const projects = [
    {
      name: "Game Store App",
      description:
        "Game store app that similar to steam and epic games store.You can add games to your cart.Search games based on categories and popularity.Also you can see upcoming games.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
      ],
      image: gamestore,
      source_code_link: "https://github.com/gurkanmaral/game-store",
      demo: "https://maralcreative.com/"
    },
    {
      name: "E-Store App",
      description:
        "Web application that you can see companies products and navigate etsy link of spesific products.Also, you can find information about products such as features and fabric details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: oculoss,
      source_code_link: "https://github.com/gurkanmaral/oculos",
      demo:"https://oculos34.com/",
    },
    {
      name: "Threads App",
      description:
        "Clone of Threads App. You can share threads, add comments to other people's threads.Also you can create communities and post threads to the communities.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "clerk",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/gurkanmaral/threads-app",
      demo: "https://threads-d2utrbosl-gurkanmaral.vercel.app/",
    },
  ];
  
  export { services, technologies, projects};