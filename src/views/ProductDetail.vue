<template>
  <h1>Product Detail Page Of Id = {{ id }}</h1>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { id } = route.params;
</script>

<style></style>
