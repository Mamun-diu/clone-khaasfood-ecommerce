<template>
    <div class="head mt-n3 px-lg-2 px-xl-5">
        <div class="row large-screen">
            <div class="col-3">
                <div class="w-95">
                    <img src="/assets/image/khaasfood.png" alt="logo">
                    <div @mouseenter="mainLoad" class="main-menu d-flex">
                        <i class="fas fa-bars"></i>
                        <h6>BROWSE CATEGORIES</h6>
                        <i class="fas fa-angle-down"></i>
                        <div class="menu-items">
                            <ul v-if="menu" @mouseleave="mainHover = !mainHover" class="list-group list-group-flush menu-item">
                                <!-- <li class="list-group-item d-flex align-items-center"><router-link class="active" to="/">HOME</router-link><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><a href="">PRODUCT</a><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><a href="">STORE</a><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><a href="">CONTACT US</a><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><router-link to="/home/track-order">TRACK ORDER</router-link><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><a href="">GIFT CARD</a><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <li class="list-group-item d-flex align-items-center"><a @click.prevent="rightSides" href="">LOGIN / REGISTER</a><i class="fas fa-angle-right mr-3 text-muted"></i></li> -->
                                <li @mouseenter="hoverMain(data.id)"   v-for="(data,index) in getMain" :key="index" class="list-group-item d-flex align-items-center"><a href="#"> {{ data.name }} </a><i class="fas fa-angle-right mr-3 text-muted"></i></li>
                                <div v-if="mainHover" class="sub-menu-wrapper ">
                                    <div class="row">
                                        <div v-for="(data,index) in subProduct" :key="index" class="sub-menu col-5">
                                            <h4>{{ data.sub }}</h4>
                                            <a v-for="(product,index) in data.product" :key="index" :href="product.id">{{ product.title }} </a>
                                        </div>
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <ul class="nav mt-4">
                    <li><router-link class="" to="/home">HOME</router-link></li>
                    <li><router-link to="/home/product">PRODUCTS</router-link></li>
                    <li><router-link to="/home/store">STORES</router-link></li>
                    <li><router-link to="/home/contact-us">CONTACT US</router-link></li>
                    <li><router-link to="/home/track-order">TRACK ORDER</router-link></li>
                    <li><a href="#">GIFT CARD</a></li>
                </ul>
                <form action="">
                    <input class="searchBox" type="text" placeholder="Search for products">
                    <i class="fas fa-search"></i>
                </form>
            </div>
            <div class="col-3">
                <ul class="social mt-4">
                    <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i> </a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-youtube"></i> </a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i> </a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a></li>
                </ul>
                <div class="cart">
                    <ul class="login">
                        <li><a @click.prevent="rightSides" href="#">LOGIN / REGISTER</a></li>
                    </ul>
                    <i class="fas fa-shopping-cart"><span>0</span></i>
                    <span class="takaIcon">&#2547;</span>
                    <span class="taka">2045</span>
                </div>
            </div>
        </div>
        <div class="small-screen">
            <div class="d-flex justify-content-between">
                <div>
                    <i @click="leftSides" class="fas fa-bars"></i>
                </div>
                <div class="d-flex">
                    <i class="fas fa-search "></i>
                    <i class="fas fa-shopping-cart"><span>0</span></i>
                </div>
            </div>
        </div>
        <div v-if="leftSide" class="leftSide">
            <aside>
                <div class="left-nav">
                    <form action="">
                        <input class="searchBox" type="text" placeholder="Search for products">
                        <i class="fas fa-search"></i>
                    </form>

                    <ul class="list-group list-group-horizontal">
                        <li @click="menu=true" class="list-group-item w-50 text-center menu" :class="menu?'actives':''">MENU</li>
                        <li @click="menu=false" class="list-group-item w-50 text-center categories" :class="!menu?'actives':''">CATEGORIES</li>
                    </ul>
                    <ul v-if="menu" class="list-group list-group-flush menu-item">
                        <li class="list-group-item"><router-link class="active" to="/">HOME</router-link></li>
                        <li class="list-group-item"><a href="">PRODUCT</a></li>
                        <li class="list-group-item"><a href="">STORE</a></li>
                        <li class="list-group-item"><a href="">CONTACT US</a></li>
                        <li class="list-group-item"><router-link to="/home/track-order">TRACK ORDER</router-link></li>
                        <li class="list-group-item"><a href="">GIFT CARD</a></li>
                        <li class="list-group-item"><a @click.prevent="rightSides" href="">LOGIN / REGISTER</a></li>
                    </ul>
                    <ul v-if="!menu" class="list-group list-group-flush " id="category-item">

                        <div v-for="i in 5" :key="i">
                            <li  class="list-group-item d-flex justify-content-between main-menus"><span><a href="">HOME</a></span><a :id='`name${i}`' @click.prevent="test($event)"><i class="fas fa-angle-down"></i></a></li>
                            <ul  class="list-group list-group-flush sub-menus">
                                <li class="list-group-item"> <a href="">first-{{ i }}</a> </li>
                                <li class="list-group-item"> <a href="">second-{{ i }}</a> </li>
                            </ul>
                        </div>


                    </ul>
                </div>
                <div  @click="leftSideClose" class="close-area">

                </div>
            </aside>
        </div>
        <div v-if="rightSide" class="rightSide">
            <aside>
                <div class="right-nav">
                    <div class="d-flex justify-content-between px-3 pt-4 pb-3" style="border-bottom: 1px solid #ddd">
                        <h5>SIGN IN</h5>
                        <a @click.prevent="rightClose" class="text-dark " href="">CLOSE <i class="fas fa-times"></i></a>
                    </div>

                    <div class="warn">
                        <p> <i class="fas fa-info-circle"></i>
                            Note : If you have registered before October 29, 2020, please
                            <a href="">Create a new account</a>
                        </p>
                    </div>
                    <form action="" class="p-3">
                        <div class="form-group">
                            <label for="">Email*</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Password*</label>
                            <input type="password" class="form-control">
                        </div>
                        <button class="btn btn-info text-center w-100">LOGIN</button>

                        <p class="my-3 text-center">----------OR LOGIN WITH---------</p>
                        <button class="btn btn-primary text-center w-100 mb-2">FACEBOOK</button>
                        <button class="btn btn-success text-center w-100 mt-2 mb-3">GOOGLE</button>
                    </form>
                    <div class="register text-center mt-1 pt-3" style="border-top: 1px solid #ddd">
                        <i class="far fa-user fa-4x"></i>
                        <p>No account yet?</p>
                        <a class="mb-5 pb-5" href="">CREATE AN ACCOUNT</a>
                    </div>
                </div>
                <div @click="rightClose" class="close-area">

                </div>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            leftSide: false,
            rightSide: false,
            menu: true,
            catArrow: false,
            catStyleA:{
                background : "#83B735",
            },
            catStyleI:{
                transform:"rotate(0 deg)",
                color : "#fff",
            },
            i:0,
            getMain: [],
            mainHover: false,
            subProduct: [],
            hoverMainId:null,
        }
    },
    methods:{
        leftSides(){
            this.leftSide = !this.leftSide;
            document.querySelector('body').style.overflow = "hidden";

        },
        rightSides(){
            this.rightSide = !this.rightSide;
            document.querySelector('body').style.overflow = "hidden";

        },
        rightClose(){
            this.rightSide = !this.rightSide;
            document.querySelector('body').style.overflow = "auto";
        },
        leftSideClose(){
            this.leftSide = !this.leftSide;
            document.querySelector('body').style.overflow = "auto";
        },
        test(event){
            let targetid = event.currentTarget.id
            let parent = document.getElementById(targetid)
            if(parent.classList.contains('catActive')){
                parent.classList.remove('catActive')
                parent.closest('li').nextElementSibling.style.display = "none "
                parent.closest('li').style.background = "#fff"
                parent.closest('li').style.color = "#333"
            }else{
                parent.classList.add('catActive')
                parent.closest('li').nextElementSibling.style.display = "block "
                parent.closest('li').style.background = "#F5F5F5"
                parent.closest('li').style.color = "#83B735"
            }
            if(parent.querySelector('i').classList.contains('catSpanActive')){
                parent.querySelector('i').classList.remove('catSpanActive')
            }else{
                parent.querySelector('i').classList.add('catSpanActive')
            }


        },

        setAll(){
            this.$store.dispatch('getAll');
        },

        hoverMain(mainId){
            this.mainHover = true;
            // console.log(mainId);
            this.hoverMainId = mainId;
            this.getSubProduct;

        },
        mainLoad(){
            this.getMains;
        },

    },
    computed: {
        // getProduct(){
        //     return this.$store.state.allProduct;
        // }
        getMains(){
            this.getMain = this.$store.getters.mainCategory

        },
        getSubProduct(){
            this.subProduct = this.$store.getters.subProduct(this.hoverMainId);

        }

    },
    mounted() {
        this.setAll();
        // this.getProduct();
        this.getMains;
    },
}
</script>

<style scoped>
    .head{
    }
    .main-menu{
        background : #83B735;
        height : 50px;
        padding: 0 14px;
        margin-bottom: -1px;
        position : relative;
        transition : all 0.3s ease;

    }
    .main-menu h6{
        font-family: tahoma;
        font-size: 14px;
        line-height: 50px;
        color : #fff;
    }
    .fas.fa-bars{
        font-size : 22px;
        line-height: 50px;
        margin-right: 8px;
        color : #fff;
    }
    .main-menu .fa-angle-down{
        font-size : 20px;
        color : #fff;
        position : absolute;
        top : 16px;
        right : 16px;
        transition : all 0.3s ease;
    }
    .main-menu .menu-items{
        z-index: 4;
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        display : none;
        transition : all 0.3s ease;
    }
    .main-menu:hover .menu-items{
        display : block;
    }
    .main-menu:hover .fa-angle-down{
        transform: rotate(-180deg);
    }
    .main-menu li{
        /* position : relative; */
    }
    .main-menu li:hover .sub-menu-wrapper{
        display: block;
    }


    .sub-menu-wrapper{
        width: 750px !important;
        z-index: 5 !important;
        padding: 25px 0;
        position: absolute !important;
        background: white;
        margin-left: 100%;
        display: block;
        border-left: 1px solid #ddd;
        min-height: 420px;
    }
    .sub-menu{
        margin-left : 40px;
    }
    .sub-menu h4{
        margin-bottom : 20px;
    }
    .sub-menu a{
        display: block!important;
        padding: 0 !important;
        margin: 10px 0;
        color : #333;
        transition : 0.1s ease;
    }
    .sub-menu a:hover{
        color : #83B735;
    }




    .w-95{
        width : 95% !important;
    }
    img{
        height : 65px;
        margin : 5px 0;
    }
    ul.nav{
        list-style: none;
    }
    ul.nav li{
        float : left;
        margin-right: 16px;
    }
    ul.nav li a{
        text-decoration: none;
        color : #000;
        transition: 0.2s ease;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 200;
        font-size : 14px;

    }
    ul.nav li a.active{
        color : #83B735;
    }
    ul.nav li a:hover{
        color : #83B735
    }
    .searchBox{
        width : 100%;
        border-radius: 25px;
        border: 3px solid #83B735;
        margin-top : 28px;
        color : rgb(148, 137, 137);
    }
    .searchBox:focus{
        box-shadow: none ;
    }
    .searchBox::placeholder{
        color : #83B735;
        font-size: 17px;
    }
    form{
        position : relative;
    }
    .fa-search{
        position: absolute;
        color : #888;
        font-size : 23px;
        right : 15px;
        bottom : 10px;
        transition : 0.2s ease;
        cursor: pointer;
    }
    .fa-search:hover{
        color : #555;
    }
    ul.social{
        list-style: none;
    }
    ul.social li{
        float: right;
        margin-right: 10px;

    }
    ul.social li a{


    }
    ul.social li a i{
        display :inline-block;
        padding : 10px;
        transition: 0.2s ease;


    }
    .fa-facebook-f{
        color : #fff;
        background : #3e5a96;
        width: 32px;
        text-align: center;
    }
    .fa-facebook-f:hover{
        background : #2F487F;
    }
    .fa-instagram{
        color : #fff;
        background : #92563e;
    }
    .fa-instagram:hover{
        background : #673B29;
    }
    .fa-youtube{
        color : #fff;
        background : #d32f35;
        padding : 10px 8px !important;
    }
    .fa-youtube:hover{
        background : #AF1C22;
    }
    .fa-linkedin-in{
        color : #fff;
        background : #3096cc;
    }
    .fa-linkedin-in:hover{
        background : #02649A;
    }
    .social{

    }
    .cart{

        margin-top: 85px;
        display: flex;
        justify-content: flex-end;
    }
    ul.login{

    }
    ul.login li a{
        margin: 0 15px;
        color: #2a2222;
        font-family: 'Font Awesome 5 Free';
        transition: 0.2s ease;
    }
    ul.login li a:hover{
        color: #796e6e;
    }
    .cart i{
        font-size : 25px;
        margin-right: 10px;
        position : relative;
    }
    .cart i span{
        position: absolute;
        top: -12px;
        right: -8px;
        background: #83B735;
        color: #fff;
        font-size: 13px;
        padding: 4px;
        border-radius: 50%;
        font-family: tahoma;
    }
    .cart span.takaIcon{
        margin-top: 0px;
        font-size: 16px;
        font-weight: 800;
        margin-left : 5px;

    }
    .cart span.taka{
        margin-right: 10px;
        margin-top: 0px;
        font-size: 16px;
    }

    .small-screen{
        height : 60px;
    }
    .small-screen .fas.fa-bars{
        color : #888;
        margin-top : 10px;
        margin-left : 10px;
        cursor: pointer;
    }
    .small-screen .fas.fa-bars:hover{
        color : #444;
    }
    .small-screen .fas.fa-search{
        margin-right : 60px;
        font-size : 20px;
        top : 28px;
        cursor: pointer;
    }
    .small-screen .fas.fa-shopping-cart{
        margin-top: 27px;
        margin-right: 20px;
        font-size: 23px;
        position : relative;
        cursor: pointer;
    }
    .fas.fa-shopping-cart span{
        position: absolute;
        top: -10px;
        right: -5px;
        background: #83B735;
        color: #fff;
        font-size: 10px;
        padding: 3px;
        border-radius: 50%;
        font-family: tahoma;
    }

    .leftSide{
        position : fixed;
        left : 0;
        top : 0;
        width : 100vw;
        height : 100vh;
        z-index : 2;
    }
    .left-nav{
        float : left;
        width : 300px;
        height : 100vh;
        overflow: auto;
        background : #fff;
        border-right: 1px solid #000;
        overflow-x: hidden;
    }
    .left-nav input{
        margin: 5px 10px;
        width: 93%;
        border: 2px solid #6ca911;
    }
    .left-nav i{
        top: 18px;
        right: 25px;
    }
    .left-nav .menu{
        cursor: pointer;
    }
    .left-nav .categories{
        cursor: pointer;
        border-right: none;

    }
    .left-nav .actives{
        background: #E9E9E9;
        font-weight: 500;
        border-bottom: 2px solid #6ca911;
    }
    .close-area{
        float : left;
        width: calc(100% - 300px);
        background : rgba(0,0,0,0.5);
        height : 100vh;
        border-right  :2px soild rgb(0, 0, 0);
    }
    #category-item  li.main-menus{
        padding : 0;
    }
    #category-item span{
        width : 85%;
    }
    #category-item span a{
        display: block;
        padding : 11px 0 11px 20px;
        color : #111;
    }
    #category-item a{
        position : relative;
        display : inline-block;
        border-left : 1px solid #ddd;
        padding-right : 5px;
        padding-left : 40px;
    }
    #category-item a:hover{
        background : #ddd;
    }
    #category-item i.fas.fa-angle-down{
        position: absolute;
        color: #999;
        top: 14px;
        right: 17px;
        transform: rotate(-90deg);
        transition : 0.3s ease-in-out;
    }
    .catActive{
        background  : #6ca911;

    }
    .catSpanActive{
        color :#fff !important;
        transform : rotate(0deg) !important;
    }
    ul.sub-menus{
        display : none;
    }
    ul.sub-menus li{
        padding: 0;
    }
    ul.sub-menus li a{
        display: block;
        padding : 10px 11px;
        width : 100%;
        color : #222;
    }
    ul.sub-menus li a:hover{
        background : #f5f5f5;
    }
    .menu-item li{
        padding : 0;
    }
    .menu-item li a{
        padding : 10px 20px;
        display : block;
        width : 100%;
        color : #111;
        transition : 0.3s ease;
    }
    .menu-item li a:hover{
        background : #F5F5F5;
    }

    .rightSide{
        position : fixed;
        z-index: 3;
        left  : 0;
        top : 0;
        width : 100vw;
        height : 100vh;
    }
    .rightSide .right-nav{
        float : right;
        width  :300px;
        height : 100vh;
        background : #fff;
        overflow-y: auto;
    }
    .rightSide .close-area{
        float : right;
        width  : calc(100% - 300px);
        height : 100vh;
        background : rgba(0,0,0,0.5)
    }

    .warn{
        margin : 15px;
        padding  : 10px;
        background : #F39C12;
        border-radius: 5px;
        border : 1px solid #c57f0f;
    }
    .warn p{
        color : #f5f5f5;
        font-size: 14px;
        text-align: center;
    }
    .warn p a{
        color : #fff;
        text-decoration : underline;

    }



    @media (min-width: 1200px) {
        ul.login li a{
            font-size : 14px;
        }
        ul.nav li{
            margin-right : 12px;
        }
    }
    @media (max-width : 1199px){
        ul.nav li{
            margin-right : 11px;
        }
        ul.nav li a{
            font-size : 12px;
        }
        .main-menu h6{
            font-size : 13px;
            margin-right : 35px;
        }
        ul.login li a{
            font-size: 12px;

        }
    }
    @media (min-width: 1025px){
        .small-screen{
            display : none;
        }
    }
    @media (max-width : 1024px){
        .large-screen{
            display : none;
        }
    }
    @media (max-width : 991px){

    }
    @media (max-width: 767px){

    }
    @media(max-width : 575px){

    }
</style>
