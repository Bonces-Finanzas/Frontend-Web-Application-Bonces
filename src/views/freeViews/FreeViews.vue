<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title to="/" class="text-h5">
        Bonces
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
      >
        About Us
      </v-btn>
      <v-btn
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        to="/register"
      >
        Register
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>  
</template>

<script>
export default {
  name: "FreeViews"
}
</script>
