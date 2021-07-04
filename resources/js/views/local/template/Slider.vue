<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(data,index) in hero" :key="index" class="carousel-item" :class="index==0 ?'active':''">
                    <img :src="'/'+data.image" class="d-block w-100" alt="...">
                </div>
                
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span  aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>



    </div>
</template>

<script>
export default {
    data(){
        return{
            hero:[],
        }
    },
    computed: {
        getHero(){
            this.hero = this.$store.state.all.hero;

        },
    },
    mounted() {
        this.getHero;

    },
}
</script>

<style scoped>
    .carousel a span i{
        font-size: 30px;
        background: #000;
        padding: 7px 14px;
        border-radius: 50%;
    }
</style>
