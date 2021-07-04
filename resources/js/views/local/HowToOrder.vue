<template>
    <div>
        <product-head menu="How to Order" link="/home/" link1="Home" link2="HOW TO ORDER" />
        <div class="container">
            <div class="my-5 row">
                <div class="col-md-8 offset-md-2">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/assets/image/01.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/02.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/03.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/04.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/05.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/06.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/07.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/08.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/09.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/image/10.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <i class="fas fa-angle-left" aria-hidden="true"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <i class="fas fa-angle-right" aria-hidden="true"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productHead from './template/ProductHead.vue'
export default {
    components:{
        productHead,
    }
}
</script>

<style scoped>
    .fas.fa-angle-left{
        color : #000;
        font-size : 30px;
        display: none;
    }
    .fas.fa-angle-right{
        color : #000;
        font-size : 30px;
        display: none ;
    }
    .carousel:hover .fas.fa-angle-left{
        display: block;
    }
    .carousel:hover .fas.fa-angle-right{
        display: block;
    }
</style>
