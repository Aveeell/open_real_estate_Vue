import Home from "./components/Home"
import Objects from "./components/Objects"
import Map from "./components/Map"
import Price from "./components/Price"
import City from "./components/City"
//-----------------------------------------------------
import Infrastructure from "./components/Infrastructure"
import Registration from "./components/Registration"
import exMap from "./components/exMap"
//-----------------------------------------------------

export const routes = [
  {
    path: '/home', name: 'home ', components: {
      default: Home,
    }
  },
  {
    path: '/objects', name: 'objects', components: {
      default: Objects
    }
  },
  {
    path: '/city', name: 'city', components: {
      default: City
    }
  },
  {
    path: '/map', name: 'map', components: {
      default: Map
    }
  },
  {
    path: '/price', name: 'price', components: {
      default: Price
    }
  },

 //mdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  {
    path: '/infrastructure', name: 'infrastructure ', components: {
      default: Infrastructure,
    }
},
    
      {
    path: '/exMap', name: 'exMap ', components: {
      default: exMap,
    }
},

{
    path: '/registration', name: 'registration ', components: {
      default: Registration,
    }
},
    //mda
  {path: '', redirect: '/home'},
  {
    path: '*', redirect: {name: 'home'}
  }
];
