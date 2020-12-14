import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

export default createStore({
  state: {

  userLocalStorage: {
    status:'',
    token: localStorage.getItem('token') || '',
    user: {}
  },

  //state pour les tokken
  login: {
    token: localStorage.getItem('access_token') || null,
  },

    // state Redaction Article
    redactionArticle: [{
      id: "",
      country: "",
      title: "",
      content: "",
      user_id:'',
    }],

    // state Profil - modif profil espace personnel
    profil: {
      token: localStorage.getItem('token') || '',
      // status:"",
      // user: {},
      picture: "",
      name: "",
      description: "",
      nbrArticles: 42,
      nbrFollowers: 23,
    },

    // state ajoutCommentaire - rédaction du commentaire dans components article
    ajoutCommentaire: [{
      id: "",
      commentaire: "",
      post_id: ""
    }],

    countries: [{
      id: "",
      name: "",
      picture: "",
    }]
  },
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------

  getters: {
    //LOCALSTORAGE
    // isLoggedInLocalStorage(state) {
    //   return !!state.userLocalStorage.token
    // },

    // authStatusLocalStorage(state) {
    //   return state.userLocalStorage.status
    // },
    async allArticles(state) {
      
      const resp = await axios({url: "https://codingstg.epidoc.eu/api/post" , method: 'GET', headers: {
        Accept: "application/json"}
      });
      
      state.redactionArticle = resp.data;
    },
    // Getters login
    loggedIn(state) {
      return state.login.token != null /* Si token existe = connecté sinon null*/
    },

    async allCountries(state) {
      // console.log("DEBUG")
      const resp = await axios({url: "https://codingstg.epidoc.eu/api/countries" , method: 'GET', headers: {
        Accept: "application/json"}
      });
      state.countries = resp.data;
      // console.log(resp.data)
    },
  
    
    

    // Getters Profil Pseudo
    getActuelPseudo(state) {
      return state.profil.newPseudo
    },

    // Getters Profil Description
    getdescription(state) {
      return state.profil.description
    },

    // Getters Article Pays
    getpays(state) {
      return state.redactionArticle.pays
    },

    // Getters Article Titre Article
      gettitreArticle(state) {
        return state.redactionArticle.titreArticle
      },

    // Getters Article Article
      getarticleRedige(state) {
        return state.redactionArticle.articleRedige
      },

      // Getters ajoutCommentaire commentaire
      getcommentaire(state) {
        return state.ajoutCommentaire.commentaire
      },

  },

  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------

  actions: {
    // Action LOCALSTORAGE pour Login

    async getUser({commit}) {
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      const resp = await axios({url: "https://codingstg.epidoc.eu/api/users/" + id , method: 'GET', headers: {
        Accept: "application/json", 
        Authorization: "Bearer " + token}
      });
        let user = {
          id: resp.data.id,
          name: resp.data.name,
          picture: resp.data.picture,
          description: resp.data.description,
          // nbrArticles: resp.data.likes,
          nbrFollowers: resp.data.follows,
        }
        console.log(user);
        commit('setNewPseudo', user)
    },



   async login({commit}, userData) {
        let newUser = {
          email: userData.usermail,
          password: userData.password,
        }

      const resp = await axios({url: 'https://codingstg.epidoc.eu/api/users/login', data: newUser, method: 'POST', header: {"Accept": "application/json"}});
      
      if (resp.data.failure) {
        return alert(resp.data.failure)
      } else if (resp.data.errors) {
        return alert(resp.data.errors.password)
      }

      const data = {id: resp.data.id, token: resp.data.accessToken}
      commit("loginToStorage", data);
    },


    //Action LOCALSTORAGE pour register
    async register({commit}, user){
      let newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.passwordConfirmation
      };
      
      console.log(newUser)
      await axios({url: 'https://codingstg.epidoc.eu/api/users', data: newUser, method: 'POST', header: {"Accept": "application/json"}});
      router.push({name:'login'});
      console.log(commit);
    },

    //Action LOCALSTORAGE pour logout
    // logout({commit}){
    //   return new Promise((resolve, reject) => {
    //     commit('logout')
    //     localStorage.removeItem('token')
    //     delete axios.defaults.headers.common['Authorization']
    //     resolve()
    //     reject()
    //   })
    // },

    

    // Action retrieveToken de la page LOGIN
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => { 

      axios.post('https://codingstg.epidoc.eu/api/login', {
        email: credentials.usermail, //Définis dans les data de Login
        password: credentials.password
      })
        .then(response => {
          const token = response.data.access_token

          localStorage.setItem('access_token', token),
          context.commit('retrieveToken', token) //MUTATION retrieveToken
          resolve(response)
          // console.log('reponse')
        })
        .catch(error => {
          reject(error)
          // console.log('erreur')
        })
      })
    },

    // Action destroyToken de la page LOGOUT
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.login.token /* passe dans axios le header pour supprimer le token sur le serveur */

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => { 

          axios.post('/logout',)

            .then(response => {    
              localStorage.removeItem('access_token'),
              context.commit('destroyToken') //MUTATION retrieveToken
              resolve(response)
              // console.log('reponse')
            })
            .catch(error => { /* si quelqu'un essaye de récupérer sa propre localStorage Key, ça la retire si elle est invalide */
              localStorage.removeItem('access_token'),
              context.commit('destroyToken')
              reject(error)
              // console.log('erreur')
            })
          })
      }
    },



    async changeUser({commit}, data) {
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      const resp = await axios({url: "https://codingstg.epidoc.eu/api/users/" + id , method: 'PUT', headers: {
        Accept: "application/json", 
        Authorization: "Bearer " + token},
        data: {
          name: data.name,
          description: data.description,
        }
      });
        if (resp.status == 200) {
        let user = {
          id: id,
          name: data.name,
          // picture: resp.data.picture,
          description: data.description,
        }
        commit('setNewPseudo', user)
      }
    },
    


    // Action Profil Pseudo
    async changePseudo({ commit }, newPseudo) {
      commit("setNewPseudo", newPseudo)
      },

    // Action Profil Description
      async changeDescription({ commit }, description) {
      commit("setDescription", description)
      },



    // Action Article Pays
      async addPays({ commit }, pays) {
        commit("setPays", pays)
        },

      // Action Article Titre Article
      async addTitreArticle({ commit }, titreArticle) {
        commit("setTitreArticle", titreArticle)
        },

      // Action Article Article
      async addArticleRedige({ commit }, articleRedige) {
        commit("setArticleRedige", articleRedige)
        },




      // Action ajout de commentaire de la page COMMENTAIRE
      async addCommentaire({ commit, state }, data) {
        // console.log("ADD COMMENTAIRE");
        let id = '';
          id = state.ajoutCommentaire.length;
        // console.log(data.article);

        const newCommentaire = {
          id:id,
          content: data.commentaire,
          post_id: data.article,
        }

        commit("setCommentaire", newCommentaire)
        },


      
      // Action ajout article
      async addArticle({commit}, data) {

        let id = localStorage.getItem('id');
        let token = localStorage.getItem('token');
        console.log("AVANT AXIOS")
        const resp = await axios({url: "https://codingstg.epidoc.eu/api/post", method: 'POST', headers: {
          Accept: "application/json", 
          Authorization: "Bearer " + token},
          data: {
            title: data.title,
            country: data.country,
            content: data.content,
            user_id: id
          }
        });
        console.log("DEBUG")
        console.log(resp.data.success)
          if (resp.status == 200) {
            var articleId = "";
            if (!this.state.newArticle) {
              articleId = 1
            } else {
              articleId = this.state.newArticle.length
            }
        const newArticle = {
          id: articleId,
          country: data.country,
          title: data.content,
          content: data.content,
          user_id:id,
        }
          commit("setArticleRedige", newArticle)
        }
      },

  },

  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------

  mutations: {
    //Mutations pour le LOCALSTORAGE
    // auth_request(state) {
    //   state.userLocalStorage = 'loading'
    // },
    // auth_success(state, token, user) {
    //   state.userLocalStorage = 'success'
    //   state.userLocalStorage.token = token
    //   state.userLocalStorage.user = user
    // },
    // auth_error(state) {
    //   state.userLocalStorage = 'error'
    // },
    // logout(state) {
    //   state.userLocalStorage = ''
    //   state.userLocalStorage.token = ''
    // },

    loginToStorage(state, data) {
      
      console.log(state);
      const id = data.id
      const token = data.token

      localStorage.setItem('id', id)
      localStorage.setItem('token', token)

      router.push({name:'espace-personnel', params:{id:id}})
    },


    // Mutation retrieveToken de la page LOGIN, définie dans l'action
    retrieveToken(state, token) {
      state.login.token = token
    },
    // Mutation destroyToken de la page LOGOUT, définie dans l'action
    destroyToken(state) {
      state.login = null
    },


    // Mutation Profil Pseudo
      setNewPseudo(state, newPseudo) {
      state.profil = newPseudo
    },

    // Mutation Profil description
      setDescription(state, description) {
      state.profil.description = description

    },



      // Mutation Article Pays
      setPays(state, pays) {
        console.log('Entrée set pays')

        state.redactionArticle.pays = pays
      },
    
      // Mutation Article Titre Article
      setTitreArticle(state, titreArticle) {

        state.redactionArticle.titreArticle = titreArticle
      },

      // Mutation Article  Article
      setArticleRedige(state, data) {
      
        state.redactionArticle.push(data);

      },




      // Mutation Commentaire
      setCommentaire(state, newCommentaire) {
        if (state.ajoutCommentaire) {
        console.log("SET COMMENTAIRE");
          state.ajoutCommentaire.push(newCommentaire)
        } else {
          state.ajoutCommentaire = newCommentaire
        }        
        
        // console.log(state.ajoutCommentaire);  
        
      },

  },
});

