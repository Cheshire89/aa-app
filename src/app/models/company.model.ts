import { Project } from './project.model';

export interface Company {
  name: string;
  slug: string;
  stack: string;
  projects: Project[];
}
