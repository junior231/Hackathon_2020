// imports come first
// import UsersComponent from "./components/UsersComponent.js";
const router = new VueRouter ({
    routes: [
      { path: "/", name: "home", component: UsersComponent }
    ]
  })
  
  
  var vm = new Vue({
    el: "#app",
  
    router,

    data: {

    },

    methods: {
        
    }

});