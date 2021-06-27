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
                    <li class="breadcrumb-item active">Hero</li>
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
                        <h3 class="float-left">Hero List</h3>
                        <router-link :to="{name: 'HeroCreate'}" class="btn  btn-outline-light text-dark float-right">Create new</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th>#SL</th>
                                <th>Status</th>
                                <th>image</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="data in getHero.paginationData" :key="data.id">
                                <td>{{ data.id }} </td>
                                <td>{{data.status}}</td>
                                <td><img width="60" :src="'/'+data.image" alt=""> </td>
                                <td>
                                    <router-link :to="{name: 'HeroEdit', params:{id:data.id}}" class="btn btn-sm btn-info mr-1">Edit</router-link>
                                    <button @click="deleteHero(data.id)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <nav class="d-flex justify-content-center" aria-label="Page navigation example">
                        <ul class="pagination " >
                            <li @click.prevent="getPage('prev')" class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li @click.prevent="getPage(index)" :class="(index == page)?'active':''" class="page-item" v-for="index in paginateValue" :key="index"><a  class="page-link" href="#">{{ index }}</a></li>
                            <li @click.prevent="getPage('next')" class="page-item"><a class="page-link" href="#">Next</a></li>

                        </ul>
                    </nav>
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
            page: 1,
            limit: 5,
            paginateValue : null,
        }
    },
    methods: {
        getAllHero(){
            this.$store.dispatch('getAllHero');
        },
        getPage(page){
            if(this.page == 1 && page=='prev'){
                this.page = 1;
            }else if(this.page > 1 && page=='prev'){
                this.page -= 1
            }
            else if(this.page == this.paginateValue && page == 'next'){
                this.page = this.paginateValue;
            }else if(this.page < this.paginateValue && page == 'next'){
                this.page += 1;
            }else{
                this.page = page
            }
        },
        deleteHero(id){
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
                }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/hero/${id}`)
                    .then(()=>{
                        this.getAllHero();
                        // console.log(res);
                        toastr.success("Your data is deleted")
                    })


                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                    )
                }
            })
        }
    },
    computed: {
        getHero(){
            var start = (this.page-1)*this.limit
            var end = start+this.limit
            this.paginateValue = this.$store.getters.paginate("Hero", start,end).paginationValue;
            return this.$store.getters.paginate("Hero", start,end);
        }
    },
    mounted() {
        this.getAllHero();
    },
}
</script>

<style>

</style>
