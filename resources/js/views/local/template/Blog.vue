<template>
    <div class="">
        <h3 class="text-center mt-5 mb-5">LATEST BLOG</h3>
        <div class="row mx-2 mx-lg-5">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blog m-2" style="background: url('/storage/admin/1624718834_60d73df2ebd02.jpeg');">
                    <div class="blog-info">
                        <p>February 18, 2020</p>
                        <h5>কমলা জেলির উপকারিতা</h5>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blog m-2" style="background: url('/storage/admin/1624719098_60d73efab0b0b.jpeg');">
                    <div class="blog-info">
                        <p>April 23, 2020</p>
                        <h5>চালের গুঁড়ায় শীতকালীন নানা রকম পিঠা</h5>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blog m-2" style="background: url('/storage/admin/1624719163_60d73f3b601a8.jpeg');">
                    <div class="blog-info">
                        <p>June 02, 2020</p>
                        <h5>খেজুরের যত কথা</h5>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-center mt-5 mb-5">OUR PROMISES</h3>
        <div class="row mx-2 mx-lg-5">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blogs m-2">
                    <div class="promise " style="background: url('/assets/image/Screenshot_1.png');">

                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blogs m-2">
                    <div class="promise " style="background: url('/assets/image/Screenshot_2.png');">

                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="blogs m-2">
                    <div class="promise " style="background: url('/assets/image/Screenshot_3.png');">

                    </div>
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
    .blog{
        height: 300px;
        background-position: center center !important;
        background-size: cover !important;
        position : relative;
        overflow: hidden;
    }
    .blogs{
        height : 250px !important;
        overflow: hidden;


    }
    .promise{
        height : 100%;
        background-size: cover !important;
        background-attachment: fixed;
        transition : 0.3s ease;
    }
    .blogs:hover .promise{
        transform : scale(1.2);
    }
    .blog-info{
        position : absolute;
        left : -200px;
        top : 30%;
        background : rgba(0, 0, 0, 0.8);
        padding : 10px;
        color : #fff;
        width : 200px;
        transition : 0.3s ease;
    }
    .blog:hover .blog-info{
        left : 0;
    }
    .blog-info h5{
        line-height: 28px;
    }
</style>
