<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Hero section</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Hero'}">Hero</router-link></li>
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
                        <h3 class="float-left">Create Hero</h3>
                        <router-link :to="{name: 'Hero'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createHero">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Status</label>
                                </div>
                                <select v-model="form.status" class="custom-select" id="inputGroupSelect01">
                                    <option value="publish">Publish</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="hero">Hero image</label>
                                <input @change="imageUpload" type="file"  id="image" class="form-control-file">
                                <div class="text-danger" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
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
import Form from 'vform'
export default {
    data(){
        return{
            form: new Form({
                status: 'publish',
                image: ''
            })
        }
    },
    methods:{
        async createHero(){
            const response = await this.form.post('/api/hero')
            if(response){
                // console.log(response);
                toastr.success('Hero inserted succssfully.')
                this.form.status = null;
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

