<template>
    <div class="p-2 p-xl-5">
        <h3 class="text-center">PRODUCT CATEGORIES</h3>

        <div class="main-menu row justify-content-center">
            <div v-for="(data,index) in main" :key="index" class="col-6 col-sm-4 col-md-3 col-lg-2">
                <a href="">
                    <img width="130" :src="'/'+data.main.image" alt="">
                    <h4>{{data.main.name}}</h4>
                    <p>{{ data.count }} products</p>
                </a>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            main:[],
        }
    },
    computed: {
        getMain(){
            this.main = this.$store.getters.mainWithCount;

        },
    },
    mounted() {
        this.getMain;

    },
}
</script>

<style scoped>
    .main-menu h4{
        margin-left : 20px;
        color : #111;
    }
    .main-menu p{
        margin-left : 20px;
        color : #aaa;
    }
    .main-menu a img{
        transition : 0.3s ease;
    }
    .main-menu a:hover img{
        transform: scale(1.1);
    }
</style>
