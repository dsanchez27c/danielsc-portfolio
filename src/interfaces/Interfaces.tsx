/// interfaz para datos de experiencias
export interface ExperiencesInt {
  title: string;
  startDate: string;
  endDate?: string;
  status: string | boolean;
  charge?: string;
  description: string;
}

export interface ProjectsInt {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  tags: string[];
}
