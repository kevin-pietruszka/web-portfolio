export const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export const experiences = [
  {
    begin: "05/2023",
    end: "10/2023",
    title: "Cloud Engineer Intern",
    company: "Battelle",
    company_link: "https://www.battelle.org/",
    description:
      "I worked in Battelle's Cloud Engineering team to develop infrastructure to support cloud work enviroments in Azure that uphold CMMC level 2 security requirements. I wrote Terraform code to deploy a Microsoft Teams Remote App to replace the companies Webex for Government contract. I also worked on their internal tools written in Bash to automate deployments by writing a terraform module for pip and apt proxies deployed with Docker within environments and developed a CI/CD pipeline for custom SKU images for remote desktops utilizing Chocolately.",
    tags: ["Terraform", "Bash", "Azure", "GitHub", "Docker", "CI/CD"],
  },
  {
    begin: "05/2022",
    end: "07/2022",
    title: "Software Engineer Intern",
    company: "GTRI",
    company_link: "https://gtri.gatech.edu/",
    description:
      "I worked within a team of researchers trying to improve visualization techniques for neural network training while working with Python using Tensforflow and PyTorch. Then I was apart of the AGILE development process in order to create a web application using React to display these visualizations in components, utilizing a Flask backend powered with a MongoDB database.",
    tags: [
      "JavaScript",
      "Python",
      "React",
      "Flask",
      "MongoDB",
      "Neural Network",
      "Data Visualization",
    ],
  },
];

export const background = `
My journey as a Software Engineer began in High School when I first took a programming class where I learned python and fell in love. Since then, I have graduated from Georgia Tech where I got a Bachelor's and Master's in Computer Science. My coursework covered a wide range of topics such as: Data Structures, Algorithms, Object-Oriented Design, Artificial Intelligence, Machine Learning, Networking, Computer Vision, Security, Graphics, Databases, Data Visualization & Analytics, Distributed Systems, and High Performance Computing. I have also done two internships where I tried to expand my knowledge in the field and gain professional experience. They can be seen in this section.
`;
