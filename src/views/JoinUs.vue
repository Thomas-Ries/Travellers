<template>

    <img class="header-login-img" src="../../public/img_brutes/header-joinus.jpg" alt="Image de montagnes" title="Images de montagnes">
    <HomeHeader />

      <h1> Rejoignez l'Aventure Traveller's & Co</h1>


      <div class="container">
        <div class="vision">
          <i class="fas fa-globe-americas"></i>
          <div class="title-joinUs">
            <h2 class="mb-5"> Nous rejoindre </h2>
            <h3> Rejoindre l'équipe de Traveller's & Co c'est avant tout partager une passion. Au sein de notre équipe vous trouverez de la solidarité et de l'entraide. Une complicité de chaque instant qui nous différencie des autres plateformes.
                <br>
                Venez posez vos valises et tenter l'expérience Traveller's & Co !
            </h3>
          </div>
        </div>

        <hr class="mt-5">

          <h2 class="team-title"> L'équipe Travellers </h2>
            <div class="join-team">
                <p> Les collaborateurs Traveller's sont avant tout un équipe forte de compétences variées mais toutes complémentaires. Une équipe où chacun peut compter sur l'autre.</p>
                <h3>Envie de nous rejoindre ?</h3>
                <button type="button" class="btn btn-outline-info">Écrivez-nous</button>
            </div>

            <h2 class="team-title"> Découvrez notre équipe </h2>
               <router-link to="/about-us"> <h3> En savoir plus + </h3> </router-link>

            <div class="discover-team mt-5">
              <img class="mr-4" src="../../public/img_team/team1.jpg" alt="">
              <img src="../../public/img_team/team2.jpg" alt="">
              <img class="mr-4 mt-4" src="../../public/img_team/team3.jpg" alt="">
              <img class="mt-4" src="../../public/img_team/team4.jpg" alt="">
              <img class="mr-4 mt-4" src="../../public/img_team/team5.jpg" alt="">
              <img class="mt-4" src="../../public/img_team/team6.jpg" alt="">
            </div>



        <!--CONTAINER-->
      </div>

    <Footer />


</template>

<script>
import HomeHeader from "@/components/Headers/HomeHeader.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "JoinUs",

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
  margin-top: 10rem;
}

.vision {
  display: flex;
  flex-direction: row
}

.title-joinUs {
  display: column;
  margin-left: 3rem;
  margin-bottom: 5rem;
}

h2 {
  font-size: 4rem;
  margin-top: 8rem;
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

.title-joinUs h3 {
  font-weight: 400;
  text-align: justify;
}

.team-title {
  margin-top: 8rem;
}

.join-team p {
    font-size: 1.5rem;
    margin-top: 2rem;
}

.btn-outline-info {
    color: #fff;
    background-color: #477fb1;
}

.btn-outline-info:hover {
    color: #fff;
    background-color: #292a73;
}

.discover-team {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 140rem;
}

.discover-team img {
    height: 30rem;
    width: 60rem;
    border-radius: 10px;
}




/*JUMBOTTRON*/
.jumbotron {
  position: absolute;
  top: 300rem;
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