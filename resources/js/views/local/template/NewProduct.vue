<template>
    <div style="overflow:hidden">


  <div class="container" >
      <h3 class="text-center mt-3 mb-5">NEW PRODUCTS</h3>
        <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(data,index) in newProduct" :key="index" class="carousel-item" :class="index==0?'active':''">
                    <div class="d-flex">
                        <div v-for="(product,index) in data" :key="index" class="new-carousel">
                            <router-link :to="'/home/product/'+product.slug" >
                                <img :src="'/'+product.images[0].image" class="" alt="...">
                                <p>{{ title(product.title) }} </p>
                                <span> {{ product.price }} </span>
                            </router-link>
                            <button @click="addToCart(product.id)">ADD TO CART</button>
                            <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                            <span class="tag">NEW</span>

                        </div>
                    </div>
                </div>


            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                <span  aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      <h3 class="text-center mt-3 mb-5">POPULAR PRODUCTS</h3>
        <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(data,index) in popularProduct" :key="index" class="carousel-item" :class="index==0?'active':''">
                    <div class="d-flex">
                        <div v-for="(product,index) in data" :key="index" class="new-carousel">
                            <router-link :to="'/home/product/'+product.slug" >
                                <img :src="'/'+product.images[0].image" class="" alt="...">
                                <p>{{ title(product.title) }} </p>
                                <span> {{ product.price }} </span>
                            </router-link>
                            <button @click="addToCart(product.id)">ADD TO CART</button>
                            <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                        </div>
                    </div>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                <span  aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>


    </div>
</template>

<script>

export default {
    data(){
        return{
            newProduct:[],
            popularProduct:[],
        }
    },
    methods:{
        title(val){
            return val.slice(0,25);
        },
        addToCart(id){
            this.$store.getters.cartItem(id);
        },


    },
    computed: {
        getNew(){
            let product = this.$store.getters.newProduct;
            let obj = [];
            let i = 0;
            for (const data of product) {
                obj.push(data)
                i++;
                if(i%4==0){
                    this.newProduct.push(obj);
                    obj = [];
                }
            }

        },
        getPopular(){
            function shuffle(array) {
                var currentIndex = array.length,  randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }

                return array;
            }
            let product = this.$store.state.all.product;
            shuffle(product);
            let obj = [];
            let i = 0;
            for (const data of product) {
                obj.push(data)
                i++;
                if(i%4==0){
                    this.popularProduct.push(obj);
                    obj = [];
                }
            }
        }
    },
    mounted() {
        this.getNew;
        this.getPopular;


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
    .carousel a span i.fa-angle-left{
        /* margin-right: 130px; */
        margin-bottom: 70px;
    }
    .carousel-control-prev  {

    width: 0;
    }
    .carousel-control-next{
        width : 100px;
    }

    .carousel a span i.fa-angle-right{
        margin-left: 130px;
        margin-bottom: 70px;
    }
    .carousel-item .new-carousel{
        margin : 0 2.5%;
        width : 20%;
        text-align: center;
    }
    .carousel-item img{
        width : 100%;
    }
    .carousel-item p{
        color : #222;
        font-family: tahoma;
        text-align: center;
        margin : 5px 0;

    }
    .carousel-item span{
        color: #212020;
        background: #C8E8E4;
        display: inline-block;
        padding: 2px 12px;
        border-radius: 20px;
        font-weight: 500;
        font-size: 14px;
    }
    .carousel-item a{
        display: inline-block;
    }
    .carousel-item button{
        background: #6CA300;
        color: #f5f5f5;
        display: inline-block;
        margin: 10px auto;
        border-radius: 20px;
        padding: 5px 13px;
    }
    .new-carousel{
        position : relative;
        overflow: hidden;
    }
    .new-carousel i{
        position: absolute;
        top: 2px;
        right: -50px;
        background: #fff;
        color: #111;
        font-size: 20px;
        padding: 15px;
        box-shadow: 0px 0px 6px 0px #ddd;
        transition: 0.3s ease;
        cursor: pointer;
    }
    .new-carousel:hover i{
        right : 0px;
    }
    .new-carousel .tag{
        position: absolute;
        left: 5px;
        top: 5px;
        color: #fff;
        background: #438E44;
        border-radius: 50%;
        padding: 14px 8px;
        font-size: 14px;

    }

    @media (max-width: 767px){
        .carousel-item button{
            font-size: 12px;
        }
        .carousel-item p,span{
            font-size: 12px;
        }
        .carousel-control-prev{
            display : none;
        }
        .carousel-control-next{
            display : none;
        }
    }
    @media (max-width: 576px){
        .carousel-item button{
            font-size: 10px;
        }
        .carousel-item p,span{
            font-size: 11px;
        }

    }
</style>
