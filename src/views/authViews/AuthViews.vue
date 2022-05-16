<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title class="text-h5">
        Bonces
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        to="/auth"
        exact
      >
        Calculator
      </v-btn>
      <v-btn
        to="/auth/history"
      >
        History
      </v-btn>
      <v-btn
        to="/auth/my-profile"
      >
        My Profile
      </v-btn>
      <v-btn
        to="/"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>  
</template>