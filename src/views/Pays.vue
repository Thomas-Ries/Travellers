<template>
<BlueHeader />

<div class="main-container">
  <h1 class="mb-5 mt-5 font-weight-light"> {{ $store.state.redactionArticle.titreArticle }} </h1>

  <div class="pays-body">
    <img src="../../public/img_brutes/castle.jpg" alt="image du pays" title="image du pays">
    <h2 class="article-title"> {{ $store.state.redactionArticle.titreArticle }} </h2>
    <h3 class="article-auteur font-italic mt-3">Écrit par {{ $store.state.profil.newPseudo }} </h3>


    <p class="article-body mt-5">
      {{ $store.state.redactionArticle.article }}
    </p>

    <div class="social-btn mb-5 mt-5">
      <button @click="toggleFavoris" type="button" class="btn btn-outline-info"><i v-if="reveleFavoris" class="far fa-heart"></i> <i v-else v-bind:toggleFavoris="toggleFavoris" class="fas fa-heart"></i></button>
      <button @click="toggleUser" type="button" class="btn btn-outline-info"> <i v-if="reveleUser" class="far fa-user mr-2"></i>  <i v-else class="fas fa-user-times"></i> </button>
    </div>

    <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.59372217543!2d13.284650268477572!3d52.50697037927333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Allemagne!5e0!3m2!1sfr!2sfr!4v1606811267508!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->

    <h2> Laissez un commentaire </h2>

  </div>

<!--MAIN CONTAINER -->
</div>
</template>


<script>
import BlueHeader from "@/components/Headers/BlueHeader.vue";


export default {
    name:"Pays",

    components: {
    BlueHeader,
  },

  data() {
    return {
      reveleFavoris: true,
      reveleUser: true
    }
  },

  methods: {
    toggleFavoris: function() {
      this.reveleFavoris = !this.reveleFavoris
    },

    toggleUser: function() {
      this.reveleUser = !this.reveleUser
    },
  }
};

</script>

<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.main-container {
  position: absolute;
  top: 7rem;
  width: 180rem;
  height: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.main-container h1 {
  font-size: 4rem;
  text-align: center;
}

.pays-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  height: 50rem;
  width: 70rem;
  border-radius: 10px;
}

.pays-body h2 {
  font-size: 3rem;
  text-decoration: underline;
}

.article-title {
  margin-top: 5rem;
}

.article-body {
  width: 100rem;
  text-align: justify;
  line-height: 2.8rem;
  font-size: 1.4rem;
}

.btn-outline-info {
  height: auto;
  width: auto;
  border: 1px solid #000;
  color: #000;
}

.btn-outline-info:hover {
  height: auto;
  width: auto;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
}

.fa-heart,
.fa-user,
.fa-user-times {
  font-size: 2rem;
  color: #000;
}

.fa-heart:hover,
.fa-user:hover,
.fa-user-times:hover {
  font-size: 2rem;
  color: #000;
}

iframe {
  width: 100rem;
  height: 40rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  border-radius: 5px;
}


</style>