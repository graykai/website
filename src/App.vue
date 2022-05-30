<script setup>
import Logo from "./components/assets/Logo.vue"
import Container from "./components/layout/Container.vue"
import ContentBox from "./components/ContentBox.vue"
import Columns from "./components/layout/Columns.vue"

const basisClass = {
  'basis-1/3': true
}
</script>

<template>
  <div class="ml-36 mr-36 pull-down bg-gray-100">
    <Logo />
  </div>
  <div class="bg-graykai">
    <Container
      extraClasses="text-2xl text-gray-100 pt-20 pb-12 text-center font-baseFont font-normal tracking-tight prose-a:underline">
      <p class="w-1/2 m-auto">
        graykai studios is a collaboration
        between <a href="">Kai Curtis</a> &amp; <a href="">Grayson Hay</a>
      </p>
    </Container>
  </div>
  <Container extraClasses="m-36 text-4xl text-center font-baseFont font-bold tracking-wide">
    <p class="w-2/3 m-auto">we create installations that bridge reality to the fantasy worlds in our heads.</p>
  </Container>
  <Container>
    <Columns extraClasses="m-auto">
      <ContentBox title="current project" color="red" baseColor="#1C204F" fillColor="#E8E9F3"
        :extraClasses="basisClass">
        Something here</ContentBox>
      <ContentBox title="past projects" color="green" baseColor="#1C204F" fillColor="#E8E9F3"
        :extraClasses="basisClass">
        Something here</ContentBox>
    </Columns>
  </Container>
</template>

<style>
.pull-down {
  margin-bottom: -5.5rem;
}
</style>