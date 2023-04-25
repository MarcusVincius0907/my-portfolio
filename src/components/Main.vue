<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo-container">
        <div class="header__logo-img-cont">
          <img
            src="../assets/user.png"
            alt="Ram Maheshwari Logo Image"
            class="header__logo-img"
          />
        </div>
        <span class="header__logo-sub">Marcus</span>
      </div>
      <div class="header__main">
        <ul class="header__links">
          <li class="header__link-wrapper">
            <a
              v-for="(section, i) of sections"
              :key="i"
              @click="scrollToElement(section.name)"
              class="header__link"
            >
              {{ section.text }}
            </a>
          </li>
        </ul>
        <div class="header__main-ham-menu-cont">
          <img
            src="../assets/svg/ham-menu.svg"
            alt="hamburger menu"
            class="header__main-ham-menu"
          />
          <img
            src="../assets/svg/ham-menu-close.svg"
            alt="hamburger menu close"
            class="header__main-ham-menu-close d-none"
          />
        </div>
      </div>
    </div>
    <div class="header__sm-menu">
      <div class="header__sm-menu-content">
        <ul class="header__sm-menu-links">
          <li class="header__sm-menu-link">
            <a
              v-for="(section, i) of sections"
              :key="i"
              @click="scrollToElement(section.name)"
            >
              {{ section.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <section class="home-hero" name="home">
    <div class="home-hero__content">
      <h1 class="heading-primary">Hey, My name is Marcus</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          My portfolio showcases a diverse range of projects that highlight my
          expertise and creativity in solving complex problems with innovative
          solutions.
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg">Projects</a>
      </div>
    </div>
    <div class="home-hero__socials">
      <div class="home-hero__social">
        <div
          v-for="(social, i) of socials"
          :key="i"
          @click="goToLink(social.link, social.isEmail)"
          :class="[
            socials.length === i + 1
              ? 'home-hero__social-icon-link--bd-none'
              : '',
          ]"
          class="home-hero__social-icon-link"
        >
          <i :class="[social.icon]"></i>
        </div>
      </div>
    </div>
    <div class="home-hero__mouse-scroll-cont">
      <div class="mouse"></div>
    </div>
  </section>
  <section id="about" class="about sec-pad" name="about">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-med">
        <span class="heading-sec__main">About Me</span>
        <span class="heading-sec__sub">
          I am a passionate and driven individual with a strong background in
          development, constantly seeking to expand my skillset and take on new
          challenges in order to make a meaningful impact.
        </span>
      </h2>
      <div class="about__content">
        <div class="about__content-skills">
          <div>
            <div class="header__logo-img-cont-big">
              <img
                src="../assets/user.png"
                alt="Marcus Leite Logo Image"
                class="header__logo-img-big"
              />
            </div>
          </div>
          <h3 class="about__content-title">My Skills</h3>
          <div class="skills">
            <div v-for="(skill, i) of skills" :key="i" class="skills__skill">
              {{ skill }}
            </div>
          </div>
        </div>
        <div class="about__content-main">
          <h3 class="about__content-title">Get to know me!</h3>
          <div class="about__content-details">
            <p class="about__content-details-para">
              Hey! My name is <strong>Marcus Vinicius Leite </strong>, and I
              currently reside in <strong> São Paulo, Brazil</strong>. At
              <strong> 21 years old </strong>, I am an avid sports enthusiast
              with a passion for <strong> football </strong>, cycling, running,
              and ping pong. In my free time, I enjoy delving into books on
              history and <strong> religion </strong>, as well as spending time
              with my loved ones.
            </p>
            <p class="about__content-details-para">
              My journey into programming began in high school, where I was
              first introduced to <strong> web and mobile development </strong>.
              Since then, I have continued to hone my skills and knowledge,
              landing an internship with a consultancy in my first year of
              college. Today, I remain dedicated to learning and growing as a
              developer, always seeking new opportunities to expand my
              expertise.
            </p>
          </div>
          <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="projects sec-pad" name="projects">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Projects</span>
        <span class="heading-sec__sub">
          My projects showcase my ability to creatively solve complex problems
          and deliver innovative solutions, utilizing the latest technologies
          and techniques to achieve outstanding results.
        </span>
      </h2>

      <div class="projects__content">
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img
              src="../assets/jpeg/project-mockup-example.jpeg"
              alt="Software Screenshot"
              class="projects__row-img"
              loading="lazy"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Project 1</h3>
            <p class="projects__row-content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora, explicabo quae quod deserunt eius sapiente
              praesentium.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" target="_blank"
              >Case Study</a
            >
          </div>
        </div>
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img
              src="../assets/jpeg/project-mockup-example.jpeg"
              alt="Software Screenshot"
              class="projects__row-img"
              loading="lazy"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Project 2</h3>
            <p class="projects__row-content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora, explicabo quae quod deserunt eius sapiente
              praesentium.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" target="_blank"
              >Case Study</a
            >
          </div>
        </div>
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img
              src="../assets/jpeg/project-mockup-example.jpeg"
              alt="Software Screenshot"
              class="projects__row-img"
              loading="lazy"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Project 3</h3>
            <p class="projects__row-content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora, explicabo quae quod deserunt eius sapiente
              praesentium.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" target="_blank"
              >Case Study</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="contact sec-pad dynamicBg" name="contact">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-med">
        <span class="heading-sec__main heading-sec__main--lt">Contact</span>
        <span class="heading-sec__sub heading-sec__sub--lt">
          Feel free to reach out to me with any inquiries, feedback, or
          collaboration opportunities. I'm always open to new connections and
          eager to explore potential partnerships.
        </span>
      </h2>
      <div class="contact__form-container">
        <form action="#" class="contact__form">
          <div class="contact__form-field">
            <label class="contact__form-label" for="name">Name</label>
            <input
              required
              placeholder="Enter Your Name"
              type="text"
              class="contact__form-input"
              name="name"
              id="name"
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="email">Email</label>
            <input
              required
              placeholder="Enter Your Email"
              type="text"
              class="contact__form-input"
              name="email"
              id="email"
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="message">Message</label>
            <textarea
              required
              cols="30"
              rows="10"
              class="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn--theme contact__btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
  <footer class="main-footer">
    <div class="main-container">
      <div class="main-footer__upper">
        <div class="main-footer__row main-footer__row-1">
          <h2 class="heading heading-sm main-footer__heading-sm">
            <span>Social</span>
          </h2>
          <div class="main-footer__social-cont">
            <div
              v-for="(social, i) of socials"
              :key="i"
              @click="goToLink(social.link, social.isEmail)"
              class="main-footer__icon"
            >
              <i :class="[social.icon]"></i>
            </div>
          </div>
        </div>
        <div class="main-footer__row main-footer__row-2">
          <h4 class="heading heading-sm text-lt">Marcus</h4>
          <p class="main-footer__short-desc">
            Thank you for visiting my portfolio. Follow me on social medias to
            stay updated on my latest projects and insights.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const skills = [
      "Angular",
      "Vue.js",
      "React.js",
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
    ];

    const socials = [
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
    ];

    const sections = [
      { name: "home", text: "HOME" },
      { name: "about", text: "ABOUT" },
      { name: "projects", text: "PROJECTS" },
      { name: "contact", text: "CONTACT" },
    ];

    const goToLink = (link, isEmail = false) => {
      if (isEmail) {
        let mailToLink = `mailto:${link}`;
        window.location.href = mailToLink;
        return;
      }

      window.open(link, "_blank");
    };

    const scrollToElement = (name) => {
      let anchor = document.getElementsByName(name)[0];
      anchor.scrollIntoView({ behavior: "smooth" });
    };

    return {
      skills,
      socials,
      sections,
      goToLink,
      scrollToElement,
    };
  },

  mounted() {
    // ---
    const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
    const smallMenu = document.querySelector(".header__sm-menu");
    const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
    const headerHamMenuCloseBtn = document.querySelector(
      ".header__main-ham-menu-close"
    );
    const headerSmallMenuLinks = document.querySelectorAll(
      ".header__sm-menu-link"
    );

    hamMenuBtn.addEventListener("click", () => {
      if (smallMenu.classList.contains("header__sm-menu--active")) {
        smallMenu.classList.remove("header__sm-menu--active");
      } else {
        smallMenu.classList.add("header__sm-menu--active");
      }
      if (headerHamMenuBtn.classList.contains("d-none")) {
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      } else {
        headerHamMenuBtn.classList.add("d-none");
        headerHamMenuCloseBtn.classList.remove("d-none");
      }
    });

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      });
    }

    // ---
    const headerLogoConatiner = document.querySelector(
      ".header__logo-container"
    );

    headerLogoConatiner.addEventListener("click", () => {
      location.href = "index.html";
    });
  },
};
</script>
