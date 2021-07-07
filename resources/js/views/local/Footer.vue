<template>
    <div class=" ">
        <div class="px-3 px-xl-5 footer">
            <div class="row py-5 ">
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <img src="/assets/image/khaasfood-white-logo.png" alt="">
                    <p class="my-3">Khaas Food is an e-commerce platform coupled with a chain of brick-and-mortar stores for safe and pure foods in Bangladesh.</p>
                    <ul class="social mb-3">
                        <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a></li>
                        <li><a href="#" target="_blank"><i class="fab fa-instagram"></i> </a></li>
                        <li><a href="#" target="_blank"><i class="fab fa-youtube"></i> </a></li>
                        <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i> </a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <h6 class="text-light mb-3">CONTACT US</h6>
                    <p class="head"><i class="fas fa-location-arrow"></i> Head Office:<br><span>Asadullah House, 5/1, Block- E, Lalmatia, Dhaka</span> </p>


                    <p class="head">Chittagong Office: <br><span>House: 58, Road : 2 (GA), Block- C, Sugandha City Corp. R/A, Chattogram</span></p>


                    <p class="head"><i class="fas fa-mobile"></i> Phone: <br><span>8801708183873-4</span></p>


                    <p class="head"><i class="fas fa-envelope"></i> Email: <br><span>customercare@khaasfood.com <br>
                    khaasfood@gmail.com</span></p>

                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5 links">
                    <h6 class="text-light mb-3">USEFUL LINKS</h6>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Terms & Conditions</a></p>
                    <p><a href="">FAQs</a></p>
                    <p><a href="">About Us</a></p>
                    <p><a href="">Contact Us</a></p>
                    <p><a href="">Track Order</a></p>
                    <p><a href="">Our Blog</a></p>

                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5 newsletter">
                    <h6 class="text-light mb-3">NEWSLETTER</h6>
                    <p>Enter your email below and get informed of our offers, campaigns, new products time to time!</p>
                    <form action="">
                        <input type="text" placeholder="Enter your email">
                        <button>SUBSCRIBE</button>
                    </form>

                </div>
            </div>
        </div>
        <div class="px-3 px-xl-5 footer-bottom">
            <div class="row  ">
                <div class="col-md-6">
                    <p class="text-light">KHAASFOOD &copy;2020</p>
                </div>
                <div class="col-md-6">
                    <img src="/assets/image/pay.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        background : #003A1A;
        color : #ddd;
        border-bottom : 1px solid #1A4E31;
    }
    .footer p{
        font-size : 14px;
    }
    .footer-bottom{
        background : #003A1A;
        padding-top : 15px;
    }
    ul.social{

    }
    ul.social li{
        float: left;
        margin-right : 20px;
    }
    ul.social li a i{
        font-size : 20px;
        color :#fff;
    }

    p.head{
        font-size : 16px;
        font-weight: bold;
    }
    p.head i{
        color : #7D6F0D;
    }
    p.head span{
        font-size : 15px;
        font-weight: normal;
    }
    .links p a{
        color : #ddd;
    }
    .links p a:hover{
        color : #fff;
    }
    .newsletter input{
        width : 100%;
        border-radius: 20px;
        background  : #003A1A;
        border : 2px solid #406B53;
        box-shadow: 0 0 1px 1px rgb(75, 71, 71);
        outline : none;


    }
    .newsletter input::placeholder{
        color  : #97b8a6;
    }
    .newsletter input:focus{
        transition : 0.4s ease;
        box-shadow: 0 0 1px 1px rgb(202, 190, 190);
    }
    .newsletter button{
        outline : none;
        border : none;
        background : #eee;
        color : #111;
        margin-top : 8px;
        padding : 8px 12px;
        font-family: tahoma;
        transition : 0.2s;
    }
    .newsletter button:hover{
        background : #ddd;
    }
</style>
