import Vue from 'vue'
import Vuex from 'vuex'
import VueNativeSock from 'vue-native-websocket'


Vue.use(Vuex)
Vue.use(VueNativeSock, 'https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=b0145070169a472ab77e58a9693b196f',{
  connectManually:true,
})

export default new Vuex.Store({
    state: {
        Headlines:null,
        Articles:null,
        ArticlesCategory:null,
        ArticlesSearched:null,
        ArticleDetail:null,
        socket: {
            message: '',
            reconnectError: false,
        },
    },
    getters:{
      getAllArticles : state => { return state.Articles; },
      getAllHeadlines : state => { return state.Headlines; },
      getCategoryArticles : state => { return state.ArticlesCategory;},
      GetSearchedArticles : state => { return state.ArticlesSearched;},
      GetDetailArticle : state => { return state.ArticleDetail;}

    },
    actions: {
        fetchHeadlines: ({commit}) => {
            setTimeout(() => {
                fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=b0145070169a472ab77e58a9693b196f').then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    commit('setTopHeadlines',json);
                }).catch(function (error) {
                    console.error("an error has occured :", error);
                });
            }, 500)
          },
        fetchArticles: ({commit}) => {
            setTimeout(() => {
                fetch('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&pageSize=12&apiKey=b0145070169a472ab77e58a9693b196f').then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    commit('setArticles',json);
                }).catch(function (error) {
                    console.error("an error has occured :", error);
                });
            }, 500)
        },
        fetchCategoryArticles: ({commit} , searchQuery) => {
            setTimeout(() => {
                fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=b0145070169a472ab77e58a9693b196f&category='+ searchQuery).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    commit('setArticlesCategory',json);
                }).catch(function (error) {
                    console.error("an error has occured :", error);
                });
            }, 500)
        },
        fetchSearchArticles: ({commit} , searchQuery) => {
            setTimeout(() => {
                fetch('https://newsapi.org/v2/everything?pageSize=12&apiKey=b0145070169a472ab77e58a9693b196f&q='+ searchQuery).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    commit('setArticlesSearch',json);
                }).catch(function (error) {
                    console.error("an error has occured :", error);
                });
            }, 500)
        }




    },
    mutations: {
        setTopHeadlines(state,a){
            state.Headlines = a.articles
        },
        setArticles(state,a){
            state.Articles = a.articles 
        },
        setArticlesCategory(state,a){
            state.ArticlesCategory = a.articles 
        },
        setArticlesSearch(state,a){
            state.ArticlesSearched = a.articles
        },
        setArticleDetail(state,article){
            state.ArticleDetail = article 
        },
        SOCKET_ONMESSAGE (state, message)  {
            state.socket.message = message;
            this.$store.dispatch(fetchHeadlines);
        },
    },
})

// 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=f94f6f909c7f40ed88350cf8b005c467'