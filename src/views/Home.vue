<template>
  <div class="home">
     <img class="header-img" src="img_brutes/mountains.jpeg" alt="Image de montagnes" title="Images de montagnes">
    <HomeHeader />
      <h1 class="header-title">
        Partagez vos Aventures,
        <br>
        Partagez votre Monde !</h1>

    <div class="main-container">


    
      <div class="main-title">
        <h1> Destinations les plus populaires</h1>
        <h2> Découvrez où les Traveller's se sont dernièrement rendu et prenez une dose d'inspiration pour votre nouveau voyage.</h2>
      </div>


      <div class="general-img-container">
        <div v-for="article in $store.state.redactionArticle" v-bind:key="article.id" class="img-container">
          <AffichageArticles v-bind:article="article" />
        </div>
    <!--GNRL IMG CONTAINER-->
      </div>
    

      <div class="boutton-pagination">
        <button type="button" class="btn btn-outline-dark"><i class="fas fa-arrow-circle-left"></i></button>
        <button type="button" class="btn btn-outline-dark"><i class="fas fa-arrow-circle-right"></i></button>
      </div>


      <!--JUMBOTRON-->
      <div class="jumbotron">
      <div class="container-jumbo">

      <div class="square">
        <h1 class="display-4"><i class="fas fa-user-friends mr-3"></i>Notre communauté</h1>
        <p class="lead">
        Des Travellers's aux 4 coins du monde qui vous partagent leurs expériences uniques et pleine de ressources pour celles et ceux voulant s'évader et découvrir de nouvelles contrées
        </p>
      </div>

      <div class="square">
        <h1 class="display-4"><i class="fas fa-map-marker-alt mr-3"></i>Soyez inspirés</h1>
        <p class="lead">
        Prenez une bonne dose d'inspiration en découvrant, à travers les récits de nos Travellers, des lieux dans lesquels vous n'êtes jamais allés.
        Sur Traveller's & Co devenez vous même un globetrotter !
        </p>
      </div>

      <div class="square">
        <h1 class="display-4"><i class="fas fa-heart mr-3"></i>Sauvegardez des articles </h1>
        <p class="lead">
          Conservez dans votre espace personnel tous vos articles coup de coeurs et replongez vous autant de fois que vous le désirez dans les récits qui vous font voyager.
        </p>
      </div>

      <div class="square">
        <h1 class="display-4"><i class="fas fa-user-plus mr-3"></i>Suivez vos Travellers favoris</h1>
        <p class="lead">
        Ajoutez en favoris vos Taravellers préférés et restez connectés afin de les retrouver plus facilement. Vous ne perdre plus la trace de vos globetroteurs favoris.
        Retrouvez les facilement dans votre espace personnel.
        </p>
      </div>

    </div>
    <!--JUMBOTRON-->
    </div>

    <div class="video">
        <h2> Voyagez avec nous !</h2>
        <video class="mt-5" src="../../public/video/travelling.mp4" height=740 controls poster="../../public/video/vignette.png">
          Cette vidéo ne peut être affichée sur votre navigateur Internet.<br>
        </video>
        <small class="font-italic"> © Chris Rogers - All rights reserved</small>
    </div>  

    <div class="team">
        <h2> Apprenez en plus sur Traveller's & Co</h2>

          <div class="team-picture-selected">
            
            <div class="first">
              <img src="../../public/img_brutes/home-team.jpg" alt="image à propos" title="À props de nous" >
              <h3> A propos de nous </h3>
              <router-link to="/about-us"> <p> En savoir plus <i class="fas fa-plus"></i> </p></router-link>
            </div>

            <div class="first">
              <img src="../../public/img_brutes/rejoindre.jpg" alt="Rejoingez l'équipe" title="Rejoingez l'équipe">
              <h3> Rejoignez l'équipe Travellers </h3>
              <router-link to="/join-us"><p> En savoir plus <i class="fas fa-plus"></i> </p></router-link>
            </div>

            <div class="first">
              <img src="../../public/img_brutes/citation.jpg" alt="Citation" title="Citation">
              <h4 class="font-weight-light font-italic"> " Je n'ai pas encore été partout, <br> mais c'est sur ma liste " </h4>
              <h5> Susan Sontag</h5>
            </div>

            <!--TEAM PICTURE SELECTED-->
          </div>
      <!--TEAM-->
    </div>

      <Footer />

      <!--MAIN CONTAINER-->
    </div>

  <!--HOME-->
  </div>
</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import Footer from "@/components/Footer.vue";
import AffichageArticles from "@/components/Articles/AffichageArticles.vue";
import {mapGetters} from "vuex";



export default {
  name: "Home",

  components: {
    HomeHeader,
    AffichageArticles,
    Footer
  },
  methods: {
    ...mapGetters(["allArticles"]),
  },

  mounted() {
      this.allArticles();
  }
  
};
</script>


<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.header-img {
  height: 100vh;
  width: 100%;
  position: absolute;
}

.header-title {
  position: absolute;
  color: #fff;
  top: 23rem;
  font-size: 3rem;
  font-weight: 400;
  left: 0;
  right: 0;
  text-align: center;
}

.main-container {
  position: absolute;
  top: 105rem;
  width: 160rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  margin-top: 1rem;
}

.main-title h1 {
  margin-bottom: 3rem;
  font-size: 4rem;
}

.main-title h2 {
  margin-bottom: 8rem;
  font-size: 2rem;
  width: 90rem;
  font-weight: 400;
}

/**IMAGES**/
.general-img-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 3rem;
}

.img-container h3 {
  font-size: 2rem;
  font-weight: 500;
}

.img-container h4 {
  font-size: 1.3rem;
  font-weight: 300;
}

.far,
.fas {
  font-size: 2rem !important;
  color: #000;
  text-align: center;
}

.far:hover,
.fas:hover {
  color: #fff;
}

.btn-outline-info {
  width: 5rem;
  height:3rem;
}

.btn-outline-info:hover {
  background: #012C50;
  color: #fff !important;
}

.img-container img {
  border-radius: 5px;
}

/* BOUTON PAGINATION */
.boutton-pagination {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  width: 10%;
}

.fa-arrow-circle-left,
.fa-arrow-circle-right {
  font-size: 3rem !important;
}

.btn-outline-dark {
  height: auto;
  width: auto;
}


/*JUMBOTTRON*/
.jumbotron {
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 1px 1px 15px lightgrey;
  border-radius: 5px;
  width: 100%;
}

.container-jumbo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.square {
  padding-left: 1rem;
  padding-right: 1rem;
  width: 35rem;
}

.display-4 {
  margin-bottom: 1.5rem;
}

p .lead {
  text-align: justify;
}

.display-4 {
  font-size: 2rem;
  font-weight: 500;
}

.fa-user-friends,
.fa-map-marker-alt,
.fa-heart,
.fa-user-plus {
  font-size: 2rem;
  margin-right: .5rem;
}

.lead {
  font-weight: 300;
  font-style: italic;
}


/* VIDEO */
.video h2 {
  margin-top: 10rem;
  margin-bottom: 5rem;
  text-align: left;
  font-size: 4rem;
  font-weight: 400;
}

.video small {
  font-size: 1rem;
}

video {
  margin: 0 auto ;
  width: 160rem;
  border-radius: 5px;
}


/*IMAGES FIN DE PAGE */

.team {
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  width: 160rem;
}

.team h2 {
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 5rem;
}

.team img {
  height: 30rem;
  width: 50rem;
  border-radius: 5px;
}

.team-picture-selected {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15rem;
  width: 160rem;
}

.first h3 {
  margin-top: -28rem;
  margin-left: 2rem;
  color: #fff ;
  font-size: 2.8rem;
  font-weight: 500;
}

.first h4 {
  margin-top: -21rem;
  margin-left: 2rem;
  color: #fff ;
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;
}

.first h5 {
  color: #fff;
  font-size: 2em;
  font-weight: 200;
  margin-left: 2rem;
  text-align: center;
}

.first p {
  margin-left: 2rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
}

.team-picture-selected p:hover {
  text-decoration: underline;
}

.fa-plus {
  color: #fff;
  margin-left: .5rem;
}

</style>

