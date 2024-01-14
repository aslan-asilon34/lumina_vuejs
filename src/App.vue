<script >
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      // Use the imported image path
    };
  },
};

</script>

<template>

     <!-- ==================== HEADER ==================== -->
     <header class="header" id="header">
      <nav class="nav container">
         <a href="#" class="nav__logo">
            <span>Lumina</span>
         </a>

         <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
               <li class="nav__item">
                  <RouterLink to="/">Home</RouterLink>
               </li>

               <li class="nav__item">
                  <a href="#popular" class="nav__link">Popular</a>
               </li>

               <li class="nav__item">
                  <a href="#choose" class="nav__link">Choose</a>
               </li>

               <li class="nav__item">
                  <a href="#products" class="nav__link">Products</a>
               </li>
            </ul>

            <!-- Close button -->
            <div class="nav__close" id="nav-close">
               <i class="ri-close-line"></i>
            </div>
         </div>

         <div class="nav__buttons">
            <!-- Theme change button -->
            <i class="ri-moon-line change-theme" id="theme-button"></i>

            <!-- Toggle button -->
            <div class="nav__toggle" id="nav-toggle">
               <i class="ri-menu-line"></i>
            </div>
         </div>
      </nav>
   </header>

    <!--==================== MAIN ====================-->
    <main class="main">
      <RouterView />
    </main>


</template>


<style scoped>
/* @import '@/assets/frontend/assets/img/favicon.png'; */
@import '@/assets/frontend/assets/css/swiper-bundle.min.css';
@import '@/assets/frontend/assets/css/styles.css';
   /* <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"> */

</style>

