<template>
  <div>
    <header id="headerMNG" class="headerMNG">
      <micro-frontend class="header-component" id="header"
        ><div class="shW40">
          <div id="benefitsHeader" class="H38In">
            <div id="benefits" class="benefits banners">
              <div class="benefits-container">
                <div class="banners__banner banners__generic">
                  <div class="banners__text">
                    <span class="texto_header_banner"
                      >600 TL üzeri alışverişlerde ücretsiz kargo - İade süresi
                      60 güne uzatıldı  </span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pTIaG" id="headerWrapper">
            <ul class="QqH6A">
              <div >
  <select name="" id=""  v-model="selected"  style="
                      background: none;
                      color: inherit;
                      border: none;
                      padding: 0;
                      font: inherit;
                      cursor: pointer;
                      outline: inherit;
                     border-bottom: 1px solid black;
                     width:55px;
                     font-size: 12px;
                     margin-top: 25px;
                    "
                   >
    <option id="sheHeaderMenuItem"    value="" disabled> <router-link to="/">Kadin</router-link></option>
    <option v-for="item in items">{{ item }}</option>
  </select>
 
</div>
              <li class="RwseE r9mmy" data-testid="header.menuItem.he.hover">
                <a id="heHeaderMenuItem" class="YCtLN null"
                  ><span> <router-link to="/erkek">Erkek</router-link></span></a
                >
              </li>
              <li class="RwseE r9mmy" data-testid="header.menuItem.teen.hover">
                <a id="teenHeaderMenuItem" class="YCtLN null"
                  ><span> <router-link to="/genc">genc</router-link></span></a
                >
              </li>
              <li class="RwseE r9mmy">
                <a id="kidsHeaderMenuItem" class="YCtLN null"
                  ><span> <router-link to="/cocuk">cocuk</router-link></span></a
                >
              </li>
            </ul>
            <div class="YhCbo UuQGm">
              <a class="_kwrY" title="MANGO Shop Online"
                > <router-link to="/"><img
                  class="HGDlR black"
                  src="//st.mngbcn.com/images/headerNew/logos/mango.svg"
                  alt="MANGO Logo"
                  style="height: 26px"
                /></router-link><span class="ajx8B">MANGO</span></a
              >
            </div>
            <div id="headerUserMenu" class="IANuT l96pU">
              <button id="searchIconButton" type="button" class="qHsYt">
                <span class="FtqRY icon-outline-search"></span
                ><span class="qAiYB">Ara</span></button
              ><button type="button" class="qHsYt" id="login_any">
                <div class="gKYNS UX35V" id="userIcon">
                  <span
                    aria-hidden="true"
                    role="menuitem"
                    class="icon-outline-account HkwPH"
                  ></span
                  ><span class="WuF5z"></span>
                </div>
                <span class="qAiYB"><router-link to="/Login">Oturumu baslat</router-link></span></button
              ><button type="button" class="qHsYt" id="favorites_any">
                <span
                  aria-hidden="true"
                  role="menuitem"
                  tabindex="0"
                  class="FtqRY icon-outline-favorites"
                ></span
                ><span class="qAiYB">İstek listesi</span></button
              ><button style="background: none;
                      color: inherit;
                      border: none;
                      padding: 0;
                      font: inherit;
                      cursor: pointer;
                      outline: inherit;" type="button" class="WZYyZ" id="bagIcon">
                <div class="bWheK" aria-hidden="true">
                  <span
                    class="ItUDU icon-outline-bag"
                    data-testid="header-user-menu-bag-icon"
                  ></span>
                </div>
                <span class="RyoN5">
                  <button
                    v-on:click="fadeMe"
                    style="
                      background: none;
                      color: inherit;
                      border: none;
                      padding: 0;
                      font: inherit;
                      cursor: pointer;
                      outline: inherit;
                    "
                  >
                    Sepet
                  </button>
                  <transition name="fade" v-on:enter="enter">
                    <p v-if="show">Sepetinizde Ürün Yok</p>
                  </transition></span
                >
              </button>
              
            </div>
          </div>
          <div id="headerPortalContainer" class="p0Fw4"></div>
          <div
            id="headerAdditionalContentPortalContainer"
            style="display: inherit"
          ></div></div
      ></micro-frontend>
     
      <div id="add-item-notification-portal" style="position: relative"></div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      items: ['New Now', 'Heidye Rehberi', 'Giyim','Büyük Beden','Promosyon'],
    selected: ''
    };
  },
  methods: {
    fadeMe: function () {
      this.show = !this.show;
    },

    enter: function (el, done) {
      var that = this;

      setTimeout(function () {
        that.show = false;
      }, 3000); // hide the message after 3 seconds
    },
  },
  mounted () {
   
  }
};
</script>
<style scoped>
.show {
  display: block;
}
#app {
  max-width: 500px;
  padding: 5rem;
  margin: 0 auto;
}
</style>
