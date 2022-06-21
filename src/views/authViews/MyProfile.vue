<template>
  <v-container>
    <h1 class="text-center mb-16">Mi perfil</h1>
    <v-form class="my-auto flex">
      <v-row>
        <v-col class="col-12 col-sm-10 col-lg-6 mx-auto">
          <v-row>
            <v-col class="col-4">
              <v-subheader class="font-weight-medium">Nombre:</v-subheader>
            </v-col>
            <v-col class="col-8">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="col-4">
              <v-subheader class="font-weight-medium">Apellido:</v-subheader>
            </v-col>
            <v-col class="col-8">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="col-4">
              <v-subheader class="font-weight-medium">Correo:</v-subheader>
            </v-col>
            <v-col class="col-8">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-btn
          class="center mt-10"
          width="150px"
          color="secondary"
      >Editar</v-btn>
    </v-form>
  </v-container>
</template>

<script>

export default {
  name: "MyProfile"
}
</script>

<style scoped>
.center {
  left: 50%;
  transform: translateX(-50%);
}
</style>