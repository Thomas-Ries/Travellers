<template>

    <div class="img-container">
        <h3> {{ article.title }} </h3>
        <h4 class="font-italic">Écrit par {{article.user}} </h4>

        <div v-for="country in $store.state.countries" :key="country.id">
          <div v-if="country.name == article.country">
              <div @click="toggleArticle">
              <a href="#"> <img class="img-affichage-article" v-bind:src="country.picture" v-bind:alt="country.name"></a>
              </div>
              <Article v-bind:reveleArticle="reveleArticle" v-bind:toggleArticle="toggleArticle" v-bind:article="article" v-bind:country="country" />
            </div>
          </div>

    <div class="mb-2 mt-2">
        <button @click="toggleFavoris" type="button" class="btn btn-outline-info"> <i v-if="reveleFavoris" class="far fa-heart"></i> <i v-else v-bind:toggleFavoris="toggleFavoris" class="fas fa-heart"></i> </button>
        <button @click="toggleUser" type="button" class="btn btn-outline-info"> <i v-if="reveleUser" class="fas fa-user-plus"></i> <i v-else class="fas fa-user-times"></i> </button>
    </div>
    </div>
  
</template>

<script>
import Article from "@/components/Articles/Article";
import {mapGetters} from "vuex";


export default {
    name:"affichageArticles",

    components: {
      Article,
  },

    data() {
    return {
      reveleFavoris: true,
      reveleUser: true,
      reveleArticle: false,
    }
  },

    props: {
      article: Object,
      country: Object,
    },

    methods: {
      ...mapGetters(["allCountries"]),

    toggleFavoris: function() {
      this.reveleFavoris = !this.reveleFavoris
    },
    toggleUser: function() {
      this.reveleUser = !this.reveleUser
    },
    toggleArticle: function() {
      this.reveleArticle = !this.reveleArticle
    }
    },


    mounted() { 
      console.log("DEBUG");
      this.allCountries();
    
  }

    
}
</script>

<style scoped>
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

h3 {
  font-size: 2rem;
  font-weight: 500;
}

h4 {
  font-size: 1.6rem;
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

.img-affichage-article {
  width: 47rem;
  height: 57rem;
}

</style>