export type Data = {
  id: number;
  Tool: string;
  Tittle: string;
  About: string;
  Technology?: string;
  database?: string | null;
  url?: string;
};

const Projects: Data[] = [
  {
    id: 1,
    Tool: "NextJs, ExpressJs",
    Tittle: "Job Tracker",
    About:
      "Job Tracker is a full-stack web application designed to help users efficiently manage and monitor their job applications. Built with Next.js and TypeScript on the frontend, it delivers a responsive and dynamic user interface powered by TanStack Table for data handling and ShadCN UI for clean, modern styling. The backend, developed with Express.js and Prisma, connects seamlessly to a PostgreSQL database hosted on Supabase. The app features authentication, CRUD operations, and pagination, providing users with a smooth and organized workflow to track their job search progress.",
    Technology:
      "Next.js | TypeScript | Tailwind CSS | ShadCN UI | TanStack Table | Express.js | Prisma | PostgreSQL | Supabase | Vercel",
    database: "PostgreSQL (Supabase)",
    url: "https://trackjobs.vercel.app",
  },
  {
    id: 2,
    Tool: "React Js,",
    Tittle: "chat app",
    About:
      "Chat app is a dynamic real-time messaging platform crafted with Node.js, Express, and TypeScript on the backend, utilizing MongoDB and Mongoose for efficient data storage and schema management. It incorporates secure user authentication via JWT (JSON Web Tokens), enabling seamless registration and login processes tailored for a smooth user experience. With real-time messaging powered by Socket.IO, users can exchange messages instantly, making it ideal for personal communication.",
    Technology: "React | TypeScript | Tailwind css | Nodejs | Render ",
    database: "Mongodb Atlas",
    url: "https://chat-webapp-sigma.vercel.app/",
  },

  {
    id: 3,
    Tool: "Next Js",
    Tittle: "Task Manager App",
    About:
      "The Task Manager App is a full-stack productivity tool built with Next.js, TypeScript, Node.js, and Docker. It leverages server-side rendering (SSR) to handle API requests efficiently, ensuring faster data fetching and improved performance. On the frontend, client-side rendering (CSR) is used within components for a smooth and interactive user experience. I implemented React Context to manage global state and handle specific API calls, enabling seamless communication between different parts of the app. The backend is powered by Node.js, containerized with Docker for scalability and easy deployment.",
    Technology: "Next Js | TypeScript | Node js | Docker | Mongo DB  ",
    url: "https://taskmanager-frontend-trv5.onrender.com",
  },
  {
    id: 4,
    Tool: "Next Js",
    Tittle: "Binarry",
    About:
      "Developed a multi-page consultation website for a client using Next.js and TypeScript. The site includes a dynamic homepage highlighting the company's services, a dedicated page outlining how the business supports client growth, and a contact page for inquiries and engagement.",
    Technology: "Next Js | TypeScript | Framer Motion | Tailwind CSS | Vercel",
    url: "https://consult-web-rosy.vercel.app/",
  },
  {
    id: 5,
    Tool: "Next Js",
    Tittle: "FoodieLand",
    About:
      "Developed a responsive, multi-page website for FoodieLand with different page sections such as Home, About Us, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation using next Js framework.",
    Technology:
      "Next.js  | Tailwind CSS  | Vite for streamlined development | Deployed on Vercel",
    url: "https://justfooduiwebapp-three.vercel.app/",
  },

  {
    id: 6,
    Tool: "React Js",
    Tittle: "Movie Search App",
    About:
      "Built a responsive movie search application with React and Axios, integrating the OMDb API for real-time search functionality, implemented dynamic search with live API requests and error handling for missing results, designed reusable components (Form, ShowMovieContent) to improve scalability.Utilized React hooks (useState, useEffect) for efficient state management.",
    Technology: "ReactJs | Tailwind CSS | Deployed on Vercel | OMDB API ",
    url: "https://dejis-movie-app.vercel.app/",
  },
  {
    id: 7,
    Tool: "React Js",
    Tittle: "Breden Architecture",
    About:
      "Developed a responsive, multi-page website for Breden Architecture with sections such as Home, About Us, Services, Projects, and Contact Us. The site showcases professional and interactive design, highlighting clean layouts and smooth navigation.",
    Technology:
      "React.js for dynamic UI components | Tailwind CSS for styling and responsiveness | Vite for optimized development | Deployed on Vercel",
    url: "https://brenden-architecture.vercel.app/",
  },
];

export default Projects;
