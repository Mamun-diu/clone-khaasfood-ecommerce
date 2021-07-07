<template>
    <div class="top-section">
        <div class="">
            <ul class="flex justify-end px-lg-2 px-xl-5">
                <li class="mr-4"><router-link to="/home/gift">GIFT CARD</router-link></li>
                <li class="mr-4"><router-link to="/home/how-to-order">HOW TO ORDER</router-link></li>
                <li class="mr-4"><router-link to="/home/faqs">FAQS</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .top-section{

    }
    ul{
        background: #83B735;
        padding-top : 2px;
        padding-bottom : 5px;
        list-style: none;

    }
    ul li{

    }
    ul li a{
        color : #fff;
        text-decoration: none;
        font-size: 13px;
        font-family: Tahoma;
        letter-spacing: .5px;
    }
    ul li a:hover{
        color : #eee;
    }

    @media (max-width : 1024px){
        .top-section{
            display : none;
        }
    }
</style>
