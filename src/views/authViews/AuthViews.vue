<template>
  <v-app>
    <NavBar v-bind:items="navigationItems" />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>  
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "AuthViews",
  data() {
    return {
      navigationItems: [
        { name: "Calculator", path: "/auth", action: () => {} },
        { name: "History", path: "/auth/history", action: () => {} },
        { name: "My profile", path: "/auth/my-profile", action: () => {} },
        { name: "Logout", path: "/", action: () => {} }
      ]
    }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>