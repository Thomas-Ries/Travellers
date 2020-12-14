<template>

<div class="block-article" v-if="reveleProfilModif">
<div class="overlay" @click="toggleProfilModif"></div>


    <div class="article card">
        <div class="btn-article btn btn-danger" @click="toggleProfilModif"> x </div>
        <h2 class="mb-4 text-center mb-5">Mettez à jour votre profil Travellers</h2>
        <img src="../../../public/img_brutes/photo-profil.jpg" alt="">


        <form>

            <form>
                <div class="form-group font-weight-bold">
                <label class="mt-4" for="pseudonyme"> Pseudonyme </label>
                <input v-model="name" type="pseudonyme" class="form-control " id="pseudonyme" aria-describedby="pseudonymeHelp" placeholder="Ex: John">
                </div>
            </form>     

        <form>
            <div class="form-group">
            <label class="mt-5" for="photoProfil">Téléchargez une photo de profil </label>
            <input type="file" class="form-control-file" id="photoProfil">
            </div>
        </form>

        <div class="form-group mt-5">
            <label for="descriptionProfil">Ajoutez une description</label>
            <textarea v-model="description" class="form-control" id="descriptionProfil" rows="5"></textarea>
        </div>

        <button @click.prevent="changeUser({name, description}, closeModal())" type="submit" class="btn btn-dark mt-3">Sauvegarder mes changements </button>

        </form>

    </div>


<!--BLOCK-article-->    
</div>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "ModifProfil",

    props: {
        reveleProfilModif: Boolean,
        toggleProfilModif: Boolean,
    },

    methods: {
        ...mapActions(["changeUser"]),

        closeModal() {
            this.$emit('close-modal')
        }
        // changeModal: function () {
        //     console.log("DEBUG");
        //     console.log(this.reveleProfilModif)
        //     this.reveleProfilModif == false;
        // }
        // ...mapMutations(["setnewPseudo", "setDescription"]),
    },

    // computed: {
    //     newPseudo: {
    //         get() {
    //             return this.$store.state.profil.newPseudo
    //         },
    //         set(newPseudo) {
    //             this.$store.commit('setNewPseudo', newPseudo)
    //         }
    //     },

    //     description: {
    //         get() {
    //             return this.$store.state.profil.description
    //         },
    //         set(description) {
    //             this.$store.commit('setDescription', description)
    //         }
    //     }
    // },

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
    top: 18%;
    height: auto;
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

img {
    position: absolute;
    top: 13rem;
    right: 10rem;
    width: 13rem;
    height: 13rem;
    border-radius: 60px;
}

.form-control {
    width: 22rem;
}

label {
    font-size: 1.4rem;
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

