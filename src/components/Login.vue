<template>
<div>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
    <q-page class="flex flex-center">
    <img class="img" src="https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=871&q=80" width="1500" height="656">
  </q-page>
<div class="fixed-center" style="max-width: 400px; margin-right: 400pax" >
    <div color="#0000FF">
   
     <h4 class="a">Login</h4></div>
    <q-form
      @submit="submitLogin"
      
      class="q-gutter-md"
    >
    
      <q-input
        filled
        bg-color="white"
        color="green"
        v-model="name"
        label="Enter Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input 
      filled 
      bg-color="white"
      color="green"
      v-model="pword" 
      label="Enter Password" 
      type="password" 
      float-label="Password" 
      :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <div>
        <q-btn label="Submit" type="submit" color="green"/>
    </div>
    </q-form>
     
   </div>
 </div>

   </template>

<script>

//import {mapGetters}from 'vuex'
export default {
  data()
    {
     return{
       name:'',
       pword:'',
       storeData: [],
       
      }
    },
  
  methods: { 
   
   submitLogin () {
     for(var i=0;i<this.$store.getters.getUser.length;i++)
        {
            if(this.$store.getters.getUser[i].UserName==this.name)
             {
              this.storeData[0]=this.$store.getters.getUser[i].UserName 
              this.storeData[1]=this.$store.getters.getUser[i].pword
              }
        } 
          
     if(this.storeData[0]==this.name && this.storeData[1]==this.pword )
      {
          this.$router.push('/orderpage')
      }
         else
             {
                this.$router.push('/*')
            }
     }
   }
} 
</script>
<style>
.a{
   font-family: 'Clicker Script';
  font-size: 70px;
}
h4{
    font-family: 'Sofia';
       font-size: 50px;

}
.img{
  opacity: 0.8
}
</style>

