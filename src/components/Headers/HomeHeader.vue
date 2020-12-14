<template>
  <div>
    <!-- <img class="header-img" src="img_brutes/mountains.jpeg" alt="Image de montagnes" title="Images de montagnes"> -->

  <nav class="navbar">

    <router-link to="/"> <a class="navbar-brand"><i class="fas fa-globe-americas"></i>Traveller's & Co</a> </router-link>
    <form class="form-inline">
        <router-link to="/login"><button v-if="!loggedIn" type="button" class="btn btn-light">Connexion</button></router-link>
        <router-link to="/signin"><button v-if="!loggedIn" type="button" class="btn btn-light">Inscription</button></router-link>
        <!-- <router-link to="/signin"><button v-if="isLoggedInLocalStorage" type="button" class="btn btn-light">Déconnexion</button></router-link> -->
        <!-- <router-link to="/espace-personnel"><button v-if="loggedIn" type="button" class="btn btn-light">Mon espace</button></router-link> -->

    </form>
  </nav>
  </div>

  <!-- <h1 class="header-title">Partagez vos Aventures,
    <br>
    Partagez votre Monde !</h1> -->

 <!-- <form class="searchbar">
  <div class="form-group">
    <input type="search" class="form-control" id="searchBar" aria-describedby="searchBar" placeholder="Quel pays découvrir ?">
  </div>
  <button type="submit" class="searchbar-btn btn">Recherche</button>
</form> -->

</template>

<script>
export default {
    name: "HomeHeader",

    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }
}

</script>

<style>

* {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.header-img {
  height: 100vh;
  width: 100%;
  position: absolute;
}

.navbar {
  position: absolute;
  top: .1rem;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  color: #FFF;
}

.navbar a {
  color: #fff;
}

.fa-globe-americas {
  font-size: 2.5rem;
  margin-right: 1.5rem;
}

.navbar-brand {
  font-size: 2.5rem;
  margin-left: .5rem;
}

.btn {
  background-color: transparent;
  color: #FFF;
  margin-right: 2rem;
  height: 3.5rem;
  width: auto;
  font-size: 1.5rem;
  border-radius: 5px;
}

.header-title {
  position: absolute;
  font-style: italic;
  font-size: 3rem;
  font-weight: 200;
  top: 20rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #FFF;
}

.searchbar {
  position: absolute;
  top: 25rem;
  left: 0;
  right: 0;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 40rem;
  background-color: transparent;
  color: #FFF;
  border-radius: 10px;
}

#searchBar {
  height: 3rem;
  background-color: transparent;
  font-size: 1.4rem;
  color: #fff;
  border: 1px solib #fff;
}

#searchBar:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.searchbar-btn {
  border: none;
  margin-top: -1rem;
}

.searchbar-btn:hover {
  background-color: transparent;
  color: #fff;
  font-weight: 600;
}

.searchbar-btn:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>