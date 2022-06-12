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
        { name: "Calculatora", path: "/auth", action: () => {} },
        { name: "Historial", path: "/auth/history", action: () => {} },
        { name: "Mi perfil", path: "/auth/my-profile", action: () => {} },
        { name: "Cerrar sesión", path: "/", action: () => {} }
      ]
    }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>