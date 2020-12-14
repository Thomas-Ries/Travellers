<template>

<div class="block-follow" v-if="reveleFollow">
<div class="overlay" @click="toggleFollow"></div>


    <div class="follow card">
        <div class="btn-follow btn btn-danger" @click="toggleFollow"> x </div>
        <h2 class="mb-4 text-center mb-5">Mes Travellers favoris</h2>

        <div class="follow-container">
        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil2.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil3.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil4.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil3.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil4.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>

        <div class="photo-follow mt-5">
            <div class="img-follow">
                <h3 class="mb-3">Pseudonyme</h3>
                <img src="../../../public/img_brutes/photo-profil2.jpg" alt="">
            </div>
                <button type="submit" class="btn-dark ml-4 mt-4 mb-5" title="Visualiser"><i class="far fa-eye"></i></button>
                <button type="submit" class="btn-dark mt-3 ml-1 mb-5" title="Supprimer des coups de coeur"><i class="fas fa-ban"></i></button>
        </div>


<!--follow container-->    
    </div>

<!--follow Card-->    
</div>

<!--Block Follow-->    
</div>
  
</template>

<script>
export default {
    name: "Follow",
    props: ['reveleFollow', 'toggleFollow']
}
</script>



<style scoped>

.block-follow {
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

.follow {
    border-radius: 5px;
    color: #333;
    padding: 5rem;
    position: fixed;
    top: 18%;
    height: auto;
    width: 70rem;
}

.follow h2 {
    font-size: 3rem;
    font-weight: 400;
}

.follow-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}

.img-follow {
    display: flex;
    flex-direction: column;
    width: 13rem;
}

.btn-follow {
    position: absolute;
    top: 1rem;
    right: -1rem;
    color: #fff;
    background-color: red;
    height: auto;
}

.follow-favoris {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

img {
    height: 10rem;
    width: 10rem;
    border-radius: 50px;
}

.far,
.fas {
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

