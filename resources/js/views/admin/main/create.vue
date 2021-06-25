<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Main category</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Main'}">Main category</router-link></li>
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
                        <h3 class="float-left">Create main category</h3>
                        <router-link :to="{name: 'Main'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createMain">
                            <div class="form-group">
                                <label for="mainCategory">Category name</label>
                                <input v-model="main.name" type="text" class="form-control" id="mainCategory" placeholder="Enter main-category name">
                                <p v-if="nameError"> <span class="text-danger" v-text="nameError"></span> </p>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Category image</label>
                                <input @change="imageUpload" class="form-control-file" type="file" id="formFile">
                                <p v-if="fileError"> <span class="text-danger" v-text="fileError"></span> </p>
                            </div>
                            <button class="btn btn-primary w-100" type="submit">Save</button>
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
            main:{
                name: null,
                image: null,
            },
            nameError: null,
            fileError: null,
        }
    },
    methods:{
        createMain(){
            axios.post('/api/tag',this.tag)
            .then(res =>{
                if(res.data.status == 'failed'){
                    this.nameError = res.data.message.name[0];
                    this.fileError = res.data.message.file[0];
                }else{
                    this.nameError = null;
                    this.fileError = null;
                    this.tag.name = null
                    toastr.success('Tag inserted succssfully.')
                }
            })
        },
        imageUpload(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.main.image = file
        },

    },
    computed: {

    },
}
</script>

<style>

</style>

