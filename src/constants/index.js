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
       "Discover, buy, and track your favorite games effortlessly. Browse by categories, stay ahead with upcoming releases, and share your thoughts with the gaming community.",
      tags: [
        {
          name: "next 14",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "Postgresql",
          color: "blue-text-gradient",
        },{
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: gamestore,
      source_code_link: "https://github.com/gurkanmaral/next14-game-store",
      demo: "https://next14-game-store.vercel.app/"
    },
    {
      name: "React Dashboard with laravel 10",
      description:
        "A Dashboard created by react on frontend laravel sail for backend",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "laravel 10",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: oculoss,
      source_code_link: "https://github.com/gurkanmaral/react-laravel-dashboard",
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
      name: "Twitch Clone App",
      description:
        "Twitch-inspired app where you can initiate live streams, interact with viewers through comments, block unwanted users, and effortlessly toggle the chat feature on or off.",
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
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/gurkanmaral/twitch-clone",
      demo: "https://twitch-clone-sooty.vercel.app/",
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