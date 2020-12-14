<template>

<div class="block-modale" v-if="revele">
    <div class="overlay" @click="toggleModale"></div>

    <div class="modale card">
        <div class="btn-modale btn btn-danger" @click="toggleModale"> x </div>
        <h2 class="mb-4 mt-5">Veuillez renseigner votre email</h2>

        <form>
            <div class="form-group font-weight-bold">
                <label for="email-oubli-mdp">Adresse email</label>
                <input type="email-oubli-mdp" class="form-control " id="email-oubli-mdo" aria-describedby="emailHelp" placeholder="nom@mail.com">
                <button type="submit" class="btn-dark mt-5">Demander un nouveau mot de passe </button>
            </div>
        </form>

    </div>


<!--BLOCK-MODALE-->    
</div>
  
</template>

<script>
export default {
    name: "Modale",
    props: ['revele', 'toggleModale']
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
    color: #fff;
    background-color: red;
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


</style>>

