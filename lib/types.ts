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
