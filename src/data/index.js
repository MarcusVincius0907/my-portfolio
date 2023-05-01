const carociOverview = `Caroci commissioned the development of a Learning Management System (LMS) platform for hosting his health courses. While he could have used any existing course platform, his vision was to create a platform that would allow his instructors to be linked and receive commissions. Additionally, he wanted to integrate the platform with corporate clients, so that their employees could take the courses.<br><br>

The platform would have four main user roles: students, corporate students, instructors, and administrators. <br><br>

Students would be able to watch the courses, track their progress, download materials, and receive a certificate of completion. Instructors, on the other hand, would be able to upload or link their classes from platforms like YouTube or Vimeo, organize course modules and materials, and perform administrative tasks like checking their payments, creating discount coupons for students, and more. <br><br>

Administrators would have access to a range of features, including viewing student enrollment data, managing commissions for instructors, registering new corporate clients, and much more. Overall, Caroci's vision was to create a comprehensive and user-friendly platform that would benefit all stakeholders involved in the health education process.`;

const pixelOverview = `With the rise of NFTs in recent years, my friends and I had the idea to create a platform where people could participate in the creation of an NFT and potentially receive it through a lottery system. <br><br>
Thus, we created Pixel, an NFT lottery platform where users can purchase a pixel and select a color to contribute to an overall image that will become an NFT on the day of the lottery drawing. Pixel provides a safe and secure platform for users to participate in the creation and distribution of NFTs. <br><br>
By offering users the opportunity to contribute to the creation of NFTs and potentially receive them through a fair and transparent lottery system, Pixel aims to make the world of NFTs more accessible and inclusive to a wider audience. We believe that this innovative approach to NFT creation and distribution will attract a broad community of users who are passionate about digital art and blockchain technology.`;

const charadesOverview = `I launched this project because I have always enjoyed playing charades with my friends and family, and I wanted to put my knowledge into practice. <br><br>
The platform features a dashboard that displays the scores of both teams and allows players to start a game of charades. However, only the player whose turn it is can see the screen, as the words for the charades will appear there. <br><br>
Additionally, users can configure the number of words, the length of the timer, and the number of rounds. The platform currently supports two teams, but users can customize the team names and assign players to each team. <br><br>
Overall, the goal of this project is to provide a fun and interactive platform for people to enjoy playing charades with their loved ones. With its customizable settings and user-friendly interface, it offers a unique and engaging experience for all players.`;

const brisaOverview = `My first job was at a multinational consulting company, which I joined during my first year of college in 2019. Although my team was relatively small, we had a high volume of work and multiple ongoing projects, which kept us busy. The work environment was very pleasant, and my colleagues were supportive and helpful. <br><br>
However, due to the high demand, we sometimes had to work overtime and late at night. <br><br>
During my time there, I had the opportunity to work on various projects involving different technologies. Although I primarily focused on frontend development, I also gained experience in backend development and database management. <br><br>
Overall, my experience at the consulting company taught me valuable skills and provided me with a solid foundation for my future career in the technology industry. I am grateful for the opportunity to have worked with a team of talented professionals and learned from their expertise.`;

const solutisOverview = `In 2021, I joined Solutis, a national consulting company, as an Angular developer, which is my preferred frontend framework. I was seeking new challenges and a more structured work environment with fewer late-night hours. <br><br>
At Solutis, I had the opportunity to work on several projects for Brazilian banks, who were clients of the company. This experience allowed me to expand my skill set and learn new technologies while contributing to the success of the projects. <br><br>
Moreover, the work environment at Solutis was highly positive, and I enjoyed collaborating with my colleagues. The company's emphasis on teamwork and open communication made it a great place to work and learn. <br><br>
Overall, my time at Solutis was a highly rewarding experience that allowed me to grow both personally and professionally. The opportunity to work on challenging projects and be part of a supportive team has provided me with a solid foundation for my future career in the technology industry.`;

const ncOverview = `In 2022, I landed a position as an Angular developer at Netcracker, a large international telecommunications company. Working there has given me the opportunity to collaborate with colleagues from various parts of the world, including Russians and Indians, which has been a unique and enriching experience. <br><br>
One of the most significant benefits of working at Netcracker is the emphasis on high code quality. This expectation has challenged me to improve my skills and adhere to best practices for writing clean and efficient code. Through this, I have learned a lot about software development and have been able to refine my skills as an Angular developer. <br><br>
At Netcracker, I have also had the opportunity to delve deeper into Angular concepts and libraries. This has allowed me to expand my knowledge and become more proficient in using Angular to create robust and scalable applications. <br><br>
Overall, I am very grateful for the opportunity to work at Netcracker, where I have been able to grow both professionally and personally.`;

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
      overview: carociOverview,
      path: "caroci",
      thumb: "",
      liveLink: "https://academy.caroci.com.br/",
      codeLink: "",
      toolsUsed: ["PHP", "Laravel", "MySQL", "Javascript"],
    },
    {
      id: 1,
      title: "Pixel",
      description: "A sortition platform & API. Build with Vue.js and Express",
      overview: pixelOverview,
      path: "pixel",
      thumb: "",
      liveLink: "https://pixel-app.marcusleitedev.com/auth/login",
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
      overview: charadesOverview,
      path: "charades",
      thumb: "",
      liveLink: "https://imagem-e-acao.marcusleitedev.com/",
      codeLink: "https://github.com/MarcusVincius0907/ImagemAcaoGame-backend",
      toolsUsed: [
        "React",
        "Redux",
        "Tailwindcss",
        "Node",
        "Express",
        "Typescript",
      ],
    },
    {
      id: 3,
      title: "Brisa",
      description: "Professional experience summary in Brisa company",
      overview: brisaOverview,
      path: "brisa",
      thumb: "",
      liveLink: "http://www.brisa.org.br/",
      codeLink: "",
      toolsUsed: [
        "Angular",
        "Vue.js",
        "Vuex",
        "React",
        "Redux",
        "React Native",
        "Tailwindcss",
        "Node",
        "Express",
        "Typescript",
        "SASS",
        ".NET",
        "SQL Server",
        "PHP",
      ],
    },
    {
      id: 4,
      title: "Solutis",
      description: "Professional experience summary in Solutis company",
      overview: solutisOverview,
      path: "solutis",
      thumb: "",
      liveLink: "https://solutis.com.br/",
      codeLink: "",
      toolsUsed: [
        "Angular",
        "Angular.js",
        "Vue.js",
        "Vuex",
        "React",
        "Redux",
        "PHP",
        "Laravel",
      ],
    },
    {
      id: 5,
      title: "Netcracker",
      description: "Professional experience summary in Netcracker company",
      overview: ncOverview,
      path: "netcrecker",
      thumb: "",
      liveLink: "https://www.netcracker.com/",
      codeLink: "",
      toolsUsed: ["Angular", "NgRx", "Rxjs", "BEM pattern", "Vue.js", "Vuex"],
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
  getProjectById: (projectId) => {
    return (
      db.projects.find((project) => project.id === Number(projectId)) ?? null
    );
  },
};

export default db;
