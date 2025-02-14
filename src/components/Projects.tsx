export type Data = {
  id: number;
  Tool: string,
  Tittle: string,
  About: string,
  frontend?: string,
  database?:string,
  url?: string;
};

const Projects: Data[] = [
  {
    id: 1,
    Tool: "Next js",
    Tittle: "alt school replica",
    About: "",
    frontend: "Next js, Tailwind css, ",
    database:'Azure',
    url: "https://nextjs-frontend-git-master-binarybeastts-projects.vercel.app/",
  },
  {
    id: 2,
    Tool: "React Js",
    Tittle: "Countryflagfrontend.io challenge",
    About:
      "Replicated the Flag Country Challenge from Frontend Mentor. Integrated a REST API to dynamically fetch and display country data, showcasing efficient API handling, responsive design, and seamless navigation.",
    frontend:
      "React.js for dynamic interactivity, Tailwind CSS for styling, React Router for navigation,Async/await for API calls, Deployed on Vercel",
    url: "https://countryflagfrontendioproject-dejis-projects-06c81f30.vercel.app/",
  },
  {
    id: 3,
    Tool: "Next Js",
    Tittle: "FoodieLand",
    About:
      "Developed a responsive, multi-page website for FoodieLand with different page sections such as Home, About Us, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation using next Js framework.",
  frontend:
      "Next.js for dynamic UI components, Tailwind CSS for minimalist design, Vite for streamlined development, Deployed on Vercel",
    url: "https://justfooduiwebapp-three.vercel.app/",
  },
  
  {
    id: 4,
    Tool: "React Js",
    Tittle: "Breden Architecture",
    About:
      "Developed a responsive, multi-page website for Breden Architecture with sections such as Home, About Us, Services, Projects, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation.",
    frontend:
      "React.js for dynamic UI components, Tailwind CSS for styling and responsiveness, Vite for optimized development, Deployed on Vercel",
    url: "https://brenden-architecture.vercel.app/",
  },
 
];

export default Projects;
