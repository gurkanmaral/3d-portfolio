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
    threads,
    socialAppwrite,
    movieapp,
    facebookk
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
      demo: "https://game-store-theta-wheat.vercel.app/"
    },
    {
      name: "E-Store App",
      description:
        "An e-commerce app has been developed using Payload CMS and integrated with Stripe.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "payload CMS",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },
      ],
      image: oculoss,
      source_code_link: "https://github.com/gurkanmaral/e-commerce",
      demo:"https://e-commerce-3ecf73e.payloadcms.app/",
    },
    {
      name: "Movie App",
      description:
      "a web app for tracking watched movies and TV shows, with features for ratings, likes, comments, and watchlists. It also includes a social feed to see friends' activity.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: movieapp,
      source_code_link: "https://github.com/gurkanmaral/movie-next",
      demo: "https://movie-next-fawn-zeta.vercel.app/",
    },
    {
      name: "Social Media App",
      description:
        "Social media app where you can follow your friends, check their posts, and add comments on them. You can search for people and posts. Also, you can have a chat with them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        
      ],
      image: facebookk,
      source_code_link: "https://github.com/gurkanmaral/social-media",
     
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
      demo: "https://threads-cs6g8lnst-gurkanmaral.vercel.app/",
    },
    {
      name: "Social Media with Appwrite",
      description:
        "Follow friends, explore their posts, and add your thoughts through comments. Effortlessly search for people and posts to stay in the loop. Plus, enjoy private conversations with the built-in chat feature.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },        
      ],
      image: socialAppwrite,
      source_code_link: "https://github.com/gurkanmaral/social-media-appwrite",
      demo: "https://social-media-appwrite-a3ll-fwo9uuksr-gurkanmaral.vercel.app/",
    },
  ];
  
  export { services, technologies, projects};