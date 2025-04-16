import { Tag } from "./Tag";


export interface Project {
    id: number; 
    name: string;
    summary: string;
    description: string;
    projectLinkGithub: string;
    projectLinkViewSite: string;
    pictures: string[];
    tags: Tag[];
}