<template>
  <main class="form-signin w-100 m-auto">
    <form>
        <h1 class="h3 mb-3 fw-normal">Iniciar Sesión</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="nombre@ejemplo.com">
            <label for="floatingInput">Dirección de email</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
            <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Recordar
            </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Iniciar sesión</button>
    </form>
</main>
</template>
<script>
export default {
  name: "LoginComponent",
  methods: {
    mostrarFormulario() {
      this.$router.push("/formulario");
    },
  },
};
</script>
<style scoped>
/* Estilos específicos para este componente si los hay */
</style>
