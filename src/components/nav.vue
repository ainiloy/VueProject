<template>
    <div>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
     <div class="container">
       <a href="#" class="navbar-brand">CODING ZONE</a>

       <button
         class="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navmenu"
       >
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navmenu">
         <div class="navbar-nav ms-auto">
           <router-link to="/" class="nav-link">HOME</router-link>
           <router-link to="/courses" class="nav-link">COURSES</router-link>
           <router-link to="/faq" class="nav-link">FAQ</router-link>
           <router-link to="/instructors" class="nav-link">INSTRUCTORS</router-link>
           <router-link to="/contact" class="nav-link">CONTACT</router-link>
         </div>
       </div>
     </div>
   </nav>


 <router-view/>

   </div>
</template>

<style>

</style>


