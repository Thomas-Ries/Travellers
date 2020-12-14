<template>
  
<div class="block-modale" v-if="reveleArticle">
    <div class="overlay" @click="toggleArticle"></div>

        <div class="modale card">
        <div class="btn-modale btn btn-outline-dark font-weight-bold" @click="toggleArticle"> x </div>

        <div class="main-container">

            <div class="img-container">
                <img v-bind:src="country.picture" v-bind:alt="country.name" v-bind:title="country.name">    
            </div>

            <div class="text-container">
                <h1 class="mb-3 font-weight-normal"> {{ article.title }} </h1>

                <h3 class="article-auteur font-weight-light font-italic mb-3">Écrit par {{article.user}} </h3>
                <h3 class="article-auteur font-weight-light font-italic">Pays : {{article.country}} </h3>
                    <div class="article">
                        <p class=" pt-3 ml-3">
                        {{ article.content }}
                        </p>
                    </div>

                <div class="ajout mb-5 mt-5">
                    <button @click="toggleFavoris" type="button" class="btn btn-outline-dark"><i v-if="reveleFavoris" class="far fa-heart"></i> <i v-else v-bind:toggleFavoris="toggleFavoris" class="fas fa-heart"></i></button>
                    <button @click="toggleUser" type="button" class="btn btn-outline-dark"> <i v-if="reveleUser" class="far fa-user mr-2 ml-2"></i>  <i v-else class="fas fa-user-times"></i> </button>
                </div>

                <hr>

                <div class="commentaire">

                <AffichageCommentaires v-bind:article= "article.id" />
                
                </div>

<!--TEXT CONTAINER-->    
            </div>

<!--MAIN CONTAINER-->    
        </div>




        </div>

<!--BLOCK-MODALE-->    
</div>





</template>

<script>
// import Commentaire from "@/components/Commentaire"
import AffichageCommentaires from "@/components/Commentaires/AffichageCommentaires"

export default {

    name: "article",

    props: {
        reveleArticle: Boolean,
        toggleArticle: Function,
        addCommentaires: Function,
        articleContent: Object, 
        article: Object, 
        country: Object,
    }, 

    components: {
        AffichageCommentaires,
  },

    data() {
    return {
      reveleFavoris: true,
      reveleUser: true,
      reveleCommentaire: false,
    }
  },

  methods: {
    toggleFavoris: function() {
      this.reveleFavoris = !this.reveleFavoris
    },

    toggleUser: function() {
      this.reveleUser = !this.reveleUser
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

.block-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 80vh;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}


.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: #F8F8F8;
    color: #333;
    padding: 5rem;
    position: fixed;
    width: 160rem;
    height: 100rem;
    top: 5%;
    max-height: calc(100vh - 90px);
    overflow-y: auto;
}

.btn-modale {
    position: absolute;
    top: 1rem;
    right: -1rem;
    color: #fff;
    background-color: transparent;
    height: auto;
}

.btn-modale:hover {
    color: #000;
}

.main-container {
    display: flex;
    justify-content: space-between;
}

img {
    height: 70rem;
    width: 80rem;
    border-radius: 10px;
}

.img-container {
    width: 80rem;
    margin-left: 1rem;
}

.text-container {
    background: transparent;
    width: 60rem;
    height: 80rem;
    border-radius: 10px;
}

.text-container h1, h3 {
    text-align: center;
}

.article {
    background-color: #fff;
    border-radius: 5px;
    margin-left: 2rem;
    margin-top: 2rem;
    width: 60rem;
    height: auto;
}

.article p {
    font-size: 1.4rem;
    text-align: justify;
    margin-right: 1.5rem;
    padding-bottom: 1.5rem;
}

.btn-outline-dark,
.btn-outline-dark i {
    color: #000;
    font-size: 1.5rem;
}

.btn-outline-dark:hover {
    color: #fff;
    background-color: #000;
}

.btn-outline-dark i:hover {
    color: #fff;
    font-size: 1.5rem;
}


.ajout {
    margin-left: 3rem;
}

.redaction-commentaires {
    background-color: #fff;
    border-radius: 5px;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 60rem;
    height: auto;
}

.commentaire-unique {
    height: 10rem;
    width: 60rem;
    border: 1px solid lightgrey; 
    border-radius: 5px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.commentaire-unique p {
    font-size: 1.4rem;
}

.btn-commentaire i {
    font-size: 1.7rem;
}

.btn-commentaire:hover,
.btn-commentaire i:hover {
    color: #fff;
}

</style>