<template>
    <div class="container">
        <div class="row container">
            <div class="col-md-6">
                <div class="large-image d-flex " >

                    <div >
                        <img class="w-100" src="/assets/image/gift-card.png" alt="">
                    </div>


                </div>
                <div class="small-image d-flex" >
                    <img class="w-25"   src="/assets/image/gift-card.png" alt="">
                    <img class="w-25"   src="/assets/image/gift-card.png" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="ml-3">
                    <h1 class="mt-5">GIFT CARD </h1>
                    <h3><span style="margin-right : 7px; font-size : 40px;">&#2547;</span>300 </h3>
                    <div class="quantity d-inline-block">
                        <span @click="quantityDecrease" class="low">-</span>
                        <input v-model="quantity" @keydown="quantityChange"  type="number" name="" id="" min="1" max="10">
                        <span @click="quantityIncrease" class="high">+</span>
                    </div>
                    <button disabled  class="btn btn-primary text-danger mt-n1 ml-2">ADD TO CART</button>
                    <br><hr>

                    <p><span style="font-weight : bold; color: #666;">SKU:</span> N/A </p>
                    <p><span style="font-weight : bold; color: #666;">Category:</span> Gift </p>
                    <p ><span style="font-weight : bold; color: #666;">Tag:</span> <span class="text-danger">SOLD OUT</span> </p>
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
        <br><br>
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

        scrollTop(){
            document.documentElement.scrollTop=0;

        }

    },
    computed:{

    },
    mounted() {

        this.scrollTop();
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
