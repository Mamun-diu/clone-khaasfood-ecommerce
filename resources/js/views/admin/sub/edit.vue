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
                        <h3 class="float-left">Update sub category</h3>
                        <router-link :to="{name: 'Sub'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateCategory">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Main category</label>
                                </div>
                                <select v-model="form.mainCategory" class="custom-select" id="inputGroupSelect01">
                                    <option selected value="0">Choose...</option>
                                    <option v-for="main in data.main" :key="main.id" :value="main.id">{{ main.name }} </option>

                                </select>
                            </div>
                            <div class="form-group">
                                <label for="subCategory">Category name</label>
                                <input v-model="form.subCategory" type="text" class="form-control" id="subCategory" placeholder="Enter sub-category name">
                                <div class="text-danger" v-if="form.errors.has('subCategory')" v-html="form.errors.get('subCategory')" />
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
                mainCategory: 0,
                subCategory: null,
            }),

            data : {},

        }
    },
    methods: {
        getData(){
            axios.get('/api/sub')
            .then(res => {
                this.data = res.data;
            })
        },
        subData(){
            let id = this.$route.params.id;
            axios.get(`/api/sub/${id}/edit`)
            .then(res => {
                this.form.mainCategory = res.data.main_category_id;
                this.form.subCategory = res.data.name;
            });
        },
        async updateCategory(){
            if(this.form.mainCategory == 0){
                toastr.error("Select a main category");
            }else{
                let id = this.$route.params.id;
                const response = await this.form.put(`/api/sub/${id}`)
                if(response){
                    toastr.success("Sub category updated");
                    this.form.mainCategory = 0;
                    this.form.subCategory = null;
                    this.$router.push({name: 'Sub'});
                }
            }

        }
    },
    computed: {

    },
    mounted() {
        this.getData();
        this.subData();
    },
}
</script>

<style>

</style>

