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
                    <li class="breadcrumb-item active">Create</li>
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
                        <h3 class="float-left">Create Tag</h3>
                        <router-link :to="{name: 'Tag'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createTag">
                            <div class="form-group">
                                <label for="tag">Tag name</label>
                                <input v-model="tag.name" type="text" class="form-control" id="tag" placeholder="Enter tag name">
                                <p v-if="nameError"> <span class="text-danger" v-text="nameError"></span> </p>
                            </div>
                            <button class="btn btn-primary w-100" type="submit">Save</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <!-- <div v-if="toastr" :class="toastr.type=='success'?'alert alert-success':'alert alert-danger' " v-text="toastr.message" class="toastr">

        </div> -->
    </div>

</template>

<script>
// import toastr from 'toastr'
export default {
    data(){
        return{
            tag:{
                name: ''
            },
            nameError: null,
            // toastr: null
        }
    },
    methods: {
        createTag(){
            axios.post('/api/tag',this.tag)
            .then(res =>{
                if(res.data.status == 'failed'){
                    this.nameError = res.data.message.name[0];
                }else{
                    this.nameError = null;
                    this.tag.name = null
                    toastr.success('Tag inserted succssfully.')
                }
            })
        }
    },
    computed: {

    },
}
</script>

<style>

</style>

