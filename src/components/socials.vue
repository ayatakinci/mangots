<template>
  <section>
    <div
      id="nav-socialnetwork"
      class="nav-socialnetwork"
      data-ga-action="redes sociales"
    >
       <span class="nav-socialnetwork-link" v-for="item in items" :key="item.id">
      <span class="social__icon" :class="item.class">
        <a :href="item.link" target="_blank" rel="nofollow">
          {{ item.name }}
        </a>
      </span>
    </span>
    </div>
    <div class="nav-locale">
      <span class="nav-locale-copyright">
        <span class="copyright" id=""> © 2022 MANGO </span>
        <span class="" id=""> Tüm hakları saklıdır </span>
        <span id="" class="contentLegal__dividerMargin"></span>
        <a
          class="separateLeft modal-link"
          onclick="window.open('https://shop.mango.com/tr/helppopup/11622.html','ayuda','menubar=no,resizable=yes,scrollbars=yes,width=970,height=750').focus();"
          data-ga-label="politicaPrivacidad"
          ><span>Gizlilik Politikası ve Çerezler</span></a
        >
        <span id="" class="contentLegal__divider">|</span>
        <a
          class="separateLeft modal-link"
          onclick="window.open('https://shop.mango.com/tr/helppopup/6515.html','ayuda','menubar=no,resizable=yes,scrollbars=yes,width=970,height=750').focus();"
          data-ga-label="condicionesventa"
          ><span>Satış Genel Şartları</span></a
        >
        <div class="nav-locale-certificate">
          <img
            id="geotrust"
            src="//st0.mngbcn.com/images/paymentMethods/bw/999_certificados/999_generico/geotrust@2x.png"
            alt=""
          />
        </div>
      </span>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'f', link: 'http://www.facebook.com/mango.com', class:'social__icon fb icon' },
        { id: 2, name: 'i', link: 'http://www.instagram.com/mango.com', class:'social__icon tw icon' },
        { id: 3, name: 't', link: 'http://www.twitter.com/mango.com', class:'social__icon it icon' },
        { id: 4, name: 'y', link: 'http://www.youtube.com/mango.com', class:'social__icon pn icon' }
      ]
    }
  }
}
</script>