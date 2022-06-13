import { defineStore } from "pinia";
import UserService from "@/services/user-service";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: null,
        loading: false
    }),
    actions: {
        async login(email, password) {
            this.loading = true
            this.user = await UserService.login(email, password)
                .then(response => response.data)
                .catch(e => {
                    console.log(e)
                    alert("Ocurrió un error al iniciar sesión")
                });
            this.loading = false
        },
        logout() {
          this.user = null;
        },
        async register(user) {
            this.loading = true
            await UserService.register(user)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                    alert("Ocurrió un error al registrarse")
                });
            this.loading = false
        },
        async update(id, user) {
            this.loading = true
            this.user = await UserService.update(id, user)
                .then(response => response.data)
                .catch(e => {
                    console.log(e)
                    alert("Ocurrió un error al actualizar la información")
                });
            this.loading = false
        }
    }
});