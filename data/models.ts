interface Range {
  startYear: number;
  endYear: number | string;
}

interface Experience extends Range {
  id: number;
  location?: string;
}

export interface Skill extends Range {
  title: string;
  strength: number;
}

export interface Work extends Experience {
  title: string;
  company: string;
}

export interface Institution extends Experience {
  degree: string;
  school: string;
}
