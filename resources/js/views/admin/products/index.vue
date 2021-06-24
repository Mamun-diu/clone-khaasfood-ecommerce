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
                    <li class="breadcrumb-item active">product</li>
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
                        <h3 class="float-left">Product List</h3>
                        <router-link :to="{name: 'ProductCreate'}" class="btn  btn-outline-light text-dark float-right">Create new</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
 <!-- main_category_id	sub_category_id	tag_id	slug	price	status	discount	quantity	description -->

                                <th>#SL</th>
                                <th>Main category</th>
                                <th>Sub category</th>
                                <th>Tag</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Mango</td>
                                <td>Juice</td>
                                <td>New</td>
                                <td>Katari bhog</td>
                                <td>150</td>
                                <td>Published</td>
                                <td>0%</td>
                                <td>150kg</td>
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
