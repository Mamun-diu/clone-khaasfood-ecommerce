<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Sub category</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><router-link :to="{name: 'Dashboard'}">Home</router-link></li>
                    <li class="breadcrumb-item active">sub category</li>
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
                        <h3 class="float-left">Sub category list</h3>
                        <router-link :to="{name: 'SubCreate'}" class="btn  btn-outline-light text-dark float-right">Create new</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th>#SL</th>
                                <th>Main category</th>
                                <th>Sub category</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="data in getSub.paginationData" :key="data.id">
                                <td>{{ data.id }} </td>
                                <td>{{ data.main.name }} </td>
                                <td>{{ data.name }} </td>
                                <td>
                                    <router-link :to="{name: 'SubEdit',params:{id:data.id}}" class="btn btn-sm btn-info mr-1">Edit</router-link>
                                    <button @click="deleteSub(data.id)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <nav class="d-flex justify-content-center" aria-label="Page navigation example">
                            <ul class="pagination " >
                                <li @click.prevent="getPage('prev')" class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li @click.prevent="getPage(index)" :class="(index == page)?'active':''" class="page-item" v-for="index in paginateValue" :key="index"><a  class="page-link" href="#">{{ index }}</a></li>
                                <li @click.prevent="getPage('next')" class="page-item"><a class="page-link" href="#">Next</a></li>
                                <!-- <li  class="page-item" v-if="i%3==0">{{ (i/10)+1 }} </li> -->
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
            data : null,
            page: 1,
            limit: 5,
            paginateValue : null,
        }
    },
    methods: {
        // getSub(){
        //     axios.get('/api/sub')
        //     .then(res => {
        //         this.data = res.data.sub;
        //     })
        // },
        getAllSub(){
            this.$store.dispatch('getAllSub');
        },
        deleteSub(id){
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
                }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/sub/${id}`)
                    .then(()=>{
                        this.getAllSub();
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
    },
    computed: {
        getSub(){
            var start = (this.page-1)*this.limit
            var end = start+this.limit
            this.paginateValue = this.$store.getters.tagPaginate("Sub", start,end).paginationValue;
            return this.$store.getters.tagPaginate("Sub", start,end);
        }
    },
    mounted(){
        this.getAllSub();
    }
}
</script>

<style>

</style>
