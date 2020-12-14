<template>
  <div class="jumbotron">
  <div class="container">
  <div class="logo-social">
    <h1 class="display-4 "><i class="fas fa-globe-americas"></i>Traveller's & Co</h1>
    <p class="lead ml-5 font-light">Osez partager votre monde !</p>
    </div>

    <div class="liens">
        <h2 class="footer-title"> Législation</h2>
        <router-link to="/cgu"> <p class="footer-link"> Conditions Générales</p> </router-link>
        <router-link to="/mentions-legales"> <p class="footer-link"> Mentions Légales </p> </router-link>
    </div>

    <div class="liens">
        <h2 class="footer-title ml-2"> Social </h2>
        <a href="https://www.facebook.com/TravellerCo-108020041152379" target="blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/travellers.and.co/" target="blank"><i class="fab fa-instagram-square ml-2"></i></a>
    </div>

    <div class="liens">
        <h2 class="footer-title"> Contact </h2>
        <a class="contact" href="mailto:contact@travellers.com"> contact@travellers.com <i class="far fa-envelope ml-2"></i> </a>

    </div>

  </div>


</div>
</template>

<script>
export default {
    name:"Footer"

}
</script>

<style scoped>

body {
  box-sizing: border-box;
  font-size: 10px;
  font-family:'Montserrat', sans-serif;
}

.jumbotron {
    position: absolute;
    top: auto;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    height: 20rem;
    width: 160rem;
    background-color:#dee0e6;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: -2rem;
    width: 100%;
    height: 15rem;
}

.fa-globe-americas {
  font-size: 2.5rem;
  margin-right: .8rem;
}

p {
    font-size: 1.2rem;
}

a .fa-facebook,
a .fa-instagram-square {
    color: #000;
    font-size: 3rem;
}

.display-4 {
    font-size: 2rem;
    font-weight: 500;
}

.footer-title {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
}

.footer-link {
    color: #000;
    line-height: 1rem;
}

.contact {
    color: #000;
    font-size: 1.2rem;
}

.contact:hover {
    text-decoration: none;
}

.fa-envelope {
    font-size: 1.5rem;
}


</style>