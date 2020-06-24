<template>
     <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
       <ul>
  <li><a class="active" @click="about()">About</a></li>
  <li><a @click="login()">Order Food!</a></li>
  </ul>
   <q-carousel
      style="padding-top:1px"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
      <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"/>
      <q-carousel-slide :name="3" img-src="https://www.malabarjunction.co.uk/sites/malabarjunction.co.uk/slider/slide1.jpg" />
      <q-carousel-slide :name="4" img-src="https://i1.wp.com/files.hungryforever.com/wp-content/uploads/2015/07/18115007/veg-kadai-recipe.jpg?resize=1075%2C605&ssl=1" />
    </q-carousel>
    
    <div style="background-color:	#DCDCDC; padding-top: 23px; padding-bottom:1px">
       <q-card class="my-card">
      <img src="data:image/png;base64,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" style="width:100%;">

      <q-card-section>
        <div class="text-h6">Practice and learn the fun way</div>
        <div class="text-subtitle2">Order Now!!</div>
      </q-card-section>
      
      </q-card>
      
      <p  class="move" ><strong>Codification</strong></p>
      <p class="move1"><strong>Learn to Code the fun Way!</strong></p>
      <div class="mov">
          <q-card class="my-card">
      <img src="https://res.cloudinary.com/gopaisacom/image/upload/promotions/eat.png" style="width:100%;">

      <q-card-section>
        <div class="text-h6"> Interesting Offers for you!</div>
        <div class="text-subtitle2">Avail it!</div>
      </q-card-section>
       <q-card-section>
       
      </q-card-section>
      </q-card>
      </div>
       <div style="background-color:	orange; padding-top: 40px; padding-bottom:10px"></div>
    </div>
    </div>
  </template>
  <script>
   export default {
     data(){
       return{
          slide: 1
       }
     },
     methods:
     {
       login(){
         this.$router.push('/login')
       },
       about(){
         this.$router.push('/about')
       }
       
     }
   }
   </script>
     <style>
     .mov{
        position:absolute;
        top: 485px;
        bottom: 40px;
         left: 1060px;
     }
     .move{
        font-family: 'Clicker Script';
        font-size: 85px;
        position: fixed;
        top: 480px;
        bottom: 40px;
         left: 650px;
       
     }
     .move1{
        font-family: 'Clicker Script';
        font-size: 30px;
        position: fixed;
        top: 590px;
        bottom: 40px;
         left: 720px;
     }
        ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;
  overflow: hidden;
  background-color: black;
}

li {
  float: right;
}

li a {
  font-family: 'Clicker Script';
  font-size: 22px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: green;
}
     
     h1{
       position: relative;
       left: 450px;
       
       font-family: 'Sofia';
       font-size: 50px;
     }
     </style>
     <style lang="stylus" scoped>
.my-card
  width 100%
  max-width 450px
  
</style>
       
      
    
  
    