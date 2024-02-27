<template>
   <!-- <div id="nav">
         <router-link :to="{ name: 'Home' }" class="btn btn-info">Home</router-link>
         <router-link :to="{ name: 'About' }" class="btn btn-info">About</router-link>
   </div> -->



      <!--==================== HEADER ====================-->
      <header class="header" id="header">
      <section class="before-nav container d-flex" >

         <li class="nav__item_lang">
            <label for="">Select language</label>
            <select class="nav__select nav__item_lang" id="languageSelector">
               <option value="http://lumina.sulaslansetiawan.cfd/" class="nav__link" data-href="http://lumina.sulaslansetiawan.cfd/">English</option>
               <option value="http://luminajp.sulaslansetiawan.cfd/" class="nav__link" data-href="http://luminajp.sulaslansetiawan.cfd/" selected>Japanese</option>
               <option value="#" class="nav__link" data-href="#">Indonesian</option>
            </select>
         </li>

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <li class="nav__item_lang" >
            <span>English</span>
         </li>


      </section>
      <nav class="nav container">
         <a href="#" class="nav__logo">
            Lumina
         </a>

         <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
               <li class="nav__item">
                  <a href="#home" class="nav__link active-link">Home</a>
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

               <li class="nav__item">
                  <a href="product_more.html" class="nav__link">Product Search</a>
               </li>

               <li class="nav__item">
                  <a href="product_more.html" class="nav__link">Cart 0</a>
               </li>


            </ul>

            <!-- Close button -->
            <div class="nav__close" id="nav-close">
               <i class="ri-close-line"></i>
            </div>
         </div>




      <!--
         <li class="nav__item before_login" hidden>
            <div class="profile">
                  <div class="user">
                     <h3 id="dropdown-profile-name"> <span id="dropdown-profile-name"></span> </h3>
                     <p class="" ></p>
                  </div>
                  <div class="img-box">
                     <img src="@/assets/img/anonymous.png" alt="some user image">
                  </div>
            </div>
            <div class="menu">
                  <ul>
                     <li><a href="#"><i class="ph-bold ph-user"></i>&nbsp;Login</a></li>
                     <li><a href="#"><i class="ph-bold ph-gear-six"></i>&nbsp;Register</a></li>
                  </ul>
            </div>
         </li>
          -->


         <div class="nav__buttons ">
            <!-- Theme change button -->
            <i class="ri-moon-line change-theme" id="theme-button"></i>

            <!-- Toggle button -->
            <div class="nav__toggle" id="nav-toggle">
               <i class="ri-menu-line"></i>
            </div>

            <li class="nav__item after_login nav__link" id="nav-profile" >
               <div class="profile">
                     <div class="user">
                        <h3 id="dropdown-profile-name"> <span id="dropdown-profile-name"></span> </h3>
                     </div>
                     <div class="img-box show-menu ">
                        <img src="@/assets/img/anonymous.png" alt="user image">
                     </div>
               </div>
               <div class="menu">
                     <ul>
                        <li><a href="auth-page/index.html"><i class="ph-bold ph-user"></i>&nbsp;Login</a></li>
                        <li><a href="auth-page/register.html"><i class="ph-bold ph-user"></i>&nbsp;Register</a></li>
                     </ul>
               </div>
            </li>
         </div>
         
      
      


      </nav>
   </header>

   <!--==================== MAIN ====================-->
   <main class="main">
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
               <h3 class="home__info-title" id="premiumProductCount">
                  0<span>+</span>
               </h3>
               <span class="home__info-subtitle">
                  Premium <br> Product
               </span>
               </div>

               <div>
                  <h3 class="home__info-title" id="happyCustomerCount">
                     0<span>+</span>
                  </h3>
                  <span class="home__info-subtitle">
                     Happy <br> Customer
                  </span>
               </div>

               <div>
                  <h3 class="home__info-title" id="awardWinningCount">
                     0<span>+</span>
                  </h3>
                  <span class="home__info-subtitle">
                     Awards <br> Winning
                  </span>
               </div>
               </div>
            </div>

            <div class="home__image">
               <div class="home__blob"  >
                  <img  src="@/assets/img/home-lamp.png" alt="home image" class="home__img">
                  <h1 class="home__blob-title">
                     
                  </h1>
               </div>

               <div class="home__shadow"></div>
            </div>
         </div>
      </section>

      <!--==================== POPULAR ====================-->
      <section class="popular section" id="popular">
         <div class="popular__container container">
            <div class="popular__data" id="zoom-out" >
               <h2 class="section__title">Popular Product</h2>

               <p class="popular__description split">
                  Find our best products faster and get the
                  quality lights we have for you.
               </p>
            </div>

            <div class="popular__content grid swiper">
               <div class="swiper-wrapper">
                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img src="@/assets/img/modern-lamp.png" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Modern Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h4 class="popular__price">
                        <a class="price_">$ 2.140</a> 
                        <p class="price_before"><span class="price_sign">$</span> 900</p>
                        <p class="popular__icons">
                           <i class="ri-bookmark-line"></i>
                           <i class="ri-heart-line"></i>
                           <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                           <i class="ri-message-2-line"></i>
                        </p>
                        <p class="popular__starts">
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-half-line"></i>
                        </p>
                     </h4>

                     <button class="popular__button">
                        <i class="ri-shopping-cart-2-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img src="@/assets/img/industrial-lamp.png" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Industrial Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h4 class="popular__price">
                        <a class="price_">$ 2</a> 
                        <p><span class="price_sign">$</span> 900</p>
                        <p class="popular__icons">
                           <i class="ri-bookmark-line"></i>
                           <i class="ri-heart-line"></i>
                           <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                           <i class="ri-message-2-line"></i>
                        </p>
                        <p class="popular__starts">
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-half-line"></i>
                        </p>
                     </h4>

                     <button class="popular__button">
                        <i class="ri-shopping-cart-2-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img src="@/assets/img/superbolw-lamp.png" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Superbolw Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h4 class="popular__price">
                        <a class="price_">$ 1.080</a> 
                        <p><span class="price_sign">$</span> 900</p>
                        <p class="popular__icons">
                           <i class="ri-bookmark-line"></i>
                           <i class="ri-heart-line"></i>
                           <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                           <i class="ri-message-2-line"></i>
                        </p>
                        <p class="popular__starts">
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-half-line"></i>
                        </p>
                     </h4>

                     <button class="popular__button">
                        <i class="ri-shopping-cart-2-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img src="@/assets/img/ultrawide-lamp.png" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Ultrawide Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h4 class="popular__price">
                        <a class="price_">$ 160</a> 
                        <p><span class="price_sign">$</span> 900</p>

                        <p class="popular__icons">
                           <i class="ri-bookmark-line"></i>
                           <i class="ri-heart-line"></i>
                           <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                           <i class="ri-message-2-line"></i>
                        </p>
                        <p class="popular__starts">
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-half-line"></i>
                        </p>
                     </h4>

                     <button class="popular__button">
                        <i class="ri-shopping-cart-2-line"></i>
                     </button>
                  </article>

                  <article class="popular__card swiper-slide">
                     <div class="popular__blob">
                        <img src="@/assets/img/roundness-light.png" alt="popular image" class="popular__img">
                     </div>

                     <h3 class="popular__name">Roundness Light</h3>
                     <span class="popular__subtitle">Hanging Light</span>
                     <h4 class="popular__price">
                        <a class="price_">$ 170</a> 
                        <p><span class="price_sign">$</span> 900</p>
                        <p class="popular__icons">
                           <i class="ri-bookmark-line"></i>
                           <i class="ri-heart-line"></i>
                           <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                           <i class="ri-message-2-line"></i>
                        </p>
                        <p class="popular__starts">
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-fill"></i>
                           <i class="ri-star-half-line"></i>
                        </p>

                     </h4>

                     <button class="popular__button">
                        <i class="ri-shopping-cart-2-line"></i>
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

      <!--==================== CHOOSE ====================-->
      <section class="choose section" id="choose">
         <div class="choose__container container grid">
            <div class="choose__image">
               <div class="choose__blob">
                  <img src="@/assets/img/choose-lamp.png" alt="choose image" class="choose__img">
                  <h1 class="choose__blob-title"></h1>
               </div>

               <div class="choose__shadow"></div>
            </div>

            <div class="choose__content">
               <div class="choose__data">
                  <h2 class="section__title">Why Choose Us</h2>

                  <p class="choose__description">
                     Our products have won numerous awards
                     and we can guarantee the unlimited
                     quality of our products.
                  </p>
               </div>

               <div class="choose__faq">
                  <div class="choose__faq-item">
                     <div class="choose__faq-header">
                        <div class="choose__faq-icon">
                           <i class="ri-add-line"></i>
                        </div>
                        <h3 class="choose__faq-title">Frequently New Design</h3>
                     </div>

                     <div class="choose__faq-content">
                        <p class="choose__faq-description">
                           We make new designs every year,
                           fashion designs, trending and of
                           the best quality.
                        </p>
                     </div>
                  </div>

                  <div class="choose__faq-item">
                     <div class="choose__faq-header">
                        <div class="choose__faq-icon">
                           <i class="ri-add-line"></i>
                        </div>
                        <h3 class="choose__faq-title">Original Production</h3>
                     </div>

                     <div class="choose__faq-content">
                        <p class="choose__faq-description">
                           We are the industrial chain of
                           quality lighting products and offer
                           the most advantageous price.
                        </p>
                     </div>
                  </div>

                  <div class="choose__faq-item">
                     <div class="choose__faq-header">
                        <div class="choose__faq-icon">
                           <i class="ri-add-line"></i>
                        </div>
                        <h3 class="choose__faq-title">Production With Large Stock</h3>
                     </div>

                     <div class="choose__faq-content">
                        <p class="choose__faq-description">
                           You will not be left without the lamp
                           you chose, we have a large stock
                           possible in all models.
                        </p>
                     </div>
                  </div>

                  <div class="choose__faq-item">
                     <div class="choose__faq-header">
                        <div class="choose__faq-icon">
                           <i class="ri-add-line"></i>
                        </div>
                        <h3 class="choose__faq-title">Professional Quality Control</h3>
                     </div>

                     <div class="choose__faq-content">
                        <p class="choose__faq-description">
                           Our quality control does everything
                           possible to send you the best
                           possible product for your home.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!--==================== FEATURES ====================-->
      <section class="features section">
         <div class="features__container container grid">
            <div class="features__image">
               <div class="features__blob">
                  <img src="@/assets/img/features-lamp.png" alt="features image" class="features__img">
                  <h1 class="features__blob-title"></h1>
               </div>

               <div class="features__shadow"></div>
            </div>

            <div class="features__content">
               <div class="features__data">
                  <h2 class="section__title">Latest Features</h2>

                  <p class="features__description">
                     We always provide the latest and best
                     features for your customer, don't worry, we
                     provide the latest technology for you.
                  </p>
               </div>

               <div class="features__info">
                  <div class="features__info-card">
                     <h3 class="features__info-title">
                        Voltage <br> Settings
                     </h3>
                  </div>

                  <div class="features__info-card">
                     <h3 class="features__info-title">
                        Application <br> Control
                     </h3>
                  </div>

                  <div class="features__info-card">
                     <h3 class="features__info-title">
                        Voice <br> Control
                     </h3>
                  </div>

                  <div class="features__info-card">
                     <h3 class="features__info-title">
                        Schedule <br> Settings
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!--==================== PRODUCTS ====================-->
      <section class="products section" id="products">
         <div class="products__container container grid">
            <div class="products__data">
               <h2 class="section__title">Our Product</h2>

               <p class="products__description">
                  Discover all our unique products that
                  are suitable for your home.
               </p>
            </div>

            <div class="products__content grid">
               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/modern-lamp.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Modern Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 140</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/industrial-lamp.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Industrial Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 200</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/superbolw-lamp.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Superbolw Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 180</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/ultrawide-lamp.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Ultrawide Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 160</a> 
                     <p><span class="price_sign">$</span> 900</p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/roundness-light.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Roundness Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 170</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                        <i class="ri-eye-line"></i>
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/stickness-light.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Stickness Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 280</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/superjet-light.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Superjet Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 150</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                           <a href="product_detail.html" ><i class="ri-eye-line"></i></a> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>

               <article class="products__card">
                  <div class="products__blob">
                     <img src="@/assets/img/nakedness-lamp.png" alt="products image" class="products__img">
                  </div>

                  <h3 class="products__name">Nakedness Light</h3>
                  <span class="products__subtitle">Hanging Light</span>
                  <h3 class="products__price">
                     <a class="price_">$ 100</a> 
                     <p><span class="price_sign">$</span> 900</p>
                     <p class="products__icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-line"></i>
                        <i class="ri-share-line"></i>
                        <button type=""><i class="ri-eye-line"></i></button> 
                        <i class="ri-message-2-line"></i>
                     </p>
                     <p class="products__starts">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                     </p>
                  </h3>

                  <button class="products__button">
                        <i class="ri-shopping-cart-2-line"></i>
                  </button>
               </article>
            </div>
         </div>
      </section>

      <!--==================== JOIN ====================-->
      <section class="join section">
         <div class="join__container container grid">
            <div class="join__bg grid">
               <div class="join__image">
                  <div class="join__blob">
                     <img src="@/assets/img/join-lamp.png" alt="join image" class="join__img">
                     <h1 class="join__blob-title">LIGHT</h1>
                  </div>

                  <div class="join__shadow"></div>
               </div>

               <div class="join__content grid">
                  <div class="join__data">
                     <h2 class="section__title">Get Started</h2>

                     <p class="join__description">
                        Do not miss it, join us and get <br>
                        interesting discounts with us.
                     </p>
                  </div>

                  <form action="" class="join__form">
                     <input type="email" placeholder="Enter your email" class="join__input">

                     <button class="button join__button">
                        Join Now
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   </main>

   <!--==================== FOOTER ====================-->
   <footer class="footer">
      <div class="footer__container container grid">
         <div class="footer__content grid">
            <div>
               <a href="#" class="footer__logo">
                  Lumina
               </a>

               <div class="footer__description">
                  We have a vision to make <br>
                  lighting evenly distributed to all <br>
                  parts of the earth.
               </div>
            </div>

            <div class="footer__data grid">
               <div>
                  <h3 class="footer__title">About</h3>

                  <ul class="footer__links">
                     <li>
                        <a href="#" class="footer__link">About Us</a>
                     </li>

                     <li>
                        <a href="#" class="footer__link">Features</a>
                     </li>

                     <li>
                        <a href="#" class="footer__link">News & Blog</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 class="footer__title">Movement</h3>

                  <ul class="footer__links">
                     <li>
                        <a href="#" class="footer__link">What Lumina</a>
                     </li>

                     <li>
                        <a href="#" class="footer__link">Support Us</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 class="footer__title">Company</h3>

                  <ul class="footer__links">
                     <li>
                        <a href="#" class="footer__link">Why Lumina</a>
                     </li>

                     <li>
                        <a href="#" class="footer__link">Capital</a>
                     </li>

                     <li>
                        <a href="#" class="footer__link">Security</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 class="footer__title">Follow Us</h3>

                  <div class="footer__social">
                     <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                        <i class="ri-facebook-circle-line"></i>
                     </a>

                     <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                        <i class="ri-instagram-line"></i>
                     </a>

                     <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                        <i class="ri-twitter-line"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div class="footer__group">
            <div class="footer__terms">
               <a href="#">Terms & Agreements</a>
               <a href="#">Privacy Policy</a>
            </div>

            <span class="footer__copy">
               &#169; Copyright Lumina. All rights reserved
            </span>
         </div>
      </div>
   </footer>

   <!--========== SCROLL UP ==========-->
   <a href="#" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-line"></i>
   </a>

</template>
