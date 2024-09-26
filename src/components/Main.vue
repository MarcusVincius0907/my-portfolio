<template>
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
              <strong> 23 years old </strong>, I am an avid sports enthusiast
              with a passion for <strong> soccer </strong>, cycling, running,
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
        <div v-for="(project, i) in projects" :key="i" class="projects__row">
          <div class="projects__row-img-cont">
            <img
              v-if="project.thumb"
              :src="project.thumb"
              alt="Software Screenshot"
              class="projects__row-img"
              loading="lazy"
            />

            <img
              v-else
              src="../assets/jpeg/project-mockup-example.jpeg"
              alt="Software Screenshot"
              class="projects__row-img"
              loading="lazy"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">{{ project.title }}</h3>
            <p class="projects__row-content-desc">
              {{ project.description }}
            </p>
            <a
              @click="goToProject(project)"
              class="btn btn--med btn--theme dynamicBgClr"
              target="_blank"
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
</template>

<script>
import { useRouter } from "vue-router";
import db from "../data";
export default {
  name: "main",
  setup() {
    const router = useRouter();

    const goToProject = (project) => {
      router.push(`/project/${project.id}`);
    };

    return {
      skills: db.skills,
      socials: db.socials,
      projects: db.projects,
      goToLink: db.goToLink,
      goToProject,
    };
  },
};
</script>
