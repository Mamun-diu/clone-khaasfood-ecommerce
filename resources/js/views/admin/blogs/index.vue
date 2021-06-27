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
                    <li class="breadcrumb-item active">Blog</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                    <div class="card-header bg-info text-light ">
                        <h3 class="float-left">Blog List</h3>
                        <router-link :to="{name: 'BlogCreate'}" class="btn  btn-outline-light text-dark float-right">Create new</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th>#SL</th>
                                <th>Title</th>
                                <th>image</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="data in getBlog.paginationData" :key="data.id">
                                <td>{{ data.id }} </td>
                                <td>{{ data.title }} </td>
                                <td><img width="80" :src="'/'+data.image" alt=""> </td>
                                <td>{{ data.status }}</td>
                                <td v-html="resizes(data.description)"></td>
                                <td>
                                    <router-link :to="{name: 'BlogEdit', params:{id:data.id}}" class="btn btn-sm btn-info w-100 mr-1 mb-1 ">Edit</router-link>
                                    <button @click="deleteBlog(data.id)" class="btn btn-sm btn-danger w-100">Delete</button>
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
        getAllBlog(){
            this.$store.dispatch('getAllBlog');
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
        deleteBlog(id){
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
                }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/blog/${id}`)
                    .then(()=>{
                        this.getAllBlog();
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
        },
        resizes(data){
            return data.slice(0,100);
        }
    },
    computed: {
        getBlog(){
            var start = (this.page-1)*this.limit
            var end = start+this.limit
            this.paginateValue = this.$store.getters.paginate("Blog", start,end).paginationValue;
            return this.$store.getters.paginate("Blog", start,end);
        }
    },
    mounted() {
        this.getAllBlog();
    },
}
</script>

<style>

</style>
