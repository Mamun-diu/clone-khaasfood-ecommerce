<template>
    <div class="container">
        <div class="row container">
            <div class="col-md-8">
                <table class="table table-borderless mt-5">
                    <tr class="border-b">
                        <th style="width: 50%">Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub total</th>
                    </tr>
                    <tr class="border-b" v-for="(data,index) in product" :key="index">
                        <td class="d-flex align-items-center"><img width="70" :src="'/'+data.product.images[0].image" alt=""> {{ data.product.title }} </td>
                        <td style="line-height : 70px">{{ data.product.price }}tk</td>
                        <td style="line-height : 70px">{{ data.quantity }} </td>
                        <td style="line-height : 70px">{{ data.quantity*data.product.price }} </td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4">
                <div style="border : 3px solid #ddd;padding : 15px;margin-top : 15px">
                    <h3>Cart totals</h3>
                    <div class="d-flex justify-content-between border-b py-3 m-0">
                        <h6>SUBTOTAL</h6>
                        <span>{{ subTotal }}tk </span>
                    </div>
                    <div class="d-flex justify-content-between border-b py-3 m-0">
                        <h6>SHIPPING</h6>
                        <span>50tk</span>
                    </div>
                    <div class="d-flex justify-content-between py-3 m-0">
                        <h6>TOTAL</h6>
                        <b>{{ subTotal+50 }} tk</b>
                    </div>
                    <button class="btn btn-success text-light w-100">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            product: [],
            subTotal: null,

        }
    },
    methods:{
        getData(){
            this.product = this.$store.getters.getCartItem
            let product = this.$store.getters.getCartItem;
            let subTotal = 0;
            product.forEach(p => {
                subTotal += p.quantity*p.product.price;
            });
            this.subTotal = subTotal;
            return this.$store.getters.getCartItem
        }
    },
    computed: {

    },
    mounted() {
        this.getData();
    },
}
</script>

<style>

</style>
