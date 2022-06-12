<template>
  <v-container>
    <v-form class="col-12 col-sm-8 col-md-5 mx-auto flex">
      <div class="icon mx-auto mb-5 img-container">
        <img src="../../assets/calculator-icon.png">
      </div>

      <h2 class="text-center mb-10">Iniciar sesión</h2>

      <v-text-field
          label="Correo electrónico"
          color="accent"
          outlined
      ></v-text-field>

      <v-text-field
          label="Contraseña"
          color="accent"
          outlined
      ></v-text-field>

      <v-btn
          to="auth"
          color="secondary"
          class="py-5 mb-5"
          block
      >
        Iniciar sesión
      </v-btn>

      <p class="text-center">
        ¿No tienes cuenta?
        <v-btn
            text
            class="blue--text"
            to="/register"
        >
          Registrate
        </v-btn>
      </p>
    </v-form>
  </v-container>
</template>

<script>

export default {
  name: "Login"
}
</script>

<style scoped>
  .icon {
    width: 100px;
    height: 100px;
    background: #A5EBE9;
    border-radius: 50%;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 70px;
    margin: auto;
    display: block;
  }
</style>