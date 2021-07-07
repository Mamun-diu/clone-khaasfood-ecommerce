import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    number : 12,
    allTag : [],
    allMain : [],
    allSub : [],
    allHero : [],
    allBlog : [],
    allProduct : [],
    all: {},
    cart:[],


  },
  getters: {
    getSubProduct:(state)=>(id)=>{
        let obj = [];
        state.all.product.forEach(function(p){
            if(id==p.sub_category_id){
                obj.push(p)
            }
        })
        return obj;
    },
    getMainProduct:(state)=>(id)=>{
        let obj = [];
        state.all.product.forEach(function(p){
            if(id==p.main_category_id){
                obj.push(p)
            }
        })
        return obj;
    },

    getCartItem(state){
        let cart = [];
        let sum = 0;
        for (const data of state.cart) {
            state.all.product.forEach(function(p){
                if(data.id == p.id){
                    sum += data.quantity*p.price
                    cart.push({quantity: data.quantity, product: p, taka:sum})
                }
            })
        }
        return cart;
    },
    cartItem:(state)=>(id,quantity=1)=>{
        state.cart.push({id:id,quantity:quantity});
    },
    newProduct(state){
        var obj = [];
        state.all.product.forEach(function(p){
            if(p.tag.name=="NEW"){
                obj.push(p)
            }
        })
        return obj;
    },
    mainWithCount(state){
        let obj =[];
        let main = [];
        let count = 0;
        state.all.product.forEach(function(v){
            if(!main.includes(v.main_category_id)){
                main.push(v.main_category_id);
            }
        });
        main.forEach(function(m){
            state.all.product.forEach(function(p){
                if(m == p.main_category_id){
                    ++count;

                }
            })

            for (const p of state.all.product) {
                if(m == p.main_category_id){
                    obj.push({main:p.main,count:count})
                    count = 0;
                    break;
                }
            }
        })
        return obj;
    },
    mainCategory(state){
        return state.all.main;
    },
    subProduct:(state)=>(id)=>{
        let val = [];
        let sub = [];
        let obj = []

        state.all.product.forEach(function (v) {
            if(v.main_category_id==id){
                val.push(v);
            }
        });
        val.forEach(function(v){
            if(!sub.includes(v.sub_category_id)){
                sub.push(v.sub_category_id);
            }
        });
        let subCat = "";
        let product = [];
        sub.forEach(function(v){
            val.forEach(function(w){
                if(w.sub_category_id==v){
                    subCat = w.sub.name;
                    product.push({id:w.id,title:w.title,slug:w.slug})
                }

            })
            obj.push({sub:subCat,product:product})
            product = [];
        })
        // let unique = [...new Set(val.sub_category_id)];
        // console.log(val);
        return obj;


    },
    paginate:(state)=>(table, start, limit)=>{
        if(table=="Tag"){
            var pagniateNumber = state.allTag.slice(start,limit);
            var paginateData = Math.ceil(state.allTag.length/(limit-start));
        }else if(table=="Main"){
            var pagniateNumber = state.allMain.slice(start,limit);
            var paginateData = Math.ceil(state.allMain.length/(limit-start));
        }else if(table=="Sub"){
            var pagniateNumber = state.allSub.slice(start,limit);
            var paginateData = Math.ceil(state.allSub.length/(limit-start));
        }else if(table=="Hero"){
            var pagniateNumber = state.allHero.slice(start,limit);
            var paginateData = Math.ceil(state.allHero.length/(limit-start));
        }else if(table=="Blog"){
            var pagniateNumber = state.allBlog.slice(start,limit);
            var paginateData = Math.ceil(state.allBlog.length/(limit-start));
        }else if(table=="Product"){
            var pagniateNumber = state.allProduct.slice(start,limit);
            var paginateData = Math.ceil(state.allProduct.length/(limit-start));
        }

        return {
            paginationData: pagniateNumber,
            paginationValue: paginateData
        }
    },
  },
  mutations: {
    getAllTag(state,payload){
        state.allTag = payload;
    },
    getAllMain(state,payload){
        state.allMain = payload;
    },
    getAllSub(state,payload){
        state.allSub = payload;
    },
    getAllHero(state,payload){
        state.allHero = payload;
    },
    getAllBlog(state,payload){
        state.allBlog = payload;
    },
    getAllProduct(state,payload){
        state.allProduct = payload;
    },
    getAll(state,payload){
        state.all = payload;
    },
  },
  actions: {
    // login(context,payload){
    //   return new Promise((resolve,reject) =>{
    //     axios.post('http://127.0.0.1:8000/api/authenticate/login',payload)
    //     .then(res =>{
    //       localStorage.setItem('accessToken',res.data.data.access_token)
    //       localStorage.setItem('accessType',res.data.data.type)
    //       context.commit('login',res.data.data);
    //       resolve(res.data.data.type);
    //     }).catch(err =>{
    //       reject(err);
    //     })
    //   });

    // },
    getAllTag(context){
        axios.get('/api/tag')
        .then(res => {
            context.commit('getAllTag',res.data);
        })
    },
    getAllMain(context){
        axios.get('/api/main')
        .then(res => {
            context.commit('getAllMain',res.data);
        })
    },
    getAllSub(context){
        axios.get('/api/sub')
        .then(res => {
            context.commit('getAllSub',res.data.sub);
        })
    },
    getAllHero(context){
        axios.get('/api/hero')
        .then(res => {
            context.commit('getAllHero',res.data);
        })
    },
    getAllBlog(context){
        axios.get('/api/blog')
        .then(res => {
            context.commit('getAllBlog',res.data);
        })
    },
    getAllProduct(context){
        axios.get('/api/product')
        .then(res => {
            context.commit('getAllProduct',res.data.product);
        })
    },
    getAll(context){
        axios.get('/frontend/getAll')
        .then(res => {
            context.commit('getAll',res.data);
        })
    },


  },
  modules: {},
});
