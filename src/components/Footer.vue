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
import db from "../data";
export default {
  name: "Footer",
  setup() {
    return {
      goToLink: db.goToLink,
      socials: db.socials,
    };
  },
};
</script>
