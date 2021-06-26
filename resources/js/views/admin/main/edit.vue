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
                    <li class="breadcrumb-item active">Update</li>
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
                        <h3 class="float-left">Update main category</h3>
                        <router-link :to="{name: 'Main'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateMain">
                            <div class="form-group">
                                <label for="mainCategory">Category name</label>
                                <input v-model="form.name" type="text" class="form-control" id="mainCategory" placeholder="Enter main-category name">
                                <div class="text-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Category image</label>
                                <input  @change="imageUpload" class="form-control-file" type="file" id="formFile">
                                <div class="text-danger" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                                <img width="100" :src="'/'+oldImage" alt="old image">
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
import Form from 'vform'
export default {
    data(){
        return{
            form: new Form({
                name: '',
                image: '',
                _method: 'put',
            }),
            oldImage: null,
        }
    },
    methods:{
        getMain(){
            var id = this.$route.params.id;
            axios.get(`/api/main/${id}/edit`)
            .then(res => {
                this.form.name = res.data.name;
                this.oldImage = res.data.image;
            })
        },
        async updateMain(){
            var id = this.$route.params.id;
            const response = await this.form.post(`/api/main/${id}`)
            if(response){
                toastr.success('Category updated succssfully.')
                this.form.name = null;
                this.$router.push({name: 'Main'});
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
    mounted() {
        this.getMain();
    },
}
</script>

<style>

</style>

