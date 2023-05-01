<template>
  <div v-if="project">
    <section class="project-cs-hero">
      <div class="project-cs-hero__content">
        <h1 class="heading-primary">{{ project.title }}</h1>
        <div class="project-cs-hero__info">
          <p class="text-primary">
            {{ project.description }}
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a :href="project.liveLink" class="btn btn--bg" target="_blank"
            >Live Link</a
          >
        </div>
      </div>
    </section>
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content">
          <div class="project-details__showcase-img-cont">
            <img
              src="../assets/jpeg/project-mockup-example.jpeg"
              alt="Project Image"
              class="project-details__showcase-img"
            />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h3 class="project-details__content-title">Project Overview</h3>
              <p
                v-html="project.overview"
                class="project-details__desc-para"
              ></p>
            </div>
            <div class="project-details__tools-used">
              <h3 class="project-details__content-title">Tools Used</h3>
              <div class="skills">
                <div
                  v-for="(tool, id) of project.toolsUsed"
                  :key="id"
                  class="skills__skill"
                >
                  {{ tool }}
                </div>
              </div>
            </div>
            <div v-if="project.codeLink" class="project-details__links">
              <h3 class="project-details__content-title">See Live</h3>
              <a
                :href="project.liveLink"
                class="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                >Live Link</a
              >
              <a
                :href="project.codeLink"
                class="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import db from "../data";
export default {
  name: "project",
  computed: {
    project() {
      console.log(db.getProjectById(this.$route.params?.id));
      return db.getProjectById(this.$route.params?.id);
    },
  },
};
</script>
