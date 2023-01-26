<template>
  <div>
    <div class="product-detail-main">
      <div
        class="product-images product-images-js"
        id="renderedImages"
        data-testid="pdp.images"
      >
        <ul class="columns-2">
          <li>
            <div class="image-btn" role="button" tabindex="0">
              <img
               :src="product.image" :alt="product.name"
              />
            </div>
          </li>
          <li>
          
          </li>
        </ul>
       
      </div>
      <div class="product-actions" style="position: static; top: 60px">
        <nav class="nav-product" data-testid="pdp.navigation">
          <div class="nav-product-container">
            <a
              class="nav-product-link nav-product-next"
              href="/tr/erkek/palto-palto/geri-donusturulmus-yun-palto_37034755.html"
              id="next"
              >Sonraki</a
            >
          </div>
        </nav>
        <div class="YvYaQ"></div>
        <div class="product-features-prices" data-testid="pdp.prices">
          <div class="product-features">
            <h1 itemprop="name" class="product-name">
              {{product.name}}
            </h1>
            <span itemprop="mpn" class="product-reference"
              >REF. 37030035-JOSENO-LH
            </span>
          </div>
          <div class="Z4f5t AbtpD">
            <div data-testid="prices.wrapper" class="o5MyB PL11u RLXRU c1VHT">
              <span
                class="Bc91B OHp63"
                aria-hidden="true"
                data-testid="crossedOutPrice"
                ><span class="S5XGZ MZfYt"
                  ><span class="S5XGZ text-title-xl">{{product.originalPrice}}</span></span
                ></span
              ><span class="Bc91B" aria-hidden="true" data-testid="currentPrice"
                ><span class="S5XGZ MZfYt"
                  ><span class="S5XGZ text-title-xl dDsAd"
                    >{{product.price}}</span
                  ></span
                ></span
              >
            </div>
            <span class="text-uppercase-s">(-% 51)</span>
          </div>
        </div>
        <div class="product-colors">
          <div
            class="colors-container"
            id="colorsContainer"
            data-testid="pdp.colors"
          >
            <div
              aria-label="Siyah seçilen "
              class="color-container color-container--selected"
              id="99"
              role="button"
              tabindex="0"
            >
              <img
                alt="Siyah seçilen "
                class="color-image"
                src="https://st.mngbcn.com/rcs/pics/static/T3/colv3/37030035_99_C.png?ts=1649231262821&amp;imwidth=24&amp;imdensity=2"
              />
            </div>
            <div
              aria-label="Konyak Rengi"
              class="color-container"
              id="CG"
              role="button"
              tabindex="0"
            >
              <img
                alt="Konyak Rengi"
                class="color-image"
                src="https://st.mngbcn.com/rcs/pics/static/T3/colv3/37030035_CG_C.png?ts=1649231262821&amp;imwidth=24&amp;imdensity=2"
              />
            </div>
          </div>
          <div class="colors-info">
            <span itemprop="color" class="colors-info-name">{{product.color}}</span>
          </div>
        </div>
        <div class="product-form" id="productForm" data-testid="pdp.form">
          <form>
            <div class="sizes-more-info">
              <p class="sg-text-body-small size-guide-message">
                <button
                  data-testid="pdp.sizeGuideButton"
                  type="button"
                  class="text-body-m-regular-underline size-guide-button"
                >
                  Beden rehberi
                </button>
              </p>
            </div>
            <div
              class="size-selector-container"
              id="sizesContainer"
              data-testid="pdp.form.sizeSelector"
            >
              <div class="yCcBS">
                <ul class="tGykN knfzQ" aria-label="Beden seçin">
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span
                        id="size-19"
                        class="text-title-m gk2V5"
                        data-available="true"
                        >XS</span
                      >
                    </button>
                  </li>
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span
                        id="size-20"
                        class="text-title-m gk2V5"
                        data-available="true"
                        >S</span
                      >
                    </button>
                  </li>
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span id="size-21" class="text-title-m gk2V5">M</span
                      ><span class="text-title-m ENYWg undefined"
                        >mevcut değil İstiyorum!</span
                      ><i class="icon-outline-email icon-size-email"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span id="size-22" class="text-title-m gk2V5">L</span
                      ><span class="text-title-m ENYWg undefined"
                        >mevcut değil İstiyorum!</span
                      ><i class="icon-outline-email icon-size-email"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span id="size-23" class="text-title-m gk2V5">XL</span
                      ><span class="text-title-m ENYWg undefined"
                        >mevcut değil İstiyorum!</span
                      ><i class="icon-outline-email icon-size-email"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="PL1La X4g20">
                      <span
                        id="size-24"
                        class="text-title-m gk2V5"
                        data-available="true"
                        >XXL</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="add-cart-container" id="addCartContainer">
              <button
                class="text-body-m-regular liDtv"
                data-testid="pdp.form.addToCart"
                id="productFormAdd"
                type="button"
                micro="fukku"
                module="mng-button"
              >
                <span class="fX99Y">Sepete ekle</span>
              </button>
              <div class="pTI8S">
                <button
                  class="
                    text-body-m-regular
                    liDtv
                    o4A5i
                    undefined
                    ZvD4f
                    undefined
                  "
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="product-freeShipping-first">
          <span class="icon-fill-done product-freeShipping-first-icon"></span
          ><button
            class="product-freeShipping-first-text sg-text-subtitle-small"
            type="button"
            data-testid="pdp.freeShipping.toggle"
          >
            Mağazaya ücretsiz gönderim
          </button>
        </div>
        <button
          class="product-freeShipping-second-text sg-text-caption-light"
          type="button"
        >
          Gönderiler ve iadeler hakkında bilgi
        </button>
        <div class="product-options-without-shipping">
          <div class="options">
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>*Brand/Icon/Small/Maps/Location/Outline</title>
              <defs>
                <path
                  id="location"
                  d="M12,2 C9.3554688,2 6.8754883,3.5419922 5.6821289,5.9287109 C4.387207,8.5175781 4.9575195,11.8544921 7.1933594, 14.8378906 C7.2646485,14.9433594 11.5839844,21.4228515 11.5839844,21.4228515 L12,22.046875 L12.4160156, 21.4228516 C12.4160156,21.4228516 16.7353515,14.9433594 16.7929687,14.8564454 C19.0424804,11.8544923 19.6127929, 8.5175782 18.317871,5.928711 C17.1245117,3.5419922 14.6445312,2 12,2 Z M15.9985352,14.25 C15.9829102, 14.2695312 15.9804688,14.2724609 12,20.2441406 C8.0195312,14.2724609 8.0170898,14.2695312 8.0068359, 14.2568359 C5.9897461,11.5644531 5.4545898,8.618164 6.5766601,6.3759765 C7.6020508,4.3251953 9.730957,3 12, 3 C14.269043,3 16.3979492,4.3251953 17.4233398,6.3759766 C18.5454102,8.6181641 18.0102539,11.5644531 15.9985352, 14.25 Z M12,5 C9.7944336,5 8,6.7939453 8,9 C8,11.2060547 9.7944336,13 12,13 C14.2055664,13 16,11.2060547 16, 9 C16,6.7939453 14.2055664,5 12,5 Z M12,12 C10.3457031,12 9,10.6542969 9,9 C9,7.3457031 10.3457031,6 12, 6 C13.6542969,6 15,7.3457031 15,9 C15,10.6542969 13.6542969,12 12,12 Z"
                ></path>
              </defs>
              <g
                id="*Brand/Icon/Small/Maps/Location/Outline"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <mask id="mask-2" fill="white">
                  <use xlink:href="#location"></use>
                </mask>
                <use
                  id="location_L"
                  fill="#121314"
                  xlink:href="#location"
                ></use>
              </g></svg
            ><button
              class="options-button"
              id="garmentFinderOption"
              type="button"
              data-testid="pdp.garmentFinder"
            >
              Mağazada ara
            </button>
          </div>
          <div class="options">
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>*Brand/Icon/Small/Product/Outline</title>
              <defs>
                <path
                  id="product"
                  d="M9,3 L3,5.1494141 L3,11 L7,11 L7,21 L17,21 L17,11 L21,11 L21,5.1494141 L15.1708984,3.0302735 L9, 3 Z M14.9121094,4 L14.9481201,4.0131226 C14.703064,5.4226685 13.4785767,6.5 12,6.5 C10.5214233,6.5 9.296936, 5.4226685 9.0518799,4.0131226 L9.0878906,4 L14.9121094,4 Z M20,10 L16,10 L16,20 L8,20 L8,10 L4,10 L4, 5.8505859 L8.0984497,4.3598632 C8.4936523,6.152832 10.09021,7.5 12,7.5 C13.90979,7.5 15.5063477, 6.152832 15.9015503,4.3598632 L20,5.8505859 L20,10 Z"
                ></path>
              </defs>
              <g
                id="*Brand/Icon/Small/Product/Outline"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <mask id="mask-2" fill="white">
                  <use xlink:href="#product"></use>
                </mask>
                <use id="product_L" fill="#121314" xlink:href="#product"></use>
              </g></svg
            ><button
              class="options-button"
              id="productDetailOption"
              type="button"
              data-testid="pdp.productDetail"
            >
              Ürün detayları
            </button>
          </div>
          <div
            class="options-social-trigger options"
            id="optionsSocialTrigger"
            role="button"
            tabindex="-1"
          >
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>*Brand/Icon/Small/Action/Share</title>
              <defs>
                <path
                  id="share"
                  d="M4.88705051,19.0798586 L10.2093535,19.0798586 L10.2093535,19.9669091 L4,19.9669091 L4,4 L10.2093535, 4 L10.2093535,4.88705051 L4.88705051,4.88705051 L4.88705051,19.0798586 Z M13.0004441,6.53121246 L18.009161, 11.5399293 L7.54820203,11.5399293 L7.54820203,12.4269798 L18.009161,12.4269798 L13.0004441, 17.4356967 L13.6276165,18.062869 L19.707031,11.9834546 L13.6276165,5.90404007 L13.0004441,6.53121246 Z"
                ></path>
              </defs>
              <g
                id="*Brand/Icon/Small/Action/Share"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <mask id="mask-2" fill="white">
                  <use xlink:href="#share"></use>
                </mask>
                <use id="share_L" fill="#121314" xlink:href="#share"></use>
              </g></svg
            ><span class="options-button" role="button" tabindex="0"
              >Paylaş</span
            >
          </div>
        </div>
      </div>
      <div class="handling-modal">
        <div class="handling-veil" role="button" tabindex="-1"></div>
        <div class="handling-modal-wrapper">
          <div class="handling-modal-content">
            <div class="shipping-table">
              <h5>KARGO</h5>
              <table>
                <tbody>
                  <tr>
                    <td style="text-align: left">Mağazaya</td>
                    <td style="text-align: left">&nbsp;Ücretsiz</td>
                    <td style="text-align: left">&nbsp;1 ila 4 iş günü</td>
                  </tr>
                  <tr>
                    <td style="text-align: left">Eve teslimat</td>
                    <td style="text-align: left">
                      &nbsp;14,95 TL (600 TL üzeri siparişlerde kargo ücretsiz)
                    </td>
                    <td style="text-align: left">&nbsp;2 ila 4 iş günü</td>
                  </tr>
                </tbody>
              </table>
              <p>
                *Bazı ürünlerin teslimat süresi standart teslimat süresini
                geçmektedir. Bu durumda, alışveriş anında tahmini teslimat
                süresi <span lang="EN-GB">8-15 iş günü</span>&nbsp;arası diye
                belirtilecektir. Satın aldığınız ürünlerin farklı teslimatlar
                içermesi halinde siparişlerinizi farklı tarihlerde teslim
                alacağınızı unutmayın.
              </p>
              <h5>ÜCRETSİZ İADE</h5>
              <p>
                Aşağıdaki yöntemlerden herhangi birini kullanarak iade etmek
                için <strong>60 gününüz</strong> var:
              </p>
              <ul>
                <li>Mağazaya ücretsiz iade</li>
                <li>Evden ücretsiz alim</li>
                <li>Yurtiçi kargo şubelerine ücretsiz iadeler</li>
              </ul>
              <p>
                Eğer isterseniz, iade işlemini posta aracılığıyla
                yapabilirsiniz.
              </p>
              <p>
                Daha fazla bilgi için
                <a
                  href="http://shop.mango.com/redirect.faces?op=ayuda&amp;section=faq"
                  >Yardım</a
                >&nbsp;bölümüne gidiniz.
              </p>
             
            </div>
          </div>
          <span class="handling-modal-close" tabindex="-1" role="button"></span>
        </div>
      </div>
      <div class="product-info">
        <div class="product-info-wrapper">
          <div class="product-info-block">
            <h2 class="product-info-title">Tanım</h2>
            <p
              class="product-info-text"
              itemprop="description"
              data-testid="pdp.description"
            >
              <span> Suni deri.</span><span> Motorcu tarz.</span
              ><span> Balıkçı yakalı.</span
              ><span> Boyundan tek çıtçıt düğme kapamalı.</span
              ><span> Uzun kollu.</span><span> Kısa boy.</span
              ><span> Göğüs cebi fermuarlı.</span
              ><span> İki tarafta da fermuarlı cepler.</span
              ><span> Fermuar kapamalı.</span><span> Astarlı.</span
              ><span> İç cepli.</span
              ><span> Modelin boyu 187 cm'dir ve M beden giymektedir.</span>
            </p>
            <micro-frontend
              url="/st-product-tech-qualities/productTechQualities/productDetail"
              id="productDetailTechQualities"
              name="productDetailTechQualities"
              observeddata='{"productId":"37030035"}'
              rtl=""
            ></micro-frontend>
            <ol
              itemscope=""
              itemtype="https://schema.org/BreadcrumbList"
              class="breadcrumbs"
              data-testid="pdp.breadcrumbs"
            >
              <li
                class="breadcrumbs-element"
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  class="breadcrumbs-link"
                  href="/tr/erkek"
                  itemid="https://shop.mango.com/tr/erkek"
                  itemprop="item"
                  itemscope=""
                  itemtype="https://schema.org/Thing"
                  ><span itemprop="name">Erkek</span></a
                ><meta itemprop="position" content="1" />
              </li>
              <li
                class="breadcrumbs-element"
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  class="breadcrumbs-link"
                  href="/tr/erkek/ceketler-ve-yelekler_c16042202"
                  itemid="https://shop.mango.com/tr/erkek/ceketler-ve-yelekler_c16042202"
                  itemprop="item"
                  itemscope=""
                  itemtype="https://schema.org/Thing"
                  ><span itemprop="name">Ceketler ve yelekler</span></a
                ><meta itemprop="position" content="2" />
              </li>
              <li
                class="breadcrumbs-element"
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  class="breadcrumbs-link"
                  href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket_c62923803"
                  itemid="https://shop.mango.com/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket_c62923803"
                  itemprop="item"
                  itemscope=""
                  itemtype="https://schema.org/Thing"
                  ><span itemprop="name">Motorcu tarz ceket</span></a
                ><meta itemprop="position" content="3" />
              </li>
            </ol>
          </div>
          <div class="product-info-block">
            <div>
              <h2 class="product-info-title">İçerik ve bakım talimatları</h2>
              <p class="text-body-m">
                Kompozisyon: 88% polyester,9% viskoz,3% pamuk. Astar: 100%
                polyester. Coating: 100% poliüretan
              </p>
              <div class="product-info-icons">
                <img
                  alt="ELDE MAKS. 30°C'DE YIKAYIN"
                  class="product-info-icon"
                  src="//st.mngbcn.com/images/washingIcons/9@2x.png"
                /><img
                  alt="ÇAMAŞIR SUYU KULLANMAYIN"
                  class="product-info-icon"
                  src="//st.mngbcn.com/images/washingIcons/12@2x.png"
                /><img
                  alt="ÜTÜLEMEYİN"
                  class="product-info-icon"
                  src="//st.mngbcn.com/images/washingIcons/16@2x.png"
                /><img
                  alt="KURU TEMİZLEME YAPILMAZ"
                  class="product-info-icon"
                  src="//st.mngbcn.com/images/washingIcons/23@2x.png"
                /><img
                  alt="KURUTMA MAKİNESİNDE KURUTULAMAZ"
                  class="product-info-icon"
                  src="//st.mngbcn.com/images/washingIcons/25@2x.png"
                />
              </div>
              <p class="product-info-text"></p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="slider-module"
        id="similars"
        data-testid="pdp.crosselling.similars"
      >
        <span class="slider-module-title">Benzer ürünler</span>
        <div
          class="
            swiper swiper-container-initialized swiper-container-horizontal
          "
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              data-module="similars"
              data-color="99"
              data-id="37010036"
              class="swiper-slide slider-module-product swiper-slide-active"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/deri-gorunumlu-ceket_37010036.html?c=99"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri görünümlü ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37010036_99_B.jpg?ts=1651583634049&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri görünümlü ceket</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price slider-module-price--crossed"
                    >1.159,99 TL</span
                  ><span
                    class="slider-module-price slider-module-price--discount"
                    >799,99 TL</span
                  >
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="similars"
              data-color="99"
              data-id="47000031"
              class="swiper-slide slider-module-product swiper-slide-next"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/suni-deri-ceket_47000031.html?c=99"
                ><div class="slider-module-image-container">
                  <img
                    alt="Suni deri ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47000031_99_B.jpg?ts=1669376455383&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description">Suni deri ceket</span>
                <div class="slider-module-prices">
                  <span class="slider-module-price">1.599,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="similars"
              data-color="99"
              data-id="47000032"
              class="swiper-slide slider-module-product"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/deri-gorunumlu-biker-ceket_47000032.html?c=99"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri görünümlü biker ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47000032_99_B.jpg?ts=1669376455383&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri görünümlü biker ceket</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price">1.599,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="similars"
              data-color="CG"
              data-id="47000032"
              class="swiper-slide slider-module-product"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/deri-gorunumlu-biker-ceket_47000032.html?c=CG"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri görünümlü biker ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47000032_CG_B.jpg?ts=1664962371485&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri görünümlü biker ceket</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price">1.599,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="similars"
              data-color="99"
              data-id="37005569"
              class="swiper-slide slider-module-product"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/deri-gorunumlu-bomber-ceket_37005569.html?c=99"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri görünümlü bomber ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37005569_99_B.jpg?ts=1658487111436&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri görünümlü bomber ceket</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price slider-module-price--crossed"
                    >1.159,99 TL</span
                  ><span
                    class="slider-module-price slider-module-price--discount"
                    >699,99 TL</span
                  >
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
          </div>
          <div
            class="swiper-btn-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
          ></div>
          <div
            class="swiper-btn-prev swiper-button-disabled"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-disabled="true"
          ></div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      <micro-frontend
        url="/st-recommendations/recommendations/productDetailDesktop"
        id="recommendationsProductDetail"
        name="recommendationsProductDetail"
        observeddata='{"color":"99","gender":"h","productId":"37030035","relatedModels":[]}'
        ><div class="Wqv1P" id="recommendations">
          <p class="yNCju" data-testid="recommendations-title">
            ŞU AN POPÜLER OLANLAR
          </p>
          <div
            class="
              swiper-container
              swiper-container-initialized
              swiper-container-horizontal
            "
          >
            <div
              class="swiper-wrapper"
              style="transform: translate3d(0px, 0px, 0px)"
            >
              <div
                class="swiper-slide f39vU swiper-slide-active"
                data-id="37027706"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/astarı-suni-kurklu-biker-ceket_37027706.html?c=99"
                  ><img
                  style="width: 100%;"
                    alt="Astarı suni kürklü biker ceket - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37027706_99.jpg?ts=1660838328765&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Astarı suni kürklü biker ceket</span>
                  <div class="DbTxF">
                    <span class="Kxz5i nNfM4">1.699,99 TL</span
                    ><span class="Kxz5i D_TLF">1.299,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
              <div
                class="swiper-slide f39vU swiper-slide-next"
                data-id="37005540"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/ceketler-ve-yelekler-ceket/cepli-yun-ceket_37005540.html?c=56"
                  ><img
                    alt="Cepli yün ceket - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37005540_56.jpg?ts=1657723858764&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Cepli yün ceket</span>
                  <div class="DbTxF">
                    <span class="Kxz5i nNfM4">1.559,99 TL</span
                    ><span class="Kxz5i D_TLF">999,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
              <div
                class="swiper-slide f39vU"
                data-id="47041257"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/gomlek-duz/cepli-denim-gomlek-ceket_47041257.html?c=37"
                  ><img
                    alt="Cepli denim gömlek ceket - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47041257_37.jpg?ts=1668509946615&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Cepli denim gömlek ceket</span>
                  <div class="DbTxF">
                    <span class="Kxz5i">899,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
              <div
                class="swiper-slide f39vU"
                data-id="37077702"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/trenckotlar-ve-parkalar-parka/kapitone-su-gecirmez-parka_37077702.html?c=37"
                  ><img
                    alt="Kapitone su geçirmez parka - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37077702_37.jpg?ts=1663236874538&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Kapitone su geçirmez parka</span>
                  <div class="DbTxF">
                    <span class="Kxz5i nNfM4">1.899,99 TL</span
                    ><span class="Kxz5i D_TLF">1.299,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
              <div
                class="swiper-slide f39vU"
                data-id="37077702"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/trenckotlar-ve-parkalar-parka/kapitone-su-gecirmez-parka_37077702.html?c=99"
                  ><img
                    alt="Kapitone su geçirmez parka - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37077702_99.jpg?ts=1663603597491&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Kapitone su geçirmez parka</span>
                  <div class="DbTxF">
                    <span class="Kxz5i nNfM4">1.899,99 TL</span
                    ><span class="Kxz5i D_TLF">1.299,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
              <div
                class="swiper-slide f39vU"
                data-id="47000029"
                style="width: 207.263px; margin-right: 2px"
              >
                <a
                  class="_vDSS"
                  href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/astarı-suni-kurklu-ceket_47000029.html?c=32"
                  ><img
                    alt="Astarı suni kürklü ceket - Orta plan"
                    class="qWAp7"
                    src="https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47000029_32.jpg?ts=1665499033747&amp;imwidth=529&amp;imdensity=1"
                  /><span class="jsCfX">Astarı suni kürklü ceket</span>
                  <div class="DbTxF">
                    <span class="Kxz5i">2.099,99 TL</span>
                  </div></a
                ><button
                  class="text-body-m-regular liDtv T9iru o4A5i cvFp1 JxN7Y"
                  type="button"
                  aria-label="Favori olarak kaydet"
                >
                  <span
                    data-testid="button-icon"
                    class="icon-outline-favorites KlM7C"
                  ></span>
                </button>
              </div>
            </div>
            <div
              class="swiper-btn-next"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-disabled="false"
            ></div>
            <div
              class="swiper-btn-prev swiper-button-disabled"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-disabled="true"
            ></div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div></div
      ></micro-frontend>
      <div
        class="slider-module"
        id="lookTotal"
        data-testid="pdp.crosselling.lookTotal"
      >
        <span class="slider-module-title">Mükemmel kombinlenen ürünler</span>
        <div
          class="
            swiper swiper-container-initialized swiper-container-horizontal
          "
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              data-module="lookTotal"
              data-color="95"
              data-id="37035905"
              class="swiper-slide slider-module-product swiper-slide-active"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/hırka-ve-kazak-kazak/yakası-fermuarlı-yun-kazak_37035905.html?c=95"
                ><div class="slider-module-image-container">
                  <img
                    alt="Yakası fermuarlı yün kazak"
                    src="//st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37035905_95_B.jpg?ts=1661440524254&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Yakası fermuarlı yün kazak</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price slider-module-price--crossed"
                    >999,99 TL</span
                  ><span
                    class="slider-module-price slider-module-price--discount"
                    >499,99 TL</span
                  >
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="lookTotal"
              data-color="TN"
              data-id="47000788"
              class="swiper-slide slider-module-product swiper-slide-next"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/jean-slim/jude-skinny-jean_47000788.html?c=TN"
                ><div class="slider-module-image-container">
                  <img
                    alt="Jude skinny jean"
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47000788_TN_B.jpg?ts=1666276577720&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description">Jude skinny jean</span>
                <div class="slider-module-prices">
                  <span class="slider-module-price">679,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="lookTotal"
              data-color="78"
              data-id="47001091"
              class="swiper-slide slider-module-product"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ayakkabı-mokasenler/deri-penny-mokasen_47001091.html?c=78"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri penny mokasen "
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47001091_78_B.jpg?ts=1668441775157&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri penny mokasen
                </span>
                <div class="slider-module-prices">
                  <span class="slider-module-price">1.799,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
            <div
              data-module="lookTotal"
              data-color="01"
              data-id="47012883"
              class="swiper-slide slider-module-product"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/takım-elbise-aksesuarları-fularlar/cep-mendili_47012883.html?c=01"
                ><div class="slider-module-image-container">
                  <img
                    alt="Cep mendili"
                    src="//st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47012883_01_B.jpg?ts=1667925583877&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description">Cep mendili</span>
                <div class="slider-module-prices">
                  <span class="slider-module-price">449,99 TL</span>
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      <div
        class="slider-module"
        id="garments"
        data-testid="pdp.crosselling.garments"
      >
        <span class="slider-module-title">İncelenen ürün</span>
        <div
          class="
            swiper swiper-container-initialized swiper-container-horizontal
          "
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              data-module="garments"
              data-color="99"
              data-id="37030035"
              class="swiper-slide slider-module-product swiper-slide-active"
              style="width: 207.263px; margin-right: 2px"
            >
              <a
                class="slider-module-link slider-module-link-js"
                href="/tr/erkek/ceketler-ve-yelekler-motorcu-tarz-ceket/deri-gorunumlu-biker-ceket_37030035.html?c=99"
                ><div class="slider-module-image-container">
                  <img
                    alt="Deri görünümlü biker ceket"
                    src="//st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37030035_99-99999999_01.jpg?ts=1652785696882&amp;imwidth=282&amp;imdensity=2"
                    loading="lazy"
                  />
                </div>
                <span class="slider-module-description"
                  >Deri görünümlü biker ceket</span
                >
                <div class="slider-module-prices">
                  <span class="slider-module-price slider-module-price--crossed"
                    >1.359,99 TL</span
                  ><span
                    class="slider-module-price slider-module-price--discount"
                    >659,99 TL</span
                  >
                </div></a
              ><button
                class="
                  text-body-m-regular
                  liDtv
                  T9iru
                  o4A5i
                  slider-module-favorite
                  JxN7Y
                "
                type="button"
                aria-label="Favori olarak kaydet"
              >
                <span
                  data-testid="button-icon"
                  class="icon-outline-favorites KlM7C"
                ></span>
              </button>
            </div>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    computed:{
        product(){
            return this.$store.getters.product(parseInt(this.$route.params.id));
        }
    }

}
</script>