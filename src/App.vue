<script setup>
import Logo from "./components/assets/Logo.vue";
import Container from "./components/layout/Container.vue";
import ContentBox from "./components/ContentBox.vue";
import Columns from "./components/layout/Columns.vue";
import SocialIcon from "./components/assets/SocialIcon.vue";

const basisClass = {};

const socialUrls = {
  // mailchimp: "<newsletter>",
  github: "https://github.com/graykai",
  // "discord": "<some link>",
  // "instagram": "https://instagram.com/graykai"
};

const pastProjects = [];
</script>

<template>
  <div class="ml-36 mr-36 pull-down bg-gray-100">
    <Logo />
  </div>
  <div class="bg-graykai">
    <Container
      extraClasses="text-2xl text-gray-100 pt-20 pb-12 text-center font-baseFont font-normal tracking-tight prose-a:underline"
    >
      <p class="m-auto">
        graykai studios is a collaboration<br />
        between <a href="">Kai Curtis</a> &amp; <a href="">Grayson Hay</a>
      </p>
    </Container>
  </div>
  <Container
    extraClasses="m-36 text-4xl text-center font-baseFont font-bold tracking-wide"
  >
    <p class="w-1/2 m-auto">
      we create installations that bridge reality to the fantasy worlds in our
      heads.
    </p>
  </Container>
  <Container>
    <Columns extraClasses="m-auto">
      <ContentBox
        title="current project"
        color="red"
        baseColor="#1C204F"
        fillColor="#E8E9F3"
        :extraClasses="basisClass"
      >
        <div class="flex flex-row gap-5 items-baseline justify-between">
          <h1 class="font-headerFont font-bold text-xl">Doom Sparkle</h1>
          <!-- <h2 class="font-headerFont text-xs">TDB</h2> -->
          <h3 class="font-headerFont text-xs">Projection, OpenFrameworks</h3>
        </div>
        <hr />
        <!-- <video class="aspect-video" /> -->
        <p class="prose my-3">
          Just beyond our vision, at the threshold between the real and the
          imaginary, Doom Sparkle is a gateway that challenges the viewer to
          stare into what they are, who they are, and see how they are changed
          by the act of watching.
        </p>
        <p class="prose my-3">
          Doom Sparkle is a collaboration with
          <a href="http://www.seattledesignnerds.org/">Seattle Design Nerds</a>
        </p>
        <!-- <a href="/work/lusio-2022" class="text-right block">Read More…</a> -->
      </ContentBox>
    </Columns>
  </Container>
  <div class="bg-graykai text-gray-100 mt-36">
    <Container>
      <ul class="flex flex-row justify-center gap-12">
        <li v-for="(url, name) in socialUrls" class="max-w-[24px]">
          <SocialIcon :icon="name" :url="url" />
        </li>
      </ul>
    </Container>
  </div>
</template>

<style>
.pull-down {
  margin-bottom: -5.5rem;
}
</style>
