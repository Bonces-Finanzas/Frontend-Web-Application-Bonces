<template>
  <v-app-bar app color="accent">
    <v-app-bar-title class="text-h5 white--text ">
      Bonces
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
        v-for="item in items"
        :key="item.name"
        :to="item.path"
        @click="item.action"
        exact
        class="primary--text"
        text
    >
      {{ item.name }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>