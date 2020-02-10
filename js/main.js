// imports come first
import promotionComponent from "./components/promotionComponent.js";
const router = new VueRouter ({
    routes: [
      { path: "/", name: "home", component: promotionComponent }
    ]
  })
  
  
  var vm = new Vue({
    el: "#app",
  
    router,

    data: {
      user: {
        isLoggedIn: true,
        settings: {}
      }
    },

    methods: {
        
    }

});