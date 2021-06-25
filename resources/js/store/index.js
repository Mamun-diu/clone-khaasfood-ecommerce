import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    number : 12,
    allTag : [],

  },
  getters: {
    tagPaginate:(state)=>(start, limit)=>{
        var tagPagin = state.allTag.slice(start,limit);
        var paginate = Math.ceil(state.allTag.length/(limit-start));
        return {
            paginationData: tagPagin,
            paginationValue: paginate
        }
    }
  },
  mutations: {
    getAllTag(state,payload){
        state.allTag = payload;
    }
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
    }

  },
  modules: {},
});
