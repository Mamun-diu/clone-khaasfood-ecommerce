<template>
    <div class="">
        <h3 class="text-center mt-5 mb-5">LATEST BLOG</h3>
        <div class="row mx-2 mx-lg-5">
            <div v-for="(data,index) in blog" :key="index" class="col-12 col-md-6 col-lg-4">
                <router-link :to="'/home/blog/'+data.id">
                <div  class="blog m-2" :style="{ backgroundImage: 'url(' + data.image + ')' }">
                    <div class="blog-info">
                        <p>{{ formateDate(data.created_at) }} </p>
                        <h5>{{ data.title }} </h5>
                    </div>
                </div>
                </router-link>
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
    data(){
        return{
            blog : [],
        }
    },
    methods:{
        formateDate(timestamp){
            function formatDate(date) {
                return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + " " +  ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2) + ' ' + (date.getHours() < 12 ? 'AM' : 'PM');
            }


            var date = new Date(timestamp);
            return formatDate(date);
        }
    },
    computed: {
        getBlog(){
            this.blog = this.$store.state.all.blog;
        }
    },
    mounted() {
        this.getBlog
    },
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
