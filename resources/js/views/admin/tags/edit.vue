<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Tags</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Tag'}">Tags</router-link></li>
                    <li class="breadcrumb-item active">Edit</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                    <div class="card-header bg-info text-light ">
                        <h3 class="float-left">Edit Tag</h3>
                        <router-link :to="{name: 'Tag'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateTag">
                            <div class="form-group">
                                <label for="tag">Tag name</label>
                                <input v-model="name" type="text" class="form-control" id="tag" placeholder="Enter tag name">
                                <p v-if="nameError"> <span class="text-danger" v-text="nameError"></span> </p>
                            </div>
                            <button class="btn btn-primary w-100" type="submit">Update</button>
                        </form>
                    </div>
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
            name: null,
            nameError: null,
        }
    },
    methods:{
        getData(){
            var id = this.$route.params.id
            axios.get(`/api/tag/${id}/edit/`)
            .then(res => {
                this.name = res.data.name;
            })
        },
        updateTag(){
            let id = this.$route.params.id;
            axios.put(`/api/tag/${id}`,{name:this.name})
            .then(res =>{
                if(res.data.status == 'failed'){
                    this.nameError = res.data.message.name[0];
                }else{
                    this.nameError = null;
                    this.name = null
                    this.$router.push({name: 'Tag'})
                    toastr.success('Tag inserted succssfully.')

                }
            })
        }
    },
    computed: {

    },
    mounted() {
        this.getData();
    },
}
</script>

<style>

</style>


