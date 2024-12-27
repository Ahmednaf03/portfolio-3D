
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#exp',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
 
  {
    title: 'CarePro - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePro integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio that enhance operational workflows.',
    href: 'https://adn-care-pro.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-6, 7, 0] : isMobile ? [-12, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Next.js',
    pos: 'version',
    duration: '14.2.16',
    title: "My main go-to framework for building full-stack web applications. It always has been next.js for versatile SEO friendly features such as SSR, SSG,CSR,image optimization and more  .",
    icon: '/assets/next.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SpringBoot',
    pos: 'version',
    duration: '3.3.5',
    title: "I use SpringBoot framework for building REST APIs, building web applications, because of its ease of use and features such as Auto configuration, security, spring initializr and more . ",
    icon: '/assets/springboot.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Java-EE',
    pos: 'version',
    duration: '21.0',
    title: "Java has been my backend language for numerous reasons such as platform independance, scalability, multi-threading, robustness and security OOP, backwards compatabilty and more.",
    icon: '/assets/java.svg',
    animation: 'salute',
  },
];