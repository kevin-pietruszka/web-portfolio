export type Link = {
  name: string;
  href: string;
};

export type Experience = {
  begin: string;
  end: string;
  title: string;
  company: string;
  company_link: string;
  description: string;
  tags: string[];
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  is_public: boolean;
  github_link: string;
};

export type FeaturedProject = Project & {
  img: string;
};

export type Education = {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa: number;
  bullets: string[];
}
export type SkillCategory = {
  category: string;
  list: string[];
}
