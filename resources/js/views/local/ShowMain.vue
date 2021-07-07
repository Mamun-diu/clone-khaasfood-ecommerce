<template>
    <div>
        <div class="d-flex flex-wrap px-2 px-lg-5 my-5">
            <div v-for="(data,index) in product" :key="index" class="new-carousel mb-4">
                <router-link :to="'/home/product/'+data.slug" >
                    <img :src="'/'+data.images[0].image" class="" alt="...">
                    <p>{{ title(data.title) }} </p>
                    <span>{{ data.price }} </span>
                </router-link>
                <button :disabled="data.tag.name=='SOLD OUT'" :class="data.tag.name=='SOLD OUT'?'text-danger':''" @click="addToCart(data.id)">ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span v-if="data.tag.name == 'NEW'" class="tag">NEW</span>
                <span v-if="data.tag.name == 'SOLD OUT'" class="tag px-3 bg-danger" style="font-size : 8px">SOLD<br>OUT</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            product : [],
        }
    },
    methods:{
        scrollTop(){
            document.documentElement.scrollTop=0;

        },
        title(val){
            return val.slice(0,25);
        },
        addToCart(id){
            this.$store.getters.cartItem(id);
        }
    },
    computed: {
        getProduct(){
            this.product = this.$store.getters.getMainProduct(this.$route.params.id)
        }
    },
    updated() {
        this.getProduct;
    },
    mounted() {
        this.scrollTop();
        this.getProduct;
    },
}
</script>

<style scoped>
    .new-carousel{
        position : relative;
        overflow: hidden;
        margin : 0 2.5%;
        width : 20%;
        text-align: center;
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
    .new-carousel img{
        width : 100%;
    }
    .new-carousel p{
        color : #222;
        font-family: tahoma;
        text-align: center;
        margin : 5px 0;
    }
    .new-carousel span{
        color: #212020;
        background: #C8E8E4;
        display: inline-block;
        padding: 2px 12px;
        border-radius: 20px;
        font-weight: 500;
        font-size: 14px;
    }
    .new-carousel a{
        display: inline-block;
    }
    .new-carousel button{
        background: #6CA300;
        color: #f5f5f5;
        display: inline-block;
        margin: 10px auto;
        border-radius: 20px;
        padding: 5px 13px;
        transition : 0.2s;
    }
    .new-carousel button:hover{
        background: #476903;
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
        .new-carousel .tag{
            padding: 10px 7px;
            font-size: 10px;

        }
        .new-carousel .span2{
            padding: 9px;
            font-size: 8px !important;
        }
        .new-carousel p, .new-carousel span {
            font-size: 13px;
        }
        .new-carousel button{
            font-size: 10px;
        }
    }
    @media(max-width : 575px){
        .new-carousel .tag{
            padding: 8px 5px;
            font-size: 7px;

        }
        .new-carousel .span2{
            padding: 7px;
            font-size: 5px !important;
        }
        .new-carousel p, .new-carousel span {
            font-size: 10px;
        }
        .new-carousel button{
            font-size: 8px;
        }
    }
</style>
