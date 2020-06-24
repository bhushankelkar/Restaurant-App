<template>
<div>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div class="back">
   <div  style="background-color:	orange; padding-top: 40px; padding-bottom:10px">
     
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
 <ul class="listOfProducts">
    <li v-for="(storeData, index) in getMainc" :key="index" class="product">
      
      <img :src="storeData.image" height="200px" width="200px" style="width:100%" />
      <h2 class="product-name">{{storeData.fooditem}}</h2>
       <div class="product-price">
        <span>Rs {{storeData.price}}</span>
        <div class="product">
        <q-btn color="green" @click.native="addProductToCart(storeData)" >Add to Cart
          
        </q-btn>
         </div>
      </div>

         </li>
  </ul>
  </div>
   <p align="center"> <q-btn color="green" @click="goBack()"  >Go Back</q-btn></p>
   <div style="background-color:	#DCDCDC; padding-top: 2px; padding-bottom:7px"></div>
  </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import { mapGetters } from "vuex";
export default {
    data()
     {
         return{
             counter:0,
             flag:0
         }
     },
  
   methods:{
      hasProduct(){
        if(this.getCart> 0)
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
      goBack(){
           this.$router.push('/orderpage')
        },
        ...mapActions(["addFoodItem","addFoodInfo"]),
          addProductToCart(item) {
           alert("Item added to Cart!")
            if(this.counter!=0 && this.flag==0)
              this.counter=getCart
              this.flag=1
             this.counter+=1
      this.addFoodItem(this.counter)
      this.addFoodInfo(item)
    }
   },  
   computed: {
    ...mapGetters(["getMainc","getCart"]),
        
  },
 
} 

</script>

<style>

.back{
  background-color:#DCDCDC;
}
.listOfProducts {
  width: 100%;
  max-width: 2000px;
  margin: 20px left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  background-color:#DCDCDC;
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

</style>

