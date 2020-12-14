<template>

<div class="block-article" v-if="reveleArticle">
<div class="overlay" @click="toggleArticle"></div>



    <div class="article card">
        <div class="btn-article btn btn-danger" @click="toggleArticle"> x </div>
            <h2 class="mb-4 text-center">Rédigez et publiez votre article</h2>

        <form>
            <div class="form-group font-weight-bold">
                <label class="mt-4" for="titreArticle">Titre de votre article</label>
                <input v-model="title" type="titreArticle" class="form-control " id="titreArticle" aria-describedby="titreHelp" placeholder="Pensez à un titre concis et accrocheur">


        <!-- <label class="mt-5" for="nomAuteur">Votre prénom ou pseudo</label>
        <br>
        <label class="font-weight-light"> {{ $store.state.profil.newPseudo }} </label> -->
       

        <!-- 
        <form>
            <div class="form-group">
            <label class="mt-5" for="photoArticle">Téléchargez la photo de votre article</label>
            <input type="file" class="form-control-file" id="photoArticle">
            </div>
        </form> -->

            <label class="mt-4" for="selectionPays">Sélectionnez le pays sur lequel vous souhaitez écrire</label>
            <select class="custom-select" v-model="country">
                <option selected>Sélectionnez le pays</option>
                <option v-for="country in $store.state.countries" :key="country.id" :value="country.id"> {{country.name}}
                </option>
            </select>

        <div class="form-group mt-5">
            <label for="textArticle">Rédigez votre article</label>
            <textarea v-model="content" class="form-control" id="textArticle" rows="10"> </textarea>
        </div>


        <button @click.prevent="addArticle({title, content, country}), closeModal()" type="submit" class="btn-dark mt-3">Publier votre Article </button>
        </div>
        </form>
    </div>


<!--BLOCK-article-->    
</div>
  
</template>

<script>
import { mapActions, mapGetters} from 'vuex'



export default {
    name: "RedactionArticle",
    props: ['reveleArticle', 'toggleArticle'],

    data() {
        return {
            articleContent: []
        }
    },

    methods: {
        ...mapActions(["addArticle"]),
        ...mapGetters(["allCountries"]),
          closeModal() {
            this.$emit('close-modal')
        }
    },

    mounted() {
        this.allCountries();
    }

}

</script>



<style scoped>

.block-article {
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
.article {
    border-radius: 5px;
    color: #333;
    padding: 5rem;
    position: fixed;
    top: 15%;
    height: auto;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
}

.btn-article {
    position: absolute;
    top: 1rem;
    right: -1rem;
    color: #fff;
    background-color: red;
    height: auto;
}

.form-group {
    width: 50rem;
}

.form-control {
    width: 39rem;
}

label {
    font-size: 1.5rem;
}

.custom-select {
    font-size: 1.4rem;
    height: auto;
    width: 39rem;
}

textarea {
    width: 50rem !important;
    font-size: 1.4rem;
}


.btn-dark {
    color: #fff;
    background-color: #477fb1;
    border-radius: 5px;
    font-size: 1.4rem;
    border: .5px solid #fff;
}

.btn-dark:hover {
    color: #fff;
    background-color: #477fb1;
    border: 1px solid #000;
}


</style>>

