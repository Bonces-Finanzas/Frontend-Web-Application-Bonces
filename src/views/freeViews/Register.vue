<template>
  <v-container class="col-12">
    <v-row>
      <div class="col-6 d-none d-md-flex img-container">
        <img id="register-img" src="../../assets/register-image.png">
      </div>
      <v-form class="col-12 col-sm-6 col-md-4 ma-auto flex pa-0">
        <div class="icon mx-auto mb-5 img-container">
          <img id="calculator" src="../../assets/calculator-icon.png">
        </div>

        <h2 class="text-center mb-5">Regístrate</h2>

        <v-text-field
            label="Nombres"
            color="accent"
            outlined
        ></v-text-field>

        <v-text-field
            label="Apellidos"
            color="accent"
            outlined
        ></v-text-field>

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
          Registrarse
        </v-btn>

        <p class="text-center">
          ¿Ya tienes cuenta?
          <v-btn
              text
              class="blue--text"
              to="/login"
          >
            Iniciar sesión
          </v-btn>
        </p>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Register"
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

#calculator {
  max-width: 70px;
  margin: auto;
  display: block;
}

#register-img {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
</style>