<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav> -->

  <nav>
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>
    <button @click="goToContact">Contact</button>
  </nav>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  // Điều hướng qua trang Home
  router.push("/");
};

const goToAbout = () => {
  // Điều hướng qua trang Home
  router.push({ name: "about" });
};

const goToContact = () => {
  // Điều hướng qua trang Home
  router.replace({ name: "contact" });
};
// setTimeout(() => {
//   router.push({ name: "contact" });
// }, 3000);
</script>

<style>
nav {
  display: flex;
  gap: 20px;
}
</style>
