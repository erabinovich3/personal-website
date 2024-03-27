export interface Project {
    id: string;
    name: string;
    description: string;
    image: ProjectImage;
    details: ProjectDetails;
}

export interface ProjectImage {
    src: string | null;
    alt: string | null;
    width: number;
    height: number;
}

export interface ProjectDetails {
    tags: string[];
    links: ProjectLink[];
}

export interface ProjectLink {
    type: string;
    url: string;
}
