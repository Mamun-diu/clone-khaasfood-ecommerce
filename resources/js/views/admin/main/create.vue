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
                                <input v-model="form.name" type="text" class="form-control" id="mainCategory" placeholder="Enter main-category name">
                                <div class="text-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Category image</label>
                                <input  @change="imageUpload" class="form-control-file" type="file" id="formFile">
                                <div class="text-danger" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>
                            <button class="btn btn-primary w-50" type="submit">Save</button>
                            <button class="btn btn-danger w-50" type="reset">Reset</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Form from 'vform'
export default {
    data(){
        return{
            form: new Form({
                name: '',
                image: ''
            })
        }
    },
    methods:{
        async createMain(){
            const response = await this.form.post('/api/main')
            if(response){
                // console.log(response);
                toastr.success('Category inserted succssfully.')
                this.form.name = null;
                this.form.image = null;
            }
        },
        imageUpload(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.form.image = file
        },

    },
    computed: {

    },
}
</script>

<style>

</style>

