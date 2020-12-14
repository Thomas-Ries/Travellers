<template>

    <img class="header-login-img" src="../../public/img_brutes/header-about.jpg" alt="Image de montagnes" title="Images de montagnes">
    <HomeHeader />

      <h1> Découvrez l'équipe Traveller's & Co</h1>

      <div class="container">
        <div class="vision">
          <i class="fas fa-globe-americas"></i>
          <div class="title-vision">
            <h2 class="mb-5"> Notre vision </h2>
            <h3> Au coeur de la vision de l'équipe Traveller's & Co se trouve une envie de découverte et de partage. C'est à travers ces deux prinsipes fondateurs qu'ils ont décidés 
                  de vous inviter à prendre part à cette aventure. Voyager, découvrir, grandir par le partage sont des notions qui leur étaient important de vous proposer.
                <br>
                À travers des valeurs de simplicité et d'ouverture aux autres, Travellers's & Co se veut être votre compagnon de route. Toute l'équipe sera là pour vous accompagner et rendre votre voyage sur notre site, le plus agréable et enrichissant possible.
            </h3>
          </div>
        </div>

        <hr class="mt-5">

            <h2 class="team-title"> L'équipe Travellers </h2>

        <div class="team">
            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil5.jpg" alt="">
                <h4 class="mt-3"> Mathilde </h4>
                <h5 class="mt-2">Développeuse Front-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil2.jpg" alt="">
                <h4 class="mt-3"> Marcelle </h4>
                <h5 class="mt-2">Développeuse Front-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil3.jpg" alt="">
                <h4 class="mt-3"> Mathis </h4>
                <h5 class="mt-2">Développeur Front-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil9.jpg" alt="">
                <h4 class="mt-3"> Mohammed </h4>
                <h5 class="mt-2">Développeur Back-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil6.jpg" alt="">
                <h4 class="mt-3"> Arnaud </h4>
                <h5 class="mt-2">Développeur Back-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil7.jpg" alt="">
                <h4 class="mt-3"> Jérémie </h4>
                <h5 class="mt-2">Développeur Back-End </h5>
              </div>
            </div>

            <div class="photo-team">
              <div class="name-title">
                <img class="mt-3" src="../../public/img_brutes/photo-profil8.jpg" alt="">
                <h4 class="mt-3"> Thomas </h4>
                <h5 class="mt-2">Développeur Front-End </h5>
              </div>
            </div>

        <!--TEAM-->
        </div>

            <h2 class="team-title"> Envie de nous rejoindre ? </h2>
            <h3> Vous aimez l'aventure, la découverte et vous dépasser ? Vivre un voyage au sein d'une équipe passionée vous tentes? Alors n'hésitez pas à nous contacter !</h3>
            <router-link to="/join-us"> <h3> En savoir plus </h3> </router-link>


        <!--CONTAINER-->
      </div>

    <Footer />


</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AboutUs",

    components: {
    HomeHeader,
    Footer
  },

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

h1 {
  position: absolute;
  color: #fff;
  top: 25rem;
  font-size: 5rem;
  font-weight: 400;
  left: 0;
  right: 0;
  text-align: center;
}



.container {
  position: absolute;
  top: 105rem;
  width: 100rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.container i {
  color: #000;
  font-size: 18rem;
  margin-top: 7rem;
}

.vision {
  display: flex;
  flex-direction: row
}

.title-vision {
  display: column;
  margin-left: 3rem;
  margin-bottom: 5rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  line-height: 2.8rem;
  color: #000;
}

h4 {
  font-size: 2rem;
  font-weight: 600;
}

h5 {
  font-size: 1.6rem;
  font-weight: 300;
}

.title-vision h3 {
  font-weight: 400;
  text-align: justify;
}

.team-title {
  margin-top: 8rem;
}



/*PHOTOS ET DESCRIPTIF TEAM*/
.team {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 10rem;
}

.photo-team {
  margin-top: 3rem;
  width: 25rem;
}

.photo-team img {
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
}

.name-title {
  text-align: center;
}

/*JUMBOTTRON*/
.jumbotron {
  position: absolute;
  top: 270rem;
  left: 0;
  right:0;
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 1px 1px 15px lightgrey;
  border-radius: 5px;
  width: 160rem;
}

.container-jumbo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 160rem;
  height: 100%;
}


</style>