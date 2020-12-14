<template>

<div class="block-modale" v-if="reveleCommentaire">
    <div class="overlay" @click="toggleCommentaire"></div>

    <div class="modale card">
        <div class="btn-modale btn btn-outline-dark font-weight-bold" @click="toggleCommentaire"> x </div>
        <h2 class="mb-4 mt-5">Veuillez rédiger votre commentaire</h2>

        <form>
            <div class="form-group font-weight-bold">
                <textarea v-model="commentaire" class="form-control mt-3" name="commentaire" id="commentaire" rows="5"> </textarea>
                <button @click.prevent="addCommentaire({commentaire, article})" type="submit" class="btn-dark mt-5">Soumettre mon commentaire </button>
            </div>
        </form>


    </div>

<!--BLOCK-MODALE-->    
</div>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Commentaire",

    props: {
        reveleCommentaire: Boolean,
        toggleCommentaire: Function,
        article: Object,
    },

    data() {
        return {
            content: []
        }
    },

    methods: {
        ...mapActions(["addCommentaire"]),
    },


}

</script>



<style scoped>

.block-modale {
    position: fixed;
    top: 0;
    bottom: 0;
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
    background: #f1f1f1;
    color: #333;
    padding: 5rem;
    position: fixed;
    top: 30%;
}

.btn-modale {
    position: absolute;
    top: 1rem;
    right: -1rem;
    color: #000;
    background-color: white;
    height: auto;
}

label {
    font-size: 1.4rem;
}

.btn-dark {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    font-size: 1.4rem;
    border: 1px solid #000;
}

.btn-dark:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
}

textarea {
    font-size: 1.4rem;
}


</style>>


          