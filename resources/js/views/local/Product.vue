<template>
    <div>
        <div class="top mb-5 text-center text-light">
            <div class="opacity">
                <div class="data">
                    <h2 class="my-3  p-0">Products</h2>
                </div>
                <ul class="d-flex justify-content-center flex-wrap">
                    <li v-for="(data,index) in category" :key="index">
                        <a href="">
                            <h6>{{ data.main[0].name }} </h6>
                            <p>{{ data.main[0].count }} product</p>
                        </a>
                        <ul>
                            <li v-for="(sub,index) in data.sub" :key="index">
                                <a href="">
                                    <h6>{{ sub.name }} </h6>
                                    <p>{{ sub.count }} product</p>
                                </a>

                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
        <div class="d-flex flex-wrap px-2 px-lg-5">
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
            category:[],
            product:[],
        }
    },
    methods:{
        title(val){
            return val.slice(0,25);
        },
        addToCart(id){
            this.$store.getters.cartItem(id);
        }
    },
    computed: {
        getCategory(){
            let obj = [];
            let main = [];
            let mainCount = 0;
            let sub = [];
            let subCount = 0;
            let product = this.$store.state.all.product;
            for (const data of product) {
                if(!main.includes(data.main_category_id)){
                    main.push(data.main_category_id);
                }

            }
            main.forEach(function(m){
                let mainCategory = [];
                let subCategory = [];
                let tempMain = "";
                let tempSub = "";
                product.forEach(function(p){
                    if(m==p.main_category_id){
                        mainCount++;
                        tempMain = p.main.name;
                        if(!sub.includes(p.sub_category_id)){
                            sub.push(p.sub_category_id);
                        }
                    }
                })
                sub.forEach(function(s){
                     product.forEach(function(p){
                         if(s==p.sub_category_id){
                             subCount++;
                             tempSub = p.sub.name;
                         }
                     })
                     subCategory.push({name:tempSub,count:subCount})
                     subCount = 0;
                     tempSub = "";
                });
                sub = []
                mainCategory.push({name:tempMain,count:mainCount});
                mainCount = 0;
                obj.push({main:mainCategory,sub:subCategory});

            })
            this.category = obj;

        },
        getProduct(){
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
            this.product = product;

        }
    },
    mounted() {
        this.getCategory;
        this.getProduct;

    },
}
</script>

<style scoped>
    .top{
        background: url('~/assets/image/unsplash.jpg');
        position : relative;
        height : 140px;
    }
    .top .opacity{
        position : absolute;
        left : 0;
        top : 0;
        right : 0;
        bottom : 0;
        background : rgba(0,0,0,0.8);
        z-index: 1;

    }
    .top .data{
        /* position : absolute;
        left : 50%;
        top : 20%;
        transform: translate(-50%,-50%);
        z-index: 2; */
    }
    .top ul{

    }
    .top ul li{
        margin-right: 35px;
        position: relative;
    }
    .top ul li a{
        padding-bottom: 27px;
        display: inline-block;
    }
    .top ul a h6{
        color : #fff;
        margin-bottom: 4px;
    }
    .top ul a p{
        margin : 0;
        color : #ddd;
        font-size: 13px;
    }

    .top ul ul{
        background : #111;
        padding : 20px 0px;
        display: none;
        position : absolute;
        left: -25px;
        width: 210px;
    }
    .top ul ul li{
        margin-right: 0;
    }
    .top ul ul li a{
        display: block;
        /* margin-left : -65px; */
        text-align: center;
    }
    .top ul li:hover ul{
        display: block;
    }

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

</style>
