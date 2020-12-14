<template>

    <img class="header-login-img" src="../../public/img_brutes/header-login.jpg" alt="Image de montagnes" title="Images de montagnes">
    <HomeHeader />


      <div class="container">

      <h1> Connexion </h1>
        <form>
          <div class="form-group font-weight-bold">
            <label for="email-login">Adresse email</label>
            <input v-model="usermail" name="usermail" type="email"  class="form-control " id="email-login" aria-describedby="emailHelp" placeholder="nom@mail.com">
          </div>

          <div class="form-group pt-2 font-weight-bold">
            <label for="password-login">Mot de passe</label>
            <input v-model="password" type="password" name="password" class="form-control" id="password-login" placeholder="Mot de passe">
          <div @click="toggleModale">
            <a href="#" class="form-text text-light mt-3">Mot de passe oublié </a>
          </div>
            <Modale v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
          </div>

          <div class="routage-inscription">
            <a><button @click.prevent="login({usermail, password})" class="btn-dark mt-5">Se connecter </button></a>
            <router-link to="/signin"><p class="inscription ml-3">Pas encore inscrit ?</p> </router-link> 
          </div>
       
        </form>

  </div>
</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import Modale from "@/components/Modale";
import { mapActions } from "vuex";


export default {
  name: "login",

  data() {
    return {
      revele: false,
      // usermail:"",
      // password:"",
    }
  },
  components: {
    HomeHeader,
    Modale,
  },

  methods: {
    ...mapActions(["login"]),
    toggleModale: function() {
      this.revele = !this.revele
    },

/* Préparation pour Action retrieveToken dans le Store */
    // login() {
    //   this.$store.dispatch('retrieveToken', {
    //     usermail: this.usermail,
    //     password: this.password,
    //   })
      /* Redirection vers page perso si connexion réussie */
      // .then(response => {
      //   this.$router.push({ name: 'espace-personnel' }) /* Lié à la promesse dans l'action retrieveToken */
      // })
    },

    /*Localstorage */
    // login: function() {
    //   let usermail = this.usermail
    //   let password = this.password
    //   this.$store.dispatch('login', {usermail, password})
    //   .then(() => this.$router.push('/'))
    //   .catch(err => console.log(err))
    // }

  }

</script>



<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.header-login-img {
  top:0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
}

a .navbar-brand {
  color: #fff;
}

a .navbar-brand:hover {
  color: #fff;
}

.navbar {
  position: absolute;
  top: .1rem;
  width: 100%;
  height: 5rem;
  background-color: transparent;
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
}

.container {
  position: absolute;
  top: 25rem;
  width: 50rem;
  height: 30rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.container h1 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}

label {
  font-size: 1.6rem;
}

.routage-inscription {
  display: flex;
}

.inscription {
  font-size: 1.6rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  margin-top: 3.5rem;
}

.btn-dark {
  margin-top: 1rem;
  height: auto;
  font-size: 1.6rem;
  border-radius: 5px;
}

.btn-dark:hover {
  color: #000;
  background-color: #FFF;
  border-radius: 5px;
  transition: color 1s;
}


</style>