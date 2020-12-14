<template>

    <div class="commentaire">
        <h3 class="article-auteur font-weight-normal mt-5"> Commentaires </h3>
        <div class="redaction-commentaires">
            <div v-for="commentaire in $store.state.ajoutCommentaire"  v-bind:key="commentaire.id"  class="ml-3 mt-3">
                <div v-if="commentaire.content">
                    <div v-if="commentaire.post_id == article">
                        <CommentaireUnique v-bind:commentaire="commentaire" />
                    </div>
                </div>
            </div>
        </div>


            <div @click="toggleCommentaire">
                <button type="button" class="btn-commentaire btn btn-outline-dark mb-5 ml-4"> Ajouter un commentaire <i class="far fa-comment-dots ml-2"></i></button>
            </div>
            <Commentaire v-bind:reveleCommentaire="reveleCommentaire" v-bind:toggleCommentaire="toggleCommentaire"
            v-bind:article="article" />
                
    </div>
  
</template>

<script>
import Commentaire from "@/components/Commentaires/Commentaire"
import CommentaireUnique from "@/components/Commentaires/CommentaireUnique"



export default {
    name: "affichageCommentaires",

    props: {
        addCommentaires: Function,
        article: Object,
    },

    components: {
        Commentaire,
        CommentaireUnique
    },

    data() {
    return {
      reveleCommentaire: false
    }
  },

    methods: {
    toggleCommentaire: function() {
        this.reveleCommentaire = !this.reveleCommentaire
    },

    }

}
</script>

<style scoped>


.redaction-commentaires {
    background-color: #fff;
    border-radius: 5px;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 60rem;
    height: auto;
}

.article-auteur {
    margin-left: 2rem;
    text-decoration: underline;
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

.btn-commentaire {
    color: #000;
}

.btn-commentaire:hover,
.btn-commentaire i:hover {
    color: #fff;
}

</style>