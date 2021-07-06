<template>
    <div class="container">
        <div class="row container">
            <div class="col-md-6">
                <div class="large-image d-flex " >
                    <span class="bg-success text-light px-2 py-3 text-center" v-if="getProduct.tag.name=='NEW'">NEW</span>
                    <span class="bg-danger text-light p-3  text-center" v-if="getProduct.tag.name=='SOLD OUT'" style="font-size : 9px">SOLD<br>OUT</span>
                    <!-- <span>{{ getProduct.tag.name }} </span> -->
                    <div v-for="(data,index) of getProduct.images" :key="index">
                        <img class="w-100" v-if="index==0"  :src="'/'+data.image" alt="">
                    </div>


                </div>
                <div class="small-image d-flex" >
                    <img v-for="(product,index) in getProduct.images" :key="index" class="w-25"   :src="'/'+product.image" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="ml-3">
                    <h1 class="mt-5">{{ getProduct.title }} </h1>
                    <h3><span style="margin-right : 7px; font-size : 40px;">&#2547;</span>{{ getProduct.price }} </h3>
                    <p><span style="font-weight : bold; color: #666;">Quantity:</span> {{ getProduct.quantity }} </p>
                    <div class="quantity d-inline-block">
                        <span @click="quantityDecrease" class="low">-</span>
                        <input v-model="quantity" @keydown="quantityChange"  type="number" name="" id="" min="1" max="10">
                        <span @click="quantityIncrease" class="high">+</span>
                    </div>
                    <button :disabled="getProduct.tag.name=='SOLD OUT'" :class="getProduct.tag.name=='SOLD OUT'?'text-danger':''" @click="addToCart(getProduct.id,quantity)" class="btn btn-primary mt-n1 ml-2">ADD TO CART</button>
                    <br><hr>

                    <p><span style="font-weight : bold; color: #666;">SKU:</span> {{ getProduct.slug }} </p>
                    <p><span style="font-weight : bold; color: #666;">Category:</span> {{ getProduct.main.name }}, {{ getProduct.sub.name }} </p>
                    <p v-if="getProduct.tag.name != 'UNKNOWN'"><span style="font-weight : bold; color: #666;">Tag:</span> {{ getProduct.tag.name }} </p>
                    <p><span style="font-weight : bold; color: #666;">Share:</span>
                        <i class="ml-2 fab fa-facebook-f"></i>
                        <i class="ml-2 fab fa-twitter"></i>
                        <i class="ml-2 fas fa-envelope"></i>
                        <i class="ml-2 fab fa-linkedin-in"></i>
                        <i class="ml-2 fab fa-whatsapp"></i>
                    </p>

                </div>

            </div>
        </div>
        <br><br><hr>
        <div class="row">
            <div class="col">
                <h1 class="text-center my-3">Description</h1>
                <div v-html="getProduct.description"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quantity: 1,
        }
    },
    methods:{
        quantityIncrease(){
            if(this.quantity < 10){
                this.quantity += 1;
            }
        },
        quantityDecrease(){
            if(this.quantity > 1){
                this.quantity -= 1;
            }

        },
        quantityChange(){
            setTimeout(() => {
                if(this.quantity > 10){
                this.quantity = 10;
                }
                if(this.quantity < 1){
                    this.quantity = 1;
                }
            }, 10);

        },
        addToCart(id,quantity){
            this.$store.getters.cartItem(id,quantity);
        }

    },
    computed:{
        getProduct(){
            let slug = this.$route.params.slug
            let product = this.$store.state.all.product;
            for (const p of product) {
                if(slug==p.slug){
                    return p;
                }
            }
        }
    },
    mounted() {
        this.getProduct;
    },
}
</script>

<style>
    .large-image{
        position : relative;
    }
    .large-image span{
        position : absolute;
        top : 40px;
        right : 40px;
        border-radius: 50%;

    }
    .quantity{
        user-select: none;
    }
    .quantity input[type=number]{
        width: 40px;
        border-left: 0;
        border-right: 0;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        padding-top: 7px;
        padding-bottom: 7px;
        text-align: center;
    }
    .quantity input[type=number]:focus{
        box-shadow: none;
        outline : none;

    }
    .quantity .low{
        display: inline-block;
        margin-top: -10px;
        padding: 7px 7px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: 2px solid #ddd;
        cursor: pointer;
        transition : 0.2s;
    }
    .quantity .high{
        display: inline-block;
        margin-top: -10px;
        padding: 7px 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border: 2px solid #ddd;
        cursor: pointer;
        transition : 0.2s;
    }
    .quantity .low:hover{
        background : #6CA300;
        color : #fff;
    }
    .quantity .high:hover{
        background : #6CA300;
        color : #fff;
    }







/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
