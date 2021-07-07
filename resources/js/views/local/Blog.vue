<template>
    <div>
        <div class=" px-2 px-lg-5 my-5">
            <div  class="new-carousel mb-4">
                <h2 class="text-center">{{ blog.title }} </h2>
                <p class="text-center">Date: {{ formateDate(blog.created_at) }} </p>
                <img :src="'/'+blog.image" alt="">
                <div class="my-5" v-html="blog.description"> </div>
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
        scrollTop(){
            document.documentElement.scrollTop=0;

        },
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
            let id = this.$route.params.id
            let blog = this.$store.state.all.blog
            blog.forEach(p => {
                if(id==p.id){
                    this.blog = p
                }
            });
        }
    },
    mounted() {
        this.scrollTop();
        this.getBlog;
    },
}
</script>

<style scoped>

</style>
