<template>

    <img class="header-signin-img" src="../../public/img_brutes/header-signin.jpg" alt="Image de montagnes" title="Images de montagnes">
    <HomeHeader />

    <div class="container">

      <h1> Inscription </h1>
    <form>

        <div class="form-group font-weight-bold text-light">
          <label for="nom-utilisateur">Nom d'utilisateur</label>
          <input v-model="name" type="text" class="form-control" id="nom-utilisateur" aria-describedby="nom-utilisateur" placeholder="Pseudonyme">
        </div>

        <div class="form-group font-weight-bold text-light">
          <label for="signin-mail">Adresse email</label>
          <input v-model="email" type="email" class="form-control" id="email-signin" aria-describedby="emailHelp" placeholder="nom@mail.com">
        </div>

        <!-- <div class="form-group font-weight-bold text-light">
        <label for="signin-mail-confirm">Confirmer email</label>
        <input type="email" class="form-control" id="email-signin-confirmation" aria-describedby="emailHelp" placeholder="Confirmation de l'email" v-model="emailConfirmation">
        <small id="emailHelp" class="form-text text-light">Nous ne partageons pas vos données</small>
        </div> -->
        

        <div class="form-group mt-5 font-weight-bold text-light">
          <label for="exampleInputPassword1">Mot de passe</label>
          <input v-model="password" type="password" class="form-control" id="password-signin" placeholder="Mot de passe">
        </div>

        <div class="form-group font-weight-bold text-light">
          <label for="exampleInputPassword1 ">Confirmation du mot de passe</label>
          <input v-model="passwordConfirmation" type="password" class="form-control" id="password-signin-confirmation" placeholder="Confirmation du mot de passe">
        </div>

        <div class="form-group form-check pt-3">
          <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" required>
          <label class="form-check-label pl-3 pb-4 text-light" for="exampleCheck1"> J'ai lu les <router-link class="conditionsgenerales text-light" to="/cgu"> Conditions Générales du site</router-link></label>
        </div>


        <div class="routage-inscription">
          <button @click.prevent="register({name, email, password, passwordConfirmation})" class="btn-dark mt-5">S'inscrire </button>
          <!-- @click.prevent="signIn(email, emailConfirmation, password, passwordConfirmation, nomUtilisateur )"  -->
          <router-link to="/login"><p class="inscription ml-3">Déjà inscrit ?</p> </router-link> 
        </div>

    </form>

    <!--CONTAINER-->
  </div>

</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import {mapActions} from "vuex";

export default {
  name: "signin",

  components: {
    HomeHeader,

  },
  
  methods: {
    ...mapActions(["register"]),
  },

  data() {
    // return {
    //   nomUtilisateur: "",
    //   email: "",
    //   password: "",
    //   passwordConfirmation: "",
    //   is_admin: null
    // }
  },
    // LOCALSTORAGE
    // methods: {
    //   register: function () {
    //     let data = {
    //       nomUtilisateur: this.nomUtilisateur,
    //       email: this.email,
    //       password: this.password,
    //       passwordConfirmation: this.passwordConfirmation,
    //       is_admin: this.is_admin
    //     }
    //     this.$store.dispatch('register', data)
    //    .then(() => this.$router.push('/'))
    //    .catch(err => console.log(err))
    //   }
    // }

  // methods: {
  //    signIn: async function (email, emailConfirmation, password, passwordConfirmation, name) {
  //      try {
  //       console.log("Entrée fonction signIn")
  //       console.log(email)
  //       console.log(emailConfirmation)
  //       console.log(password)
  //       console.log(passwordConfirmation)
  //       console.log(name)

  //         if (email != emailConfirmation || password != passwordConfirmation || !name) {
  //             alert("Les adresses emails ou mots de passe ne coincïdent pas")
  //           }
  //       const data = {
  //           'name': name, 
  //           'email': email,
  //           'password': password,
  //           'passwordConfirmation': passwordConfirmation,
  //         }
  //       const response = await fetch("https://codingstg.epidoc.eu/api/users", {
  //         method: 'POST',
  //         // mode: 'cors',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // 'Authorization': 'Bearer ' +  setCookie("Token", response.json().accessToken)
  //         },
  //         body: JSON.stringify(data)
  //         });

  //        return response.json();
  //      }  
  //      catch {

  //      }

  //    }
  }


</script>

<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.header-signin-img {
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

.fa-globe-americas {
  font-size: 2.5rem;
  margin-right: 1.5rem;
}

a .navbar-brand {
  color: #FFF;
}

a .navbar-brand:hover {
  color: #FFF;
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
  top: 15rem;
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
  color: #FFF;
}

label {
  font-size: 1.6rem;
}

.routage-inscription {
  display: flex;
}

.inscription {
  font-size: 1.6rem;
  color: #FFF;
  text-decoration: none;
  margin-top: 4rem;
}

small {
  font-size: 1rem;
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

.conditionsgenerales {
  color: #000;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: underline;
}
</style>
