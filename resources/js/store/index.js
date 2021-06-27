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


  },
  getters: {
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
    }
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


  },
  modules: {},
});
