<template>
  <section>
    <div id="vsvhome" class="no-js">
      <div class="vsv-home-group vsv-home-group_dest-she vsv-home-group_5">
        <div data-bannerid="9545" class="vsv-bannercontainer">
          <div
            id="vsv-newnow"
            data-id="9545"
            data-cta="/tr/kadin/one-cikanlar/yeni_d18713172"
            data-islinkable="/tr/kadin/one-cikanlar/yeni_d18713172"
            class="vsv-box"
          >
            <div class="vsv-bannercontainer" data-bannerid="8106">
              <div
                class="vsv-box"
                data-id="8106"
                data-cta=""
                id="vsv-mangogirls"
                data-islinkable="//shop.mango.com/redirect.faces?op=conta&amp;externa=CATSHE112021MANGOGIRLS"
              >
                <div data-device="desktop,tablet,tabletlandscape">
                  <a
                    id="vsv-mangogirls-link-desktop"
                    href="//shop.mango.com/redirect.faces?op=conta&amp;externa=CATSHE112021MANGOGIRLS"
                    title="Go to #MANGOGIRLS"
                  >
                    <div class="vsv-titles">
                      <h2 class="vsv-title">#MANGOGIRLS</h2>
                    </div>
                    <div class="vsv-blocs vsv-blocs-desktop">
                      <div class="vsv-bloc">
                        <img
                          class="img-responsive"
                          data-loop="false"
                          src="https://staticpages.mngbcn.com/mangogirls/images/366/linda_nov_2.jpg?imwidth=326&amp;imdensity=1"
                          alt=""
                          data-width="25"
                        />
                      </div>
                      <div class="vsv-bloc" v-for="item in items" :key="item.id">
    <img class="img-responsive" :data-loop="item.loop" :src="item.src" :alt="item.alt" :data-width="item.width" />
  </div>
                    </div>
                    <div
                      class="vsv-button vsv-button-relative vsv-button-black"
                    >
                      <div class="vsv-button-wrapper">
                        <div class="vsv-button-wrapper-width">
                          <div class="vsv-button-link">
                            <span class="hvr-underline-fix2">
                              <NuxtLink to="/yeni">
                                Daha Fazla Keşfet
                              </NuxtLink></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, loop: false, src: 'https://staticpages.mngbcn.com/mangogirls/images/365/grece_nov_2.jpeg?imwidth=326&imdensity=1', alt: '', width: 25 },
     
         { id: 2, loop: false, src: 'https://staticpages.mngbcn.com/mangogirls/images/365/grece_nov_2.jpeg?imwidth=326&imdensity=1', alt: '', width: 25 },
        ]}}}
        </script>
<style scoped>
#vsvhome [data-id="8106"] .vsv-blocs {
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-justify-content: center;
  width: 100%;
  padding: 0 3.4vw;
}
#vsvhome [data-id="8106"] .vsv-blocs .vsv-bloc {
  position: relative;
  padding: 0 4px;
  width: 25%;
}
#vsvhome [data-id="8106"] .vsv-titles .vsv-title {
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.vsv-titles {
  position: relative;
  width: 100%;
  text-align: center;
  color: #000;
  margin-bottom: 56px;
}
.vsv-title {
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  font-weight: bold;
}
.vsv-bloc {
  position: relative;
  padding: 0 4px;
  width: 25%;
}
.img-responsive {
  width: 100%;
  display: block;
  font-size: 0;
}
.vsv-blocs {
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-justify-content: center;
  width: 100%;
  padding: 0 3.4vw;
}
.vsv-button {
  margin-top: 32px;
  text-align: center;
}
.vsv-button.vsv-button-relative {
  position: relative;
  left: auto;
  right: auto;
  bottom: auto;
}
.vsv-button .vsv-button-wrapper {
  width: auto;
  margin: 0 4px;
  position: relative;
  display: inline-table;
  text-align: left;
  direction: ltr;
  pointer-events: auto;
}
.vsv-button.vsv-button-black .vsv-button-wrapper-width {
  background: #000;
}
.vsv-button .vsv-button-wrapper-width {
  display: block;
  width: 100%;
  min-width: 100px;
  text-align: center;
  background: #fff;
  padding: 10px 24px;
  cursor: pointer;
}
.vsv-button.vsv-button-black .vsv-button-link {
  color: #fff;
}
.vsv-button .vsv-button-link {
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #121314;
}
#vsvhome div[class*="vsv-home-group_dest-"] .vsv-blocs .vsv-bloc {
  position: relative;
  width: 100%;
  height: 25vw !important;
  cursor: pointer;
}
</style>
