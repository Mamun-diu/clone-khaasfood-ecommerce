<template>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

        setAll(){
            this.$store.dispatch('getAll');
        },

    },
    computed: {

    },
    mounted() {
        this.setAll();
    },
}
</script>


<style>

</style>
