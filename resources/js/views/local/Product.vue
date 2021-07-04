<template>
    <div>
        <div class="top mb-5 text-center text-light">
            <div class="opacity">
                <div class="data">
                    <h2 class="my-3  p-0">Products</h2>
                </div>
                <ul class="d-flex justify-content-center flex-wrap">
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                        <ul>
                            <li>
                                <a href="">
                                    <h6>GROCERY</h6>
                                    <p>32 product</p>
                                </a>
                                <a href="">
                                    <h6>GROCERY</h6>
                                    <p>32 product</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                        <ul>
                            <li>
                                <a href="">
                                    <h6>GROCERY</h6>
                                    <p>32 product</p>
                                </a>
                                <a href="">
                                    <h6>GROCERY</h6>
                                    <p>32 product</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h6>GROCERY</h6>
                            <p>32 product</p>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="d-flex flex-wrap px-2 px-lg-5">
            <div class="new-carousel">
                <a href="">
                    <img src="/storage/admin/1624721868_60d749cc4d14e.png" class="" alt="...">
                    <p>Mixed Flower (মিশ্র ফুলের মধু) Honey</p>
                    <span>290</span>
                </a>
                <button>ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span class="tag">NEW</span>
            </div>
            <div class="new-carousel mt-3">
                <a href="">
                    <img src="/storage/admin/1624756359_60d7d08751da0.jpg" class="" alt="...">
                    <p>Mixed Flower (মিশ্র ফুলের মধু) Honey</p>
                    <span>290</span>
                </a>
                <button>ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span class="tag">NEW</span>
            </div>
            <div class="new-carousel mt-3">
                <a href="">
                    <img src="/storage/admin/1624756660_60d7d1b47be33.jpg" class="" alt="...">
                    <p>Mixed Flower (মিশ্র ফুলের মধু) Honey</p>
                    <span>290</span>
                </a>
                <button>ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span class="tag">NEW</span>
            </div>
            <div class="new-carousel mt-3">
                <a href="">
                    <img src="/storage/admin/1624756738_60d7d202759ca.jpg" class="" alt="...">
                    <p>Mixed Flower (মিশ্র ফুলের মধু) Honey</p>
                    <span>290</span>
                </a>
                <button>ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span class="tag">NEW</span>
            </div>
            <div class="new-carousel mt-3">
                <a href="">
                    <img src="/storage/admin/1624756738_60d7d202759ca.jpg" class="" alt="...">
                    <p>Mixed Flower (মিশ্র ফুলের মধু) Honey</p>
                    <span>290</span>
                </a>
                <button>ADD TO CART</button>
                <i class="fas fa-search" data-toggle="tooltip" data-placement="left" title="Quick view"></i>
                <span class="tag">NEW</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .top{
        background: url('~/assets/image/unsplash.jpg');
        position : relative;
        height : 140px;
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
        /* position : absolute;
        left : 50%;
        top : 20%;
        transform: translate(-50%,-50%);
        z-index: 2; */
    }
    .top ul{

    }
    .top ul li{
        margin-right: 35px;
        position: relative;
    }
    .top ul li a{
        padding-bottom: 27px;
        display: inline-block;
    }
    .top ul a h6{
        color : #fff;
        margin-bottom: 4px;
    }
    .top ul a p{
        margin : 0;
        color : #ddd;
        font-size: 13px;
    }

    .top ul ul{
        background : #111;
        padding : 20px 0px;
        display: none;
        position : absolute;
        left: -25px;
        width: 210px;
    }
    .top ul ul li a{
        display: block;
        margin-left : -65px;
    }
    .top ul li:hover ul{
        display: block;
    }

    .new-carousel{
        position : relative;
        overflow: hidden;
        margin : 0 2.5%;
        width : 20%;
        text-align: center;
    }
    .new-carousel i{
        position: absolute;
        top: 2px;
        right: -50px;
        background: #fff;
        color: #111;
        font-size: 20px;
        padding: 15px;
        box-shadow: 0px 0px 6px 0px #ddd;
        transition: 0.3s ease;
        cursor: pointer;
    }
    .new-carousel img{
        width : 100%;
    }
    .new-carousel p{
        color : #222;
        font-family: tahoma;
        text-align: center;
        margin : 5px 0;
    }
    .new-carousel span{
        color: #212020;
        background: #C8E8E4;
        display: inline-block;
        padding: 2px 12px;
        border-radius: 20px;
        font-weight: 500;
        font-size: 14px;
    }
    .new-carousel a{
        display: inline-block;
    }
    .new-carousel button{
        background: #6CA300;
        color: #f5f5f5;
        display: inline-block;
        margin: 10px auto;
        border-radius: 20px;
        padding: 5px 13px;
    }
    .new-carousel:hover i{
        right : 0px;
    }
    .new-carousel .tag{
        position: absolute;
        left: 5px;
        top: 5px;
        color: #fff;
        background: #438E44;
        border-radius: 50%;
        padding: 14px 8px;
        font-size: 14px;

    }

</style>
