<template>
    <div>
        <product-head menu="Store" link="/home/" link1="Home" link2="STORE" />
        <div class="mx-2 mx-lg-5 mb-5">
            <div class="row">
                <div class="col-md-4">
                    <h6>Mohammadpur Outlet</h6>
                    <p>Mohammadpur</p>
                    <p>Saraho Plaza, 8/KA, PC Culture Housing Society, Ring Road</p>
                    <p>Dhaka Bangladesh — Dhaka 1207</p>
                    <p><span class="text-bold">Phone:</span> 01730715051 </p>
                    <p>1 km</p>
                    <p>Directions</p>
                    <hr>

                    <h6>Dhanmondi Outlet</h6>
                    <p>Dhanmondi</p>
                    <p>56/8 West Panthapath, Kalabagan, Dhaka 1205 (Near Square Hospital)</p>
                    <p>Dhaka Bangladesh - Dhaka 1205</p>
                    <p><span class="text-bold">Phone:</span> 01730715067 </p>
                    <p>2.7 km</p>
                    <p>Directions</p>
                    <hr>




                </div>
                <div class="col-md-8">
                    <div class="map">
                        <iframe class="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.4736795994818!2d90.365992!3d23.754887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1c12f6f34b7e433!2sKhaas%20Food%20Head%20Office!5e0!3m2!1sen!2sbd!4v1625233914011!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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

<style>
    .map{
        border : 2px solid #ddd;
    }
    .map iframe{
        width : 100%;
    }
</style>
