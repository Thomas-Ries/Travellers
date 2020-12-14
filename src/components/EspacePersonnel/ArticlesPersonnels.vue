<template>

<div class="block-article" v-if="reveleMesArticles">
<div class="overlay" @click="toggleMesArticles"></div>


    <div class="article card">
        <div class="btn-article btn btn-danger" @click="toggleMesArticles"> x </div>
        <h2 class="mb-4 text-center">Mes articles publiés</h2>

        <div class="article-favoris mt-5">
            <div class="img-article-favoris">
                <img src="../../../public/img_resized/allemagne.jpg" alt="">
                <router-link to="/Pays"><button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button></router-link>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>

            <div class="img-article-favoris">
                <img src="../../../public/img_resized/ecosse.jpg" alt="">
                <button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>

            <div class="img-article-favoris">
                <img src="../../../public/img_resized/usa.jpg" alt="">
                <button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>

            <div class="img-article-favoris">
                <img src="../../../public/img_resized/bresil.jpg" alt="">
                <button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>

            <div class="img-article-favoris">
                <img src="../../../public/img_resized/japon.jpg" alt="">
                <button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>

            <div class="img-article-favoris">
                <img src="../../../public/img_resized/nouvelle-zelande.jpg" alt="">
                <button type="submit" class="btn-dark mt-3 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Modifier"><i class="far fa-edit"></i></button>
                <button type="submit" class="btn-dark mt-3 mb-5 ml-2" title="Supprimer"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
    </div>

</div>
  
</template>

<script>
export default {
    name: "ArticlesPersonnels",
    props: ['reveleMesArticles', 'toggleMesArticles']
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
    width: 80rem;
}

.article h2 {
    font-size: 3rem;
    font-weight: 400;
}

.btn-article {
    position: absolute;
    top: 1rem;
    right: -1rem;
    color: #fff;
    background-color: red;
    height: auto;
}

.article-favoris {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.img-article-favoris img {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 20rem;
    border-radius: 5px;
}

.far {
    font-size: 1.5rem;
}

.btn-dark {
    color: #fff;
    background-color: #477fb1;
    border-radius: 5px;
    font-size: 1.4rem;
    border: .5px solid #fff;
    height: 3rem;
    width: 3rem;
}

.btn-dark:hover {
    color: #fff;
    background-color: #477fb1;
    border: 1px solid #000;
}


</style>>

