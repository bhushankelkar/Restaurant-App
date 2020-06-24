<template>
    
        <div class="back">
         
     <div style="background-color:	orange; padding-top: 40px; padding-bottom:10px">
         <div class="fixed-right">
          <q-btn @click="Home()" color="green">Home</q-btn>  
          </div>
     </div>
    <q-page class="flex flex-center">
    <div class="q-ma-md" style="max-width: 400px">
       <h5>Enter your details</h5>
    <q-form
    
      class="q-gutter-md"
    >
      <q-input
        filled
        color="green"
        v-model="UserName"
        label="USERNAME "
        lazy-rules
        :rules="[ val => val && val.length > 0 ]"
        />
        <q-input 
      filled 
       color="green"
      v-model="pword" 
      label="PASSWORD" 
      type="password" 
      lazy-rules 
      :rules="[ val => val && val.length > 0 ]"/>
      
      <q-input
        filled
         color="green"
        v-model="FullName"
        label="FULL NAME"
        lazy-rules
       :rules="[ val => val && val.length > 0]"
      />
      <q-input
        filled
         color="green"
        v-model="EmailId"
        label="EMAIL ID"
        lazy-rules
       :rules="[ val => val && val.length > 0]"
      />
      <q-input
        filled
         color="green"
        v-model="PNo"
        type=number
        label="PHONE NUMBER"
        lazy-rules
       :rules="[ val => val && val.length > 0]"
      />
     <div>
        <q-btn label="Create User" type="submit" color="green" @click="submitUser"/>
       </div>
     </q-form>

   </div>
  
   </q-page>
   <div style="background-color:	#DCDCDC; padding-top: 1px; padding-bottom:2px">
  </div>
   </div>
</template>

<script>
import {mapActions} from "Vuex";
export default {
    data(){
         return{
             UserName:"",
        FullName:'',
        EmailId:'',
        PNo:'',
        pword:''
         }
     },
     methods:{
         Home(){
           this.$router.push('/')  
         },
         submitUser(){
             var sendThis={
                  UserName: this.UserName,
                 FullName: this.FullName,
                 EmailId : this.EmailId,
                 PNo : this.PNo,
                 pword:this.pword
             }
              this.$store.commit('updateList',sendThis)
              alert("User Added!")
          this.$router.push('/orderpage')

          },
            
         }
     }

</script>

<style>
.back{
  background-color: 	#DCDCDC;
  }
</style>