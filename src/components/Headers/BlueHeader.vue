<template>
    <nav class="navbar">

    <router-link to="/"><a class="navbar-brand"><i class="fas fa-globe-americas"></i>Traveller's & Co</a></router-link>
    <form class="form-inline">
        <router-link to="/login"><button type="button" class="btn btn-light">Connexion</button></router-link>
        <router-link to="/signin"><button type="button" class="btn btn-light">Inscription</button></router-link>
        <!--  <router-link to="/signin"><button v-if="loggedIn" type="button" class="btn btn-light">Déconnexion</button></router-link>
        <router-link to="/espace-personnel"><button v-if="loggedIn" type="button" class="btn btn-light">Mon espace</button></router-link> -->

    </form>
  </nav>
</template>

<script>
export default {
    name:"BlueHeader",

    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }

}
</script>



<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  position: absolute;
  top: 0rem;
  width: 100%;
  height: 6rem;
  background-color: #477fb1;
  color: #FFF;
}

.fa-globe-americas {
  font-size: 2.5rem;
  margin-right: 1.5rem;
  color: #fff;
}


.btn {
  background-color: #477fb1;
  color: #fff;
  margin-right: 2rem;
  height: 3.5rem;
  width: auto;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid #fff;
}

.btn:hover {
  background-color: #fff;
  color: #477fb1;
}

a .navbar-brand {
  color: #fff;
  font-weight: 300;
}

a .navbar-brand:hover {
  color: #fff;
}

</style>