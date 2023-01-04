<template>
  <!-- Boxes -->
  <section class="p-5">
       <div class="container">
         <div class="row text-center g-4">
 
           <div class="col-md" v-for="post in posts" :key="post.id">
             <div class="card bg-dark text-light">
               <div class="card-body text-center">
                 <div class="h1 mb-3">
                   <i class="bi bi-code"></i>
                 </div>
                 <h3 class="card-title mb-3">{{post.title}}</h3>
                 <p class="card-text">
                     {{post.des}}
                 </p>
                 <a href="#" class="btn btn-primary">Read More</a>
               </div>
             </div>
           </div>
 
         </div>
       </div>
     </section>
 </template>
 
 <script>
 import axios from 'axios'
 export default {
   name: 'app',
   data () {
     return {
       posts: []
     }
   },
   methods: {
   },
   created() {
     axios.get('http://vlapi.saasdiscover.com/api/getCourse')
     .then(response => {
         this.posts = response.data
     })
     .catch(e => {
         console.log(e);
     })
   }
 }
 </script>
 