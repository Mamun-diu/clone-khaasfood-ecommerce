<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Blog section</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Blog'}">Blog</router-link></li>
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
                        <h3 class="float-left">Update Blog</h3>
                        <router-link :to="{name: 'Blog'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateBlog">
                            <div class="form-group">
                                <label for="blog">Title</label>
                                <input v-model="form.title" type="text" class="form-control" id="blog" placeholder="Enter blog name">
                                <div class="text-danger" v-if="form.errors.has('title')" v-html="form.errors.get('title')" />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect02">Status</label>
                                </div>
                                <select v-model="form.status" class="custom-select" id="inputGroupSelect02">
                                    <option value="publish">Publish</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="blogImage">Blog image</label>
                                <input @change="imageUpload" type="file"  id="blogImage" class="form-control-file">
                                <div class="text-danger" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                                <img width="100" :src="'/'+oldImage" alt="">
                            </div>
                            <div class="form-group">
                                <label for="blogDescription">Blog description</label>
                                <ckeditor class="" :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                                <div class="text-danger" v-if="form.errors.has('description')" v-html="form.errors.get('description')" />
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Form from 'vform'
export default {
    data(){
        return{
            form: new Form({
                status: 'publish',
                image: '',
                title: '',
                description: '<p>Your data will be here.</p>',
                _method: 'put',
            }),
            editor: ClassicEditor,

            editorConfig: {
                // The configuration of the editor.
            },
            oldImage: '',
        }
    },
    methods:{
        getBlog(){
            var id = this.$route.params.id;
            axios.get(`/api/blog/${id}/edit`)
            .then(res => {
                this.form.status = res.data.status;
                this.form.description = res.data.description;
                this.form.title = res.data.title;
                this.oldImage = res.data.image;
            })
        },
        async updateBlog(){
            let id = this.$route.params.id;
            const response = await this.form.post(`/api/blog/${id}`)
            if(response){
                // console.log(response);
                toastr.success('Blog updated succssfully.')
                this.form.image = null;
                this.form.title = '',
                this.form.description = '<p>Your data will be here.</p>'
                this.$router.push({name: 'Blog'})
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
    mounted(){
        this.getBlog();
    }
}
</script>

<style>

</style>

