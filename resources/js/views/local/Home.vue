<template>
    <div>
        <slider></slider>
        <menus></menus>
        <newProduct></newProduct>
        <blog></blog>
        <shop></shop>

    </div>
</template>

<script>
import slider from './template/Slider.vue'
import menus from './template/Menu.vue'
import newProduct from './template/NewProduct.vue'
import blog from './template/Blog.vue'
import shop from './template/ShopWithUs.vue'


export default {
    components:{
        slider,
        menus,
        newProduct,
        blog,
        shop,
    }

}
</script>

<style>

</style>
