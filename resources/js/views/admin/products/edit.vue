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
                    <li class="breadcrumb-item active">Update</li>
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
                        <h3 class="float-left">Update Product</h3>
                        <router-link :to="{name: 'Product'}" class="btn  btn-outline-light text-dark float-right">Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="mainCategory">Main category</label>
                                                </div>
                                                <select class="custom-select" id="mainCategory">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="subCategory">Sub category</label>
                                                </div>
                                                <select class="custom-select" id="subCategory">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="tag">Tag</label>
                                                </div>
                                                <select class="custom-select" id="tag">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="status">Status</label>
                                                </div>
                                                <select class="custom-select" id="status">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
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
                                                <input type="text" class="form-control" id="title" placeholder="Enter product title">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="price">Price</label>
                                                    </div>
                                                    <input type="number" class="form-control" id="price" placeholder="Enter product price">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="quantity">Quantity</label>
                                                    </div>
                                                    <input type="text" class="form-control" id="quantity" placeholder="Enter product quantity">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="discount">Discount</label>
                                                    </div>
                                                    <input type="number" class="form-control" id="discount" placeholder="Enter product discount">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label for="firstImage" class="form-label">First image</label>
                                                <input class="form-control-file" type="file" id="firstImage" style="border: 1px solid #ddd;padding: 2px;">
                                            </div>
                                            <div class="mb-3">
                                                <label for="secondImage" class="form-label">Second image</label>
                                                <input class="form-control-file" type="file" id="secondImage" style="border: 1px solid #ddd;padding: 2px;">
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-12 py-3">
                                    <ckeditor class="" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                                </div>
                                <button class="btn btn-primary w-100" type="submit">Update</button>
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

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    };
</script>

<style>

</style>

