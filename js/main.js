// imports come first
import appPage from './modules/appPage.js';
import errorPage from './modules/errorPage.js';

  
  var vm = new Vue({
    el: "#app",
  
 

    data: {
      user: {
        isLoggedIn: true,
        settings: {}
      },
      locations:[
        {loc: 'Toronto',
         desc: "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower. Toronto also has many green spaces, from the orderly oval of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.",
         img: 'images/cn_tower_night_view_2.jpg'},

         {loc: 'Niagara Falls',
          desc: "Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge. It’s site on the Niagara River's western shore overlooks the Horseshoe Falls, the cascades' most expansive section. Elevators take visitors to a lower, wetter vantage point behind the falls. A cliffside park features a promenade alongside 520-ft.-high Skylon Tower with an observation deck.",
          img: "images/niagara_falls_summer.jpg"},

          {loc: 'Gateway Casino - London',
          desc: "Gateway Casinos & Entertainment Limited (“GCEL”) is one of the largest and most diversified gaming and entertainment companies in Canada. Look to take your chances and play the night away at our London location.",
          img: "images/gateway_casino_london.jpg"},

          {loc: "Ripley's Aquarium",
          desc: "Ripley's Aquarium of Canada is a public aquarium in Toronto, Ontario, Canada. The aquarium is one of three aquariums owned and operated by Ripley Entertainment. It is located in downtown Toronto, just southeast of the CN Tower.",
          img: "images/Ripley's_aquarium_canada1.jpg"}
      ]
    },
    methods:{
      getUserData() {
        // do a fetch call here and get the user fro db
        const url = `./includes/index.php?email=${email}`;
  
        fetch(url) // get data from the DB
        .then(res => res.json()) // translate JSON from DB to plain object
        .then(data => { // use the plain data object (the user)
          console.log(data); // log it to the concole (testing)
  
          // put our DB data into Vue
          this.user.settings = data[0];
        })
        .catch((error) => console.error(error))
      }
    }

}).$mount('#app');



//burgermenu
const nav = document.querySelector('.mainNav'),
      header = document.querySelector('.header'),
      burger = document.querySelector('.burger'),
      navItems = document.querySelectorAll('.navItem');

        function navToggle(){
            console.log('nav toggled.')
            nav.classList.toggle('navOn');
        }

      burger.addEventListener('click', navToggle);
      navItems.forEach(item =>{
        item.addEventListener('click', function(){
          nav.classList.remove('navOn');
        })
      })