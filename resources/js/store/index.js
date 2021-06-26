import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    number : 12,
    allTag : [],
    allMain : [],
    allSub : [],

  },
  getters: {
    tagPaginate:(state)=>(table, start, limit)=>{
        if(table=="Tag"){
            var tagPagin = state.allTag.slice(start,limit);
            var paginate = Math.ceil(state.allTag.length/(limit-start));
        }else if(table=="Main"){
            var tagPagin = state.allMain.slice(start,limit);
            var paginate = Math.ceil(state.allMain.length/(limit-start));
        }else if(table=="Sub"){
            var tagPagin = state.allSub.slice(start,limit);
            var paginate = Math.ceil(state.allSub.length/(limit-start));
        }

        return {
            paginationData: tagPagin,
            paginationValue: paginate
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


  },
  modules: {},
});
