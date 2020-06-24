<template>
   <div>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <div class="back">
         
     <div style="background-color:	orange; padding-top: 40px; padding-bottom:10px">
        <div class="fixed-right">
          <q-btn @click="logOut()" color="green">LogOut</q-btn>  
          </div>
          <div class="fixed-left">
           <div v-if="hasProduct()">
        <q-btn @click="routeMe()" color="green" icon="shopping_cart">Cart {{getCart}}</q-btn>
           </div>
           <div v-else> 
             <q-btn @click="routeMe()" color="green" icon="shopping_cart">Cart 0</q-btn>
           
            </div>
       
           </div> 
           
            </div>
     <div class="q-pa-md">
     <ul class="listOfProducts1">
    <li class="product col items-start q-gutter-xl">
      <img src="http://www.bombaytasty.com/wp-content/uploads/2014/11/Paneer-Tandoori.jpg" width="180px" height="200px" />
      <h6>Starters</h6>
        <q-btn color="green" @click="buyNow('starters')"  >Buy now</q-btn>
     </li>
     <li>
       <li class="product col items-start q-gutter-xl">
      <img src="https://www.thestar.com.my/~/media/online/2014/10/30/21/15/metd_sbnthali_sheila_2.ashx/?w=620&h=413&crop=1&hash=CA48754B3F88B39844EA97A77214B8D863997406" width="180x" height="200px" />
     <h6>Main Course</h6>
       <q-btn color="green" @click="buyNow('maincourse')" >Buy now</q-btn>
     </li>
  </ul>
  </div>
     
   </div>
   
    <div style="background-color:	#DCDCDC; padding-top: 2px; padding-bottom:80px">
    <div>
    <p align="center"> <q-btn  color="green" @click="routeMe()" >CheckOut</q-btn></p>

    </div>
  </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){return{
     
    }
    },
    methods:{
      hasProduct(){
      if(this.getCart > 0)
      return true
       else 
       return false 
     },
        logOut(){
            this.$router.push('/')
        },
        routeMe(){
           this.$router.push('/checkout')
        },
        buyNow(temp)
        {
            if(temp=='maincourse')
             this.$router.push('/maincourse')
            if(temp=='starters')
             this.$router.push('/starters') 
               
        }},
        computed:{
          ...mapGetters(["getCart"])
        }
        
        }
    
    

</script>

<style scoped>
.listOfProducts1 {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
.listOfProducts2 {
  width: 100%;
  max-width: 1000px;
  margin: 50 right;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}

.back{
  background-color: 	#DCDCDC;
  }
  ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;
  overflow: hidden;
  background-color: #DCDCDC;
}

li {
  float: right;
}

li p {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


     
     h1{
       position: relative;
       left: 450px;
       
       font-family: 'Sofia';
       font-size: 50px;
     }
     </style>
       
</style>
