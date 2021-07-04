<template>
    <div>
        <product-head menu="Contact Us" link="/home/" link1="Home" link2="CONTACT US" />
        <div class="mx-2 mx-lg-5 mb-5">
            <div class="row">
                <div class="col-md-5">
                    <h5>Getting in contact with Khaas Food Ltd. is super easy! Follow any one of the steps to reach us.</h5>
                    <hr>
                    <h6>Facebook Messanger</h6>
                    <p>Send us a message at fb.me/khaasfood and we will come in contact with you shortly.</p>
                    <hr>
                    <h6>Phone Call</h6>
                    <p>Call us at 8801708183873-4 and you will get us easily!</p>
                    <br>
                    <h6>Email us</h6>
                    <p>You can send an email to us to any of the following addresses –</p>
                    <p>customercare@khaasfood.com</p>
                    <p>khaasfood@gmail.com</p>
                    <hr>
                    <h6>Khaas Food Official FB Group</h6>
                    <p>You can join our community and be a part of Khaas Food Family –</p>
                    <p>www.facebook.com/groups/khaasfood</p>
                    <hr>
                </div>
                <div class="col-md-7">
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
