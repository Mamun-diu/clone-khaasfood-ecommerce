<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Product</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Product'}">Products</router-link></li>
                    <li class="breadcrumb-item active">Create</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="card">
                    <div class="card-header bg-info text-light ">
                        <h3 class="float-left">Create Product</h3>
                        <router-link :to="{name: 'Product'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createProduct">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="mainCategory">Main category</label>
                                                </div>
                                                <select v-model="form.mainId" @change="getSub(form.mainId)" class="custom-select" id="mainCategory">
                                                    <option value="">Choose main</option>
                                                    <option v-for="data in main" :key="data.id" :value="data.id">{{ data.name }} </option>

                                                </select>
                                                <div class="text-danger w-100" v-if="form.errors.has('mainId')" v-html="form.errors.get('mainId')" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="subCategory">Sub category</label>
                                                </div>
                                                <select v-model="form.subId" class="custom-select" id="subCategory">
                                                    <option value="">Choose sub</option>
                                                    <option v-for="data in sub" :key="data.id" :value="data.id">{{ data.name }}</option>

                                                </select>
                                                <div class="text-danger w-100" v-if="form.errors.has('subId')" v-html="form.errors.get('subId')" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="tags">Tag</label>
                                                </div>
                                                <select v-model="form.tagId" class="custom-select" id="tags">
                                                    <option value="">Choose tag</option>
                                                    <option v-for="data in tag" :key="data.id" :value="data.id">{{ data.name }}</option>

                                                </select>
                                                <div class="text-danger w-100" v-if="form.errors.has('tagId')" v-html="form.errors.get('tagId')" />
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="status">Status</label>
                                                </div>
                                                <select v-model="form.status" class="custom-select" id="status">
                                                    <option value="publish">Publish</option>
                                                    <option value="draft">Draft</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="title">Title</label>
                                                </div>
                                                <input  v-model="form.title" type="text" class="form-control" id="title" placeholder="Enter product title">
                                                <div class="text-danger w-100 w-100" v-if="form.errors.has('title')" v-html="form.errors.get('title')" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="price">Price</label>
                                                    </div>
                                                    <input v-model="form.price" type="number" class="form-control" id="price" placeholder="Enter product price">
                                                    <div class="text-danger w-100" v-if="form.errors.has('price')" v-html="form.errors.get('price')" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="quantity">Quantity</label>
                                                    </div>
                                                    <input v-model="form.quantity" type="text" class="form-control" id="quantity" placeholder="Enter product quantity">
                                                    <div class="text-danger w-100" v-if="form.errors.has('quantity')" v-html="form.errors.get('quantity')" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="discount">Discount</label>
                                                    </div>
                                                    <input v-model="form.discount" type="number" class="form-control" id="discount" placeholder="Enter product discount">
                                                    <div class="text-danger w-100" v-if="form.errors.has('discount')" v-html="form.errors.get('discount')" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label for="firstImage" class="form-label">First image</label>
                                                <input @change="imageUpload1" class="form-control-file" type="file" id="firstImage" style="border: 1px solid #ddd;padding: 2px;">
                                                <div class="text-danger w-100" v-if="form.errors.has('image1')" v-html="form.errors.get('image1')" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="secondImage" class="form-label">Second image</label>
                                                <input @change="imageUpload2" class="form-control-file" type="file" id="secondImage" style="border: 1px solid #ddd;padding: 2px;">
                                                <div class="text-danger w-100" v-if="form.errors.has('image2')" v-html="form.errors.get('image2')" />

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-12 py-3">
                                    <ckeditor class="" :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                                    <div class="text-danger w-100" v-if="form.errors.has('description')" v-html="form.errors.get('description')" />
                                </div>
                                <button class="btn btn-primary w-100" type="submit">Save</button>
                            </div>
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
                mainId: '',
                subId: '',
                tagId: '',
                title: null,
                price: null,
                quantity: null,
                discount: null,
                status: 'publish',
                image1: '',
                image2: '',
                description: '<p>Your data will be here.</p>',
            }),
            editor: ClassicEditor,

            editorConfig: {
                // The configuration of the editor.
            },
            main:{},
            sub:{},
            tag:{},
        }
    },
    methods:{
        getAllData(){
            axios.get('/api/product')
            .then(res => {
                this.main = res.data.main;
                this.tag = res.data.tag;
            })
        },
        getSub(id){
            axios.get(`/api/product/sub/${id}`)
            .then(res => {
                this.sub = res.data;
                this.form.subId = '';
            })
        },
        async createProduct(){
            const response = await this.form.post('/api/product')
            if(response){
                toastr.success('Product inserted succssfully.')
                this.form.mainId = '';
                this.form.subId = '';
                this.form.tagId = '';
                this.form.title = null;
                this.form.price = null;
                this.form.quantity = null;
                this.form.discount = null;
                this.form.status = 'publish';
                this.form.image1 = '';
                this.form.image2 = '';
                this.form.description = '<p>Your data will be here...</p>';
            }
        },
        imageUpload1(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.form.image1 = file
        },
        imageUpload2(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.form.image2 = file
        },

    },
    computed: {

    },
    mounted(){
        this.getAllData();

    }
}
</script>

<style>

</style>

