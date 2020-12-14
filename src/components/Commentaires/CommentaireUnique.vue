<template>
  
    <div class="commentaire-unique">
        <p> {{ commentaire.content }} </p>
    </div>
    <button type="button" class="btn btn-outline-info"> <i class="fas fa-trash-alt"></i> </button>


</template>


<script>
export default {
    name: "commentaireUnique",

    props: {
        commentaire: Object,
        content: Object,
    }
}
</script>


<style scoped>
body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.commentaire-unique p {
    font-size: 1.4rem;
    margin-left: 1rem;
    margin-top: 2rem;
    padding-top: 1rem;
}

.btn-outline-info {
  width: 5rem;
  height:3rem;
  color: #000;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.btn-outline-info:hover {
  background: #012C50;
  color: #fff !important;
}

.fas {
    font-size: 2rem;
}

</style>