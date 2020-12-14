<template>

<div class="block-article" v-if="reveleProfil">
<div class="overlay" @click="toggleProfil"></div>

    <div class="article card">
        <div class="btn-article btn btn-danger" @click="toggleProfil"> x </div>
        <h1 class="text-center mb-5"> {{ $store.state.profil.name }} </h1>
        <img src="../../../public/img_brutes/photo-profil.jpg" alt="">


        <form>
            <div class="form-group font-weight-bold">
                <h3 class="font-weight-light mt-5"> Ma description</h3>
            <div class="description-profil">
                <p class="font-weight-light mt-4"> {{ $store.state.profil.description }} </p>
            </div>
                <button @click="toggleProfilModif" type="button" class="btn btn-dark mt-5"> Modifier mon profil </button>


            </div>
        </form>
    </div>

    <ModifProfil v-bind:reveleProfilModif="reveleProfilModif" v-bind:toggleProfilModif="toggleProfilModif" v-on:close-modal="toggleProfilModif" />

<!--BLOCK-article-->    
</div>

  
</template>

<script>
import ModifProfil from '@/components/EspacePersonnel/ModifProfil';


export default {
    name: "Profil",
    props: ['reveleProfil', 'toggleProfil'],

    data() {
        return {
        reveleProfilModif: false,
    }
    },

    components: {
      ModifProfil,
    },

    methods: {
        toggleProfilModif: function() {
            console.log("DEBUG");
        this.reveleProfilModif = !this.reveleProfilModif
      },
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
    top: 3rem;
    left: 4rem;
    width: 8rem;
    height: 8rem;
    border-radius: 60px;
}

h1 {
    font-weight: 400;
}

p {
    width: 50rem;
    text-align: justify;
    line-height: 1.8rem;
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

