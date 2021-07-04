<template>
    <div class="top mb-5 text-center text-light">
        <div class="opacity"></div>
        <div class="data">
            <h2 class="m-0 p-0">{{menu}}</h2>
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link :to="link"> {{ link1 }} </router-link></li>
                <li class="breadcrumb-item active" >{{ link2 }}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu: String,
        link: String,
        link1: String,
        link2: String,
    }
}
</script>

<style scoped>
    .top{
        background: url('~/assets/image/unsplash.jpg');
        position : relative;
        height : 130px;
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
        position : absolute;
        left : 50%;
        top : 50%;
        transform: translate(-50%,-40%);
        z-index: 2;
    }
    .breadcrumb {
        background : none;
        color : #fff;
    }
    .breadcrumb li{
        color : #fff;
    }
    .breadcrumb li a{
        color : #fff ;
    }
</style>
