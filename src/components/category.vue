<template>
  <section>
    <div id="vsvhome" class="no-js">
      <div class="vsv-home-group vsv-home-group_dest-she vsv-home-group_5">
        <div
          data-bannerid="9495"
          class="vsv-bannercontainer"
        v-for="kat in kategori" :key="kat.id"
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
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
const images = ref([
    {
        url: 'https://staticpages.mngbcn.com/mangogirls/images/378/ene_linda_tol.jpg?imwidth=337&imdensity=1',
        caption: 'Image 1',
        id:1
    },
    {
        url: 'https://staticpages.mngbcn.com/mangogirls/images/379/8a19fef5-9be4-4c2a-adeb-3fa1f3e28f55.jpg?imwidth=337&imdensity=1',
        caption: 'Image 2',
        id:2
    },
    
])

const kategori =ref([
//jhgjhfgj
]);

onMounted(async() => {
  const querySnapshot = await getDocs(collection(db, "kategori"));
  let fbKategori=[]
  querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  const kat={
    id:doc.id,
    category:doc.data().category,
    info:doc.data().info,
    
  }
  fbKategori.push(kat)
  })
  kategori.value=fbKategori
  })


</script>