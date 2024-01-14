<script>
import homeLamp from '@/assets/frontend/assets/img/home-lamp.png';
import modernLamp from '@/assets/frontend/assets/img/modern-lamp.png';
import industrialLamp from '@/assets/frontend/assets/img/industrial-lamp.png';
import superbowlLamp from '@/assets/frontend/assets/img/Superbowl-lamp.png';
import ultrawideLamp from '@/assets/frontend/assets/img/Ultrawide-lamp.png';
import roundnessLightLamp from '@/assets/frontend/assets/img/Roundness-light.png';

export default {
  data() {
    return {
      imageHomeLamp: homeLamp,
      imageModernLamp: modernLamp,
      imageIndustrialLamp: industrialLamp,
      imageSuperbowlLamp: superbowlLamp,
      imageUltrawideLamp: ultrawideLamp,
      imageRoundnessLightLamp: roundnessLightLamp,
    };
  },
};
</script>

<template>

      <!--==================== HOME ====================-->
      <section class="home section" id="home">
         <div class="home__bg"></div>

         <div class="home__container container grid">
            <div class="home__content grid">
               <div class="home__data">
                  <h3 class="home__subtitle">
                     The best light bulbs
                  </h3>

                  <h1 class="home__title">
                     Unique Light <br>
                     For You Home
                  </h1>

                  <div class="home__buttons">
                     <a href="#" class="button">
                        Discover Now
                     </a>

                     <a href="#" class="button__link">
                        <i class="ri-play-circle-line"></i> Watch Video
                     </a>
                  </div>
               </div>

               <div class="home__info">
                  <div>
                     <h3 class="home__info-title">
                        9K<span>+</span>
                     </h3>
                     <span class="home__info-subtitle">
                        Premium <br> Product
                     </span>
                  </div>

                  <div>
                     <h3 class="home__info-title">
                        2K<span>+</span>
                     </h3>
                     <span class="home__info-subtitle">
                        Happy <br> Customer
                     </span>
                  </div>

                  <div>
                     <h3 class="home__info-title">
                        28<span>+</span>
                     </h3>
                     <span class="home__info-subtitle">
                        Awards <br> Winning
                     </span>
                  </div>
               </div>
            </div>

            <div class="home__image">
               <div class="home__blob">
                  <img :src="imageHomeLamp" alt="home image" class="home__img" >
                  <h1 class="home__blob-title">
                     LIGHT
                  </h1>
               </div>

               <div class="home__shadow"></div>
            </div>
         </div>
      </section>

      <!--==================== POPULAR ====================-->
      <section class="popular section" id="popular">
         <div class="popular__container container">
            <div class="popular__data">
               <h2 class="section__title">Popular Product</h2>

               <p class="popular__description">
                  Find our best products faster and get the
                  quality lights we have for you.
               </p>
            </div>

            <div class="popular__content grid swiper">
               <div class="swiper-wrapper">
                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img :src="imageModernLamp" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Modern Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h3 class="popular__price">
                        <span>Rp </span>1.800.000
                     </h3>

                     <button class="popular__button">
                        <i class="ri-add-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img :src="imageIndustrialLamp" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Industrial Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h3 class="popular__price">
                        <span>Rp </span>20
                     </h3>

                     <button class="popular__button">
                        <i class="ri-add-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img :src="imageSuperbowlLamp" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Superbolw Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h3 class="popular__price">
                        <span>Rp </span>1.800.000
                     </h3>

                     <button class="popular__button">
                        <i class="ri-add-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img :src="imageUltrawideLamp" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Ultrawide Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h3 class="popular__price">
                        <span>Rp </span>1.800.000
                     </h3>

                     <button class="popular__button">
                        <i class="ri-add-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img :src="imageRoundnessLight" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Roundness Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h3 class="popular__price">
                        <span>Rp </span>1.800.000
                     </h3>

                     <button class="popular__button">
                        <i class="ri-add-line"></i>
                     </button>
                  </article>
               </div>

               <!-- Navigation buttons -->
               <div class="swiper-button-prev">
                  <i class="ri-arrow-left-s-line"></i>
               </div>

               <div class="swiper-button-next">
                  <i class="ri-arrow-right-s-line"></i>
               </div>
            </div>
         </div>
      </section>

      

</template>
