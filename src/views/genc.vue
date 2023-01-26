<template>
  <section>
    <div id="vsvhome" class="no-js">
      <div class="vsv-home-group vsv-home-group_mid-she">
        <div data-bannerid="9390" class="vsv-bannercontainer">
          <div data-id="9390" id="vsv-camille" class="vsv-box with-menu">
            <div
              data-cta="/tr/kadin/one-cikanlar/camille-x-mango_d19623972"
              class="vsv-height-banner"
            >
              <div class="vsv-video-container">
                <div class="vsv-video-wrapper">
                  <div class="video-mediaelement vsv-video video-fullviewport">
                   <img src="https://staticpages.mngbcn.com/homes/images/fw22/teens/diciembre/teen_rebajas_1_0112_v2.jpg?imwidth=831&imdensity=1" alt="">
                  </div>
                </div>
              </div>
              <div
                class="vsv-position-text-wrapper vsv-position-text-wrapper-center"
                style="opacity: 1"
              >
                <div class="vsv-main-text vsv-showLG vsv-main-textTR">
                  <div class="vsv-logo">
                    <img
                      data-src="//staticpages.mngbcn.com/homes/images/fw22/she/octubre/logoCamille.png?imwidth=646&amp;imdensity=1"
                      alt=""
                      data-width="50"
                      style="visibility: inherit; opacity: 1"
                    />
                  </div>
                  <h2 class="vsv-title">
                    <span data-resize-text="true" class="vsv-data-resize"
                      >Eğlenmeyi bilenler için tasarlanan özel parti
                      koleksiyonu<br
                    /></span>
                  </h2>
                </div>
                <div class="vsv-main-text vsv-dontShowLG vsv-main-textTR">
                  <div class="vsv-logo">
                    <img
                      data-src="//staticpages.mngbcn.com/homes/images/fw22/she/octubre/logoCamille.png?imwidth=646&amp;imdensity=1"
                      alt=""
                      data-width="50"
                      src="//staticpages.mngbcn.com/homes/images/fw22/she/octubre/logoCamille.png?imwidth=646&amp;imdensity=1"
                      data-was-processed="true"
                      class="loaded"
                      style="visibility: inherit; opacity: 1"
                    />
                  </div>
                  <h2 class="vsv-title">
                    <span data-resize-text="true" class="vsv-data-resize"
                      >Eğlenmeyi bilenler için tasarlanan özel parti
                      koleksiyonu</span
                    >
                  </h2>
                </div>
              </div>
              <div class="vsv-button">
                <div class="vsv-button-wrapper">
                  <a
                    href="/tr/kadin/one-cikanlar/camille-x-mango_d19623972"
                    title="Go to Camille x Mango"
                    class="vsv-button-wrapper-width"
                    ><div class="vsv-button-link">
                      <span class="hvr-underline-fix2"
                        > <router-link to="/gSatinAl">Parti koleksiyonunu keşfet</router-link></span
                      >
                    </div></a
                  >
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </section>
   <section>
    <div id="vsvhome" class="no-js">
      <div class="vsv-home-group vsv-home-group_dest-she vsv-home-group_5">
        <div
          data-bannerid="9495"
          class="vsv-bannercontainer"
        v-for="kat in gencler" :key="kat.id"
        >
          <div
            id="vsv-giftguide-she"
            data-id="9495"
            data-cta="/tr/kadin/one-cikanlar/hediye-rehberi_d20689879"
            data-islinkable="/tr/kadin/one-cikanlar/hediye-rehberi_d20689879"
            class="vsv-box"
          >
            <div class="vsv-blocs">
              <div
                class="vsv-bloc"
                style="background-color: rgba(69, 64, 58, 0.4)"
              >
                <div
                v-for="image in images" :key="image.id"
                  data-device="desktop,tabletlandscape,tablet"
                  data-akaset=""
                  data-vsvbg="//staticpages.mngbcn.com/homes/images/fw22/she/noviembre/she_landing_gg_0711.jpg"
                  data-vsv-bg-processed="//staticpages.mngbcn.com/homes/images/fw22/she/noviembre/she_landing_gg_0711.jpg?imwidth=429&amp;imdensity=1&amp;impolicy=set_13"
                  class="vsv-image data-vsvbg-50"
                  :style="{
                    'background-image': `url(${image.url})`,
                    transition: 'opacity 0.5s ease 0s',
                    opacity: '1',
                  }"
                ></div>
                <div class="vsv-overlay"></div>
                <div class="vsv-bloc-wrapper">
                  <div class="vsv-titles">
                    <h2 class="vsv-title" >{{ kat.category }}</h2>
                    <div class="vsv-links">
                      <a
                        href="/tr/kadin/one-cikanlar/hediye-rehberi_d20689879"
                        title="Go to Hediye Rehberi "
                        class="vsv-link"
                        ><span class="hvr-underline-fix2">{{
                          kat.info
                        }}</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vsv-bannercontainer" data-bannerid="9542">
        <div
          class="vsv-box"
          id="vsv-abrigos-she"
          data-id="9542"
          data-islinkable="/tr/kadin/palto_c67886633"
        ></div>
      </div>
    </div>
  </section>
   <section>
<div id="app" class="container" style="margin-top:2rem">
  <div class="row">
    <div class="col-md-4" v-for="(item,index) in items" :key="index">
      <div class="card">
        <img :src="item.imgUrl" class="card-img-top" :alt="item.name">
        <div class="card-body text-center">
          <button style="height: 33px;
width: 67px;
background: black;
box-shadow: none;
border: none;
color: white;" class="card-title">{{item.name}}</button>
          <p>{{item.skill}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
</template>
<script setup>
import {ref, onMounted} from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
const images = ref([
    {
        url: 'https://staticpages.mngbcn.com/homes/images/fw22/teens/diciembre/teena_rebajas_sudaderas_0112_v2.jpg?imwidth=831&imdensity=1',
        caption: 'Image 1',
        id:1
    },
   
    
])

const gencler =ref([
//jhgjhfgj
]);

onMounted(async() => {
  const querySnapshot = await getDocs(collection(db, "genc"));
  let fbGencler=[]
  querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  const kat={
    id:doc.id,
    category:doc.data().category,
    info:doc.data().info,
    
  }
  fbGencler.push(kat)
  })
  gencler.value=fbGencler
  })


</script>
  <style scoped>
  
img {
  max-width: 100%;
}

.river {
  height: 50px;
  color: white;
  background-color: blue;
}
.row {
  display: -ms-flexbox;
  display: flex;
  
  margin-right: -40px;
  margin-left: -40px;
}
</style>