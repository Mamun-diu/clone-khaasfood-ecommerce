<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/storage/admin/1624718625_60d73d2163545.jpeg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/storage/admin/1624718641_60d73d31bbbaf.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/storage/admin/1624718659_60d73d435510e.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/storage/admin/1624718666_60d73d4a9402f.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span  aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .carousel a span i{
        font-size: 30px;
        background: #000;
        padding: 7px 14px;
        border-radius: 50%;
    }
</style>
