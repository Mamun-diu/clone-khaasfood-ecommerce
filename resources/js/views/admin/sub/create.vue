<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Sub Category</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'Sub'}">Sub category</router-link></li>
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
                        <h3 class="float-left">Create sub category</h3>
                        <router-link :to="{name: 'Sub'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createCategory">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Main category</label>
                                </div>
                                <select v-model="form.mainCategory" class="custom-select" id="inputGroupSelect01">
                                    <option selected value="0">Choose...</option>
                                    <option v-for="main in mainData" :key="main.id" :value="main.id">{{ main.name }} </option>

                                </select>
                            </div>
                            <div class="form-group">
                                <label for="subCategory">Category name</label>
                                <input v-model="form.subCategory" type="text" class="form-control" id="subCategory" placeholder="Enter sub-category name">
                                <div class="text-danger" v-if="form.errors.has('subCategory')" v-html="form.errors.get('subCategory')" />
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
                mainCategory: 0,
                subCategory: null,
            }),

            mainData : {},
        }
    },
    methods: {
        getMain(){
            axios.get('/api/sub')
            .then(res => {
                this.mainData = res.data.main;
            })
        },
        async createCategory(){
            if(this.form.mainCategory == 0){
                toastr.error("Select a main category");
            }else{
                const response = await this.form.post('/api/sub')
                if(response){
                    toastr.success("Sub category created");
                    this.form.subCategory = null;
                }
            }

        }
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

