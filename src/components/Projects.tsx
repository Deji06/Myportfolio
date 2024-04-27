
export type Data = {
    id: number,
    Tool: string,
    Tittle:  string,
    About: string,
    url?: string ,
}


const Projects:Data[] = [
    {
        id: 1,
        Tool: 'React js',
        Tittle: 'Movie App',
        About: 'check out my movie app built using react js and css where you can get information about any movie of your choice',
        url:'https://vercel.com/dejis-projects-06c81f30/movieapp/4MomCymsuaTZn3cpaM2sT7FRZsrc'
    },
    {
        id: 2,
        Tool: 'React js',
        Tittle: 'Todolist App',
        About: 'yeah, every developer must build a todo-list app (lol) so here is mine. It was built using react js and inline css',
        url:'https://todolist-r27xpb6ap-dejis-projects-06c81f30.vercel.app/'
    },
    {
        id: 3,
        Tool: 'Java Script',
        Tittle: 'e-commerce App',
        About: 'here is my e-commerce challenge gotten from frontendmentor.io built using vs code as editor, html for the structure, css for styling and javascript for some functionalities.',
        url:'https://e-commerce-lyart-two.vercel.app/'
    },
    {
        id: 3,
        Tool: 'React js',
        Tittle: 'e-commerce App',
        About: 'same challenge from froentendmentor.io, but this time using react js',
        url: 'https://my-first-e-commerce-oruzyrqf0-dejis-projects-06c81f30.vercel.app/'
    },
  
];

export default Projects;