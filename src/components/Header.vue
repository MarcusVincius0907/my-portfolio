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
              v-for="(section, i) of menuItems"
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
              v-for="(section, i) of menuItems"
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
</template>

<script>
import db from "../data";
export default {
  name: "Header",
  setup() {
    const scrollToElement = (name) => {
      let anchor = document.getElementsByName(name)[0];
      anchor.scrollIntoView({ behavior: "smooth" });
    };

    return {
      scrollToElement,
      menuItems: db.menuItems,
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
      this.$router.push({ path: "/" });
    });
  },
};
</script>
