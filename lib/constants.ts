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

export const projects = [
  {
    title: "Advising Pathways",
    description:
      "Worked on a web application developed for the College of Computing advising department at Georgia Tech. It facilitates the exploration of curriculum requirements and options through surveys, gamified walkthroughs, and detailed advising information.",
  },
  {
    title: "Chat Room",
    description:
      "Created a server and client with UDP/TCP options that run through the command line.",
  },
  {
    title: "Chess Tactic Classification",
    description:
      "Trained AI to classify the strategies used in a sequence of moves recommended by Chess Engines by utilizing the chess puzzle database by lichess.",
  },
  {
    title: "Climate Change Prediction",
    description:
      "Developed models to predict future surface temperatures for various regions around the world and display that data on an interactive globe visualization.",
  },
  {
    title: "Collaborative Filtering",
    description:
      "Performed SVD factorization on an Anime recommendations database to give suggestions of content for new users.",
  },
  {
    title: "D3.js Visualizations",
    description:
      "Created visualizations displaying various properties of a Board Game dataset including a Graph for connecting similarities, line charts to show ratings, and a choropleth map to show average rating per region.",
  },
  {
    title: "Distributed Systems (DS) Labs",
    description:
      "Designed and implemented various distributed systems strategies for database replication in a simulated environment. These strategies included Primary-Backup, Multi-Paxos, and a strategy resembling Google Spanner.",
  },
  {
    title: "FarmGuardians",
    description:
      "Created a farm simulation game featuring an interactive UI and simple visuals.",
  },
  {
    title: "FlexBros",
    description:
      "Developed a web application for multiple platforms to build workout routines and monitor progress. It featured a workout calendar to display routines with the ability to log daily performance.",
  },
  {
    title: "GBA Game",
    description:
      "Created a simple Pong game using a Game Boy Advance (GBA) emulator.",
  },
  {
    title: "Feature Extraction for Images",
    description: "Implemented the Harris corner detection algorithm.",
  },
  {
    title: "Image Compression using ML",
    description:
      "Performed Gaussian Mixture Modeling, K-means, and PCA methods of analyzing data and demonstrated their effectiveness by compressing images.",
  },
  {
    title: "Image Description for the Visually Impaired",
    description:
      "Created a novel approach to generate image descriptions by using image captioning model output fed to Large Language Models (LLMs), asking questions to Visual Question Answering (VQA) models to generate paragraph-length descriptions.",
  },
  {
    title: "Implicit Surfaces",
    description:
      "Visualized 3D models using implicit surface drawing techniques, complete with blobby shapes of standard primitives. It also allows for twist, taper, and bend deformation techniques to improve the appearance of various morphed objects.",
  },
  {
    title: "Logic Gate Computer Simulation",
    description:
      "Used basic logic gates to build up to a simple computer using a circuit simulator. The machine includes a simple bus and RAM with the core components of a PC, register file, and ALU.",
  },
  {
    title: "Machine Learning in Network Traffic",
    description:
      "Trained a PAYL model on example network traffic data and tested on normal and attack payloads. Employed a polymorphic blending technique to demonstrate the limitations of such methods.",
  },
  {
    title: "Malware Analysis",
    description:
      "Used sample malware in a VM environment to perform network behavioral analysis, gaining information on the control flow graph and symbolic execution.",
  },
  {
    title: "Memory Page Simulator",
    description:
      "Simulated virtual memory complete with a Paging implementation that included Page Eviction and Replacement policies.",
  },
  {
    title: "Mesh Manipulation",
    description:
      "Manipulated polygon meshes by applying Loop or Butterfly subdivision techniques. It adds surface noise and performs mesh smoothing, with the ability to toggle between flat and smooth shading.",
  },
  {
    title: "Mini Internet",
    description:
      "Participated in an internet connectivity simulation where each member controlled one Autonomous System (AS) that had to be interconnected with OSPF and iBGP protocols to then connect to external ASes through a BGP configuration.",
  },
  {
    title: "Network Monitoring",
    description:
      "Analyzed four attack scenarios on an AWS network topology, targeting DDoS, brute force, web attacks, and botnets. Using provided sample traffic, I identified patterns to create rules preventing each attack type.",
  },
  {
    title: "Neural Network for Diabetes",
    description:
      "Trained a neural network by implementing hidden layers and gradient descent to predict if a sample could be at risk of diabetes.",
  },
  {
    title: "Pacman AI",
    description:
      "Built various AI methods to play Pacman, including BFS, DFS, UCS, A*, Q-Learning, and Markov Decision Processes.",
  },
  {
    title: "Penetration Testing",
    description:
      "Attacked a simulated CGI program by testing for open ports and using a reverse shell exploit to gain escalated privileges.",
  },
  {
    title: "Process Scheduler",
    description:
      "Simulated an OS scheduling multi-threaded processes with options to choose from the following algorithms: First Come First Serve, Shortest Job First, Round-Robin, and Shortest Remaining Time First.",
  },
  {
    title: "Projection Matrix and Fundamental Matrix Estimation with RANSAC",
    description:
      "Implemented Projection Matrix reconstruction given multiple images from a scene using RANSAC, then used the calculated matrix to compute epipolar lines between the images to match feature locations.",
  },
  {
    title: "Random Forest Classifying",
    description:
      "Analyzed a set of over a hundred mushroom species and trained a random forest model to perform classification on unknown mushroom samples.",
  },
  {
    title: "Ray Tracer",
    description:
      "Created a distribution ray tracer with advanced shading techniques such as highlights and reflection, alongside special effects including soft shadows, motion blur, depth-of-field, and glossy reflection. Rendering is accelerated using a Bounding Volume Hierarchy.",
  },
  {
    title: "Real-Time Transport Protocol (RTP)",
    description:
      "Implemented Real-Time Transport Protocol (RTP) using threads and a packet queue system, where clients receive packetized messages from a server.",
  },
  {
    title: "Scene Recognition with CNNs and Bag-of-Words",
    description:
      "Classified scenes of various rooms or environments using a bag-of-words approach with SIFT feature output, and then using a Convolutional Neural Network (CNN) for classification.",
  },
  {
    title: "Simulated L2 Cache with DRAM",
    description:
      "Simulated a multi-core processor utilizing an L2 cache with configurable eviction and write-back policies. Write-back operations are handled by a DRAM simulator that emulates pre-charging and row buffer behavior.",
  },
  {
    title: "Simulated Out-of-Order Processor with Cache and Error Flushing",
    description:
      "Simulated a 7-stage processor with a Reorder Buffer and a Register Alias Table for out-of-order processing, interacting with a basic L1 cache.",
  },
  {
    title: "Simulated Superscalar with Branch Prediction",
    description:
      "Tested the efficiency of an N-wide superscalar processor with 5 basic stages, effectively managing dependencies with pipeline bubbles and flushes using branch predictions (gshare, gselect, or tournament predictor).",
  },
  {
    title: "Spark for NYC Taxi Data Analysis",
    description:
      "Analyzed NYC taxi trip data to find least cost-effective trips, most popular routes, and pricing differences between taxis. Code was deployed on various cloud platforms (GCP, AWS, Databricks) for processing with PySpark.",
  },
  {
    title: "SQL Schema for Travel Reservations Service",
    description:
      "Developed an Entity-Relationship Diagram and SQL tables to manage travel reservations data, combined with stored procedures for efficiency.",
  },
  {
    title: "Cross-Site Scripting (XSS) Attack Simulation",
    description:
      "Attacked a simulated web application to perform reflective cross-site scripting that persists across multiple sessions, and a stored cross-site scripting attack on potential site admins.",
  },
];
