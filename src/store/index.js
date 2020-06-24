import Vue from 'vue'
import Vuex from 'vuex'

 //import userdata from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    
    state:
    {
        userArray:[
          {
            UserName:"vedita",
            FullName:'Vedita Kamat ',
            EmailId:'vedita@gmail.com ',
            PNo:'9999999999',
            pword:'vedita123'
          },
    
          {
            UserName:"bhushan",
            FullName:'Bhushan Kelkar ',
            EmailId:'bhushan@gmail.com ',
            PNo:'0000000000',
            pword:'bhushan123'
          },
          {
            UserName:"purva",
            FullName:'Purva Prabhu ',
            EmailId:'purva@gmail.com ',
            PNo:'8888888888',
            pword:'purva123'
          }
        ],
        starterArray: [
          {
            fooditem:"Paneer 65",
            foodtpye:"Starter", 
            image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-65-fry.jpg",
            price:210
          },
          {
            fooditem:"Veg 65",
            foodtpye:"Starter", 
            image:"https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/gobi-65-recipe-1.jpg",
            price:190
          },
          {
            fooditem:"Gobi Manchurian",
            foodtpye:"Starter", 
            image:"https://ikneadtoeat.com/wp-content/uploads/2018/11/Gobi-Manchurian-1.jpg",
            price:170
          },
          {
            fooditem:"Hara Bhara Kebab",
            foodtpye:"Starter", 
            image:"https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/06/Hara-Bhara-Kabab-2.jpg?resize=1024%2C680",
            price:190
          },
          {
            fooditem:"French Fries",
            foodtpye:"Starter", 
            image:"https://www.corriecooks.com/wp-content/uploads/2018/08/Instant-Pot-French-Fries.jpg",
            price:150
          },
          {
            fooditem:"Bhindi Fry",
            foodtpye:"Starter", 
            image:"https://c.ndtvimg.com/2019-01/s3gsb3co_fffff_625x300_04_January_19.jpg",
            price:150
          },
          {
            fooditem:"Sabudana Wada",
            foodtpye:"Starter", 
            image:"https://www.whiskaffair.com/wp-content/uploads/2014/08/Sabudana-Vada-5.jpg",
            price:190
          },
          {
            fooditem:"Aloo Tikki",
            foodtpye:"Starter", 
            image:"https://www.cooktube.in/wp-content/uploads/2017/02/aloo-tikki-848x477.jpg",
            price:190
          },
        ],
         
          maincArray:[
          {
            fooditem:"Paneer Butter Masala",
            foodtpye:"Main Course", 
            image:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&ssl=1",
            price:240
          },
    
         {
            fooditem:"Paneer Makkhanwala",
            foodtpye:"Main Course",
            image:"https://www.vegrecipesofindia.com/wp-content/uploads/2014/06/paneer-makhanwala-restaurant-style.jpg",
            price:240
          },
         {
            fooditem:"Dal Fry",
            foodtpye:"Main Course",
            image:"https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/dal-tadka-recipe-1.jpg",
            price:210
          },
          {
            fooditem:"Veg Kadhai",
            foodtpye:"Main Course",
            image:"https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/veg-kadai-recipe-1a.jpg",
            price:240      
          },
        {
          fooditem:"Paneer Kadhai",
            foodtpye:"Main Course",
            image:"https://www.whiskaffair.com/wp-content/uploads/2018/09/Kadai-Paneer-5.jpg",
            price:240
        },
        {
          fooditem:"Veg Biryani",
            foodtpye:"Main Course",
            image:"https://i1.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg?resize=1024%2C680",
            price:250
        },
        {
          fooditem:"Veg Fried Rice",
            foodtpye:"Main Course",
            image:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Archana_Doshi/Indian_Chinese_Vegetable_Fried_Rice_Recipe-4.jpg",
            price:210
        },
        {
          fooditem:"Veg Pulao",
            foodtpye:"Main Course",
            image:"http://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg",
            price:180
        }
  ],
   cartProducts:[],
   cartInfo:[]
},
  
  mutations : {
    addFoodItem: (state, product) => {
      state.cartProducts.push(product);
    },
    addFoodInfo: (state, item) => {
      
      state.cartInfo.push(item);
    },
    removeFoodItem: (state,index) => {
            state.cartInfo.splice(index,1);  
             state.cartProducts.splice(index,1); 
        },
        updateList(state,extObj){
          state.userArray.push(extObj);
        }
}, 
actions:{
  addFoodItem: (context, product) => {
    context.commit("addFoodItem", product);
  },
  addFoodInfo: (context,item) => {
    context.commit("addFoodInfo",item);
  },
  removeFoodItem: (context,index) => {
    context.commit("removeFoodItem",index);  
    },
    updateList: (context, payload)=>{
      context.commit('updateList', payload)
    }
},
      
        getters: {
          getStarter: state => state.starterArray,
          getCart: state => state.cartProducts.length,
          cartItems: state => state.cartInfo,
          getMainc: state => state.maincArray,
          getUser: (state)=>
          {
           return state.userArray
          }
      },
      
     
  
       /*actions: {
        
        }
    }, */
   /*   getters:
      {
         
     },*/
// enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
})

  return Store
}