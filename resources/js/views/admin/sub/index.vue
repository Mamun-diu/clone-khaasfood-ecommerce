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
                            <tr>
                                <td>01</td>
                                <td>New</td>
                                <td>sub category</td>
                                <td>
                                    <button class="btn btn-sm btn-info mr-1">Edit</button>
                                    <button class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    computed: {

    },
}
</script>

<style>

</style>
