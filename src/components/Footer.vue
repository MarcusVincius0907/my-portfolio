<template>
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
  name: "Header",
  props: ["socials", "goToLink"],
  setup() {
    const scrollToElement = (name) => {
      let anchor = document.getElementsByName(name)[0];
      anchor.scrollIntoView({ behavior: "smooth" });
    };

    const sections = [
      { name: "home", text: "HOME" },
      { name: "about", text: "ABOUT" },
      { name: "projects", text: "PROJECTS" },
      { name: "contact", text: "CONTACT" },
    ];

    return {
      scrollToElement,
      sections,
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
      location.href = "/";
    });
  },
};
</script>
