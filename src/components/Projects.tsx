export type Data = {
  id: number;
  Tool: string,
  Tittle: string,
  About: string,
  frontend?: string,
  // database?:string,
  url?: string;
};

const Projects: Data[] = [
  {
    id: 1,
    Tool: 'Next Js',
    Tittle: 'Binarry',
    About: "Developed a multi-page consultation website for a client using Next.js and TypeScript. The site includes a dynamic homepage highlighting the company's services, a dedicated page outlining how the business supports client growth, and a contact page for inquiries and engagement.",
    frontend:'Next Js | TypeScript | Framer Motion | Tailwind CSS | Vercel',
    url: 'https://consult-web-rosy.vercel.app/'
  },
   {
    id: 2,
    Tool: 'React Js',
    Tittle: 'Task Manager App',
    About: 'This is a fully functional **Todo Application** built with **React** and **TypeScript**, the app lets users manage tasks with features like **priority sorting**, **due dates with notifications**, and **local storage persistence**.',
    frontend: 'React | TypeScript | Fluent UI Icons** (`@fluentui/react-icons`) | **UUID** (`uuid`) — for unique task IDs**LocalStorage** — for persisting tasks across sessions**Browser Notifications API** — for reminders',
    url:'https://taskmanager-flame.vercel.app/',
  },

  // {
  //   id: 2,
  //   Tool: "Next js",
  //   Tittle: "alt school replica",
  //   About: "",
  //   frontend: "Next js, Tailwind css, ",
  //   database:'Azure',
  //   url:"https://nextjs-frontend-git-deji-binarybeastts-projects.vercel.app/",
  // },

  {
    id: 3,
    Tool: "Next Js",
    Tittle: "",
    About:
      "This is a responsive multi-page website built with Next.js and Chakra UI, featuring pages like Home, About, Services, and Contact. The design emphasizes clean layout, accessibility, and mobile responsiveness. Chakra UI was used for fast and consistent component styling, while Next.js ensures optimized performance and routing. The project is fully deployed and live on Vercel.",
    frontend:
      "Next js for dynamic UI components | chakra UI for styling and responsiveness | Deployed on Vercel",
    url: "https://testts-one.vercel.app/",
  },

  {
    id: 4,
    Tool: "React Js",
    Tittle: "Countryflagfrontend.io challenge",
    About:
      "Replicated the Flag Country Challenge from Frontend Mentor. Integrated a REST API to dynamically fetch and display country data, showcasing efficient API handling, responsive design, and seamless navigation.",
    frontend:
      "React.js for dynamic interactivity | Tailwind CSS for styling | React Router for navigation | Async/await for API calls | Deployed on Vercel",
    url: "https://countryflagfrontendioproject-dejis-projects-06c81f30.vercel.app/",
  },
  
  {
    id: 5,
    Tool: "Next Js",
    Tittle: "FoodieLand",
    About:
      "Developed a responsive, multi-page website for FoodieLand with different page sections such as Home, About Us, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation using next Js framework.",
  frontend:
      "Next.js for dynamic UI components | Tailwind CSS for minimalist design | Vite for streamlined development | Deployed on Vercel",
    url: "https://justfooduiwebapp-three.vercel.app/",
  },

  {
    id: 6,
    Tool: "React Js",
    Tittle: "Breden Architecture",
    About:
      "Developed a responsive, multi-page website for Breden Architecture with sections such as Home, About Us, Services, Projects, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation.",
    frontend:
      "React.js for dynamic UI components | Tailwind CSS for styling and responsiveness | Vite for optimized development | Deployed on Vercel",
    url: "https://brenden-architecture.vercel.app/",
  },
 
];

export default Projects;
