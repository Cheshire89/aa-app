export interface ProjectImage {
  title: string;
  source: string;
}

export interface Project {
  title: string;
  images: ProjectImage[];
}

export interface Company {
  name: string;
  stack: string;
  projects: Project[];
}
