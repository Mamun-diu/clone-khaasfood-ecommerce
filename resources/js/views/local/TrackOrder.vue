<template>
    <div>
        <product-head menu="Track Order" link="/home/" link1="Home" link2="TRACK ORDER" />
        <div class="container">
            <div class="row">
                <div class="col-10 col-md-8 offset-1 offset-md-2">
                    <p class="text-center mt-5 text-muted mb-5">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    <div>
                        <form @submit.prevent="orders">
                            <div class="row">
                                <div class="col-5">
                                    <p>Order ID</p>
                                    <input v-model="order" type="number" placeholder="Found in your order confirmation">
                                    <span v-if="orderError" class="text-danger">Order id is require</span>
                                </div>
                                <div class="col-5">
                                    <p>Billing email</p>
                                    <input v-model="email" type="email" placeholder="Email you used during checkout">
                                    <span v-if="emailError" class="text-danger">Billing email is require</span>
                                </div>
                                <div class="col-2">
                                    <input type="submit" value="TRACK">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import productHead from './template/ProductHead'
export default {
    components:{
        productHead,
    },
    data(){
        return{
            emailError: false,
            orderError:false,
            email:"",
            order:"",
        }
    },
    methods:{
        orders(){
            if(this.order==""){
                this.orderError = true;
            }else{
                this.orderError = false;
            }
            if(this.email==""){
                this.emailError = true;
            }else{
                this.emailError = false;
            }

            if(this.order != "" && this.email != ""){
                toastr.error("Sorry, the order could not be found. Please contact us if you are having difficulty finding your order details.")
                this.email = "";
                this.order = "";
            }

        }
    }
}
</script>

<style scoped>

    form{
        margin-bottom: 70px;
    }
    form p{
        margin : 0;
        margin-bottom: 4px;

    }
    form input{
        width: 100%;
        border: 2px solid #ddd;
        outline: none;
        border-radius: 30px;
        padding: 8px 16px;
    }
    form input[type="submit"]{
        color : #fff;
        background : #7eb60d;
        border : none;
        margin-top: 27px;
    }
    form input[type="submit"]:hover{
        background : #588206;
    }
    form input:focus{
        box-shadow: none;
        border: 2px solid #ccc;
    }
</style>
