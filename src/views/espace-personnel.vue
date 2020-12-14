<template>
<!-- <div v-for="profil in $store.state.profil" v-bind:key=profil.id>
  <div v-if="checkId(profil)"> -->
<div class="img-espace-personnel">
    <img src="../../public/img_brutes/espace-personnel.jpg" alt="">
    <HomeHeader />
</div>



<h1 class="mt-4 font-weight-normal">Bienvenue {{ $store.state.profil.name }}</h1>
<!-- <h1 class="mt-4 font-weight-bold">Bienvenue </h1> -->
    <div class="img-profil">
      <img src="../../public/img_brutes/photo-profil8.jpg" alt="Photo de Profil" title="Photo de Profil">
    </div>

    <div class="recapitulatif">
      <div class="recapitulatif-details mr-5">
        <!-- <p>{{ profil.nbrArticles }} </p> -->
        <p> 8 </p>
        <h3> Articles </h3>
      </div>
      <div class="recapitulatif-details">
        <!-- <p>{{ profil.nbrFollowers }} </p> -->
        <p> 22 </p>
        <h3> Followers </h3>
      </div>

    </div>

    <div class="profil">
      <button @click="toggleProfil" type="button" class="btn-profil btn btn-secondary ">Éditer mon profil</button>
    </div>


<div class="sidebar-menu mt-4 ml-4">
  <div class="sidebar-components">
    <button @click="toggleArticle" type="button" class="btn btn-secondary ">Rédiger un article</button>
    <button @click="toggleMesArticles" type="button" class="btn btn-secondary ">Mes articles publiés</button>
    <button @click="toggleMesArticlesFavoris" type="button" class="btn btn-secondary ">Mes coups de coeur</button>
    <button @click="toggleFollow" type="button" class="btn btn-secondary ">Mes travellers favoris</button>
    <button type="button" class="btn btn-secondary"><a class="btn-secondary" href="mailto:contact@travellers.com"> Nous contacter <i class="far fa-envelope ml-2"></i> </a></button>

    <RedactionArticle v-bind:reveleArticle="reveleArticle" v-bind:toggleArticle="toggleArticle"
    v-on:close-modal="toggleArticle" />
    <ArticlesPersonnels v-bind:reveleMesArticles="reveleMesArticles" v-bind:toggleMesArticles="toggleMesArticles" />
    <ArticlesFavoris v-bind:reveleMesArticlesFavoris="reveleMesArticlesFavoris" v-bind:toggleMesArticlesFavoris="toggleMesArticlesFavoris" />
    <Profil v-bind:reveleProfil="reveleProfil" v-bind:toggleProfil="toggleProfil" />
    <Follow v-bind:reveleFollow="reveleFollow" v-bind:toggleFollow="toggleFollow" />
  <!--SIDEBAR COMPONENTS-->
  </div>


<!--SIDEBAR MENU-->
</div>  
<!-- </div>
</div> -->

</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import RedactionArticle from '@/components/EspacePersonnel/RedactionArticle';
import ArticlesPersonnels from '@/components/EspacePersonnel/ArticlesPersonnels';
import ArticlesFavoris from '@/components/Articles/ArticlesFavoris';
import Profil from '@/components/EspacePersonnel/Profil';
import Follow from '@/components/EspacePersonnel/Follow';
import router from "../router";
import { mapActions} from "vuex";

export default {
    name: "EspacePersonnel",
    
    data() {
      return {
        reveleArticle: false,
        reveleMesArticles: false,
        reveleMesArticlesFavoris: false,
        reveleProfil: false,
        reveleFollow: false,
      };
    },

    components: {
    HomeHeader,
      Profil,
      RedactionArticle,
      ArticlesPersonnels,
      ArticlesFavoris,
      Follow,
    },

    mounted() {
      function checkLogin () {
        let id = localStorage.getItem('id');
        if (router.currentRoute.value.params.id != id) {
          router.push({name:'home'});
          alert("Vous n'avez pas accès à cette page !");
        }
      }
        checkLogin();
        this.getUser(localStorage.getItem("id"));
      
    },

    // computed: mapGetters(['getUser']),

    methods: {
      ...mapActions(["getUser"]),
      // checkId: function (profil) {
      //   console.log(profil.data.id);
      //   if (profil.data.id == localStorage.getItem('id')) {
      //     return true;
      //   }
      // },
         toggleProfilModif: function() {
            console.log("DEBUG");
        this.reveleArticle = !this.reveleArticle
      },
      toggleArticle: function() {
        this.reveleArticle = !this.reveleArticle
      },
      toggleMesArticles: function() {
        this.reveleMesArticles = !this.reveleMesArticles
      },
      toggleMesArticlesFavoris: function() {
        this.reveleMesArticlesFavoris = !this.reveleMesArticlesFavoris
      },
      toggleProfil: function() {
        this.reveleProfil = !this.reveleProfil
      },
      toggleFollow: function() {
        this.reveleFollow = !this.reveleFollow
      },
    },
}
</script>



<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  text-align: center;
  text-decoration: underline;
  font-weight: 300;
  font-size: 3rem;
}

.img-espace-personnel {
  position: absolute;
  width: 100%;
}

.img-espace-personnel img {
  height: 50vh;
  width: 100%;
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

h2 {
  font-weight: 400;
}

.top-title-sidebar img {
  margin-right: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
}

.img-profil {
  position: absolute;
  top: 40rem;
  left: 60rem;
  right:0;
  height: 80rem;
  width: 80rem;
}

.img-profil img {
  height: 20rem;
  width: 20rem;
  border: 5px solid #fff;
  border-radius: 60%;
}

.profil {
  position: absolute;
  top: 56rem;
  left: 82rem;
  right: 0;
}


.recapitulatif {
  position: absolute;
  display: flex;
  top: 50rem;
  left: 82rem;
}

.recapitulatif-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.recapitulatif-details p {
  font-size: 1.4rem;
  margin-bottom: -.2rem;
}

.btn-profil {
  width: 18.5rem;
}

.sidebar-menu {
  position: absolute;
  display: flex;
  flex-direction: row;
  margin: auto;
  top: 65%;
  width: 110rem;
  height: auto;
  left:40rem;
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}

.sidebar-components {
  display: flex;
  flex-direction: row;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}


.btn-secondary {
  color: #fff;
  background-color: #477fb1;
  font-size: 1.6rem;
}

.btn-secondary:hover {
  color: #B9F1DA;
  text-decoration: none;
}

.fa-envelope {
  font-size: 2rem;
}


</style>