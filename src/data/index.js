const db = {
  skills: [
    "Angular",
    "Vue.js",
    "React.js",
    "Typescript",
    "SASS",
    "BEM",
    "Tailwindcss",
    "Ngrx",
    "Vuex",
    "Redux",
    "Rxjs",
    "ExpressJs",
    "MongoDB",
    "Docker",
    ".NET",
    "SQL Server",
    "PHP",
    "Laravel",
    "MySQL",
    "AWS",
  ],
  socials: [
    {
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/marcus-leite-ab751417b/",
    },
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/MarcusVincius0907",
    },
    {
      icon: "fa-solid fa-envelope",
      link: "mvleite0908@gmail.com",
      isEmail: true,
    },
    {
      icon: "fa-brands fa-whatsapp",
      link: "https://wa.me/5511958755705",
    },
  ],
  menuItems: [
    { name: "home", text: "HOME" },
    { name: "about", text: "ABOUT" },
    { name: "projects", text: "PROJECTS" },
    { name: "contact", text: "CONTACT" },
  ],
  projects: [
    {
      id: 0,
      title: "Caroci Academy",
      description: "A Health LMS plaftform delevop with Laravel",
      path: "caroci",
      thumb: "",
      liveLink: "",
      codeLink: "",
      toolsUsed: ["PHP", "Laravel", "MySQL", "Javascript"],
    },
    {
      id: 1,
      title: "Pixel",
      description: "A sortition platform & API. Build with Vue.js and Express",
      path: "pixel",
      thumb: "",
      liveLink: "",
      codeLink: "",
      toolsUsed: [
        "Vuejs",
        "Vuex",
        "Tailwindcss",
        "Node",
        "Express",
        "Typescript",
        "MongoDB",
      ],
    },
    {
      id: 2,
      title: "Imagem e Ação",
      description:
        "A Simple Charades Game to play with friends. Build with React and Express",
      path: "charades",
      thumb: "",
    },
    {
      id: 3,
      title: "Brisa",
      description: "Professional experience sum",
      path: "brisa",
      thumb: "",
    },
    {
      id: 4,
      title: "Solutis",
      description: "Professional experience sum",
      path: "solutis",
      thumb: "",
    },
    {
      id: 5,
      title: "Netcracker",
      description: "Professional experience sum",
      path: "netcrecker",
      thumb: "",
    },
  ],
  goToLink: (link, isEmail = false) => {
    if (isEmail) {
      let mailToLink = `mailto:${link}`;
      window.location.href = mailToLink;
      return;
    }

    window.open(link, "_blank");
  },
};

export default db;
