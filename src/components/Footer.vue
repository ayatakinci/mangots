<template>
  <section>
    <div
      id="footerContentCache"
      class="row"
      data-cache-id="shop.mango.com_562_pc_052_TR_she"
    >
      <div id="navWorldwide" class="nav-worldwide">
        <div
          role="button"
          tabindex="0"
          class="nav-worldwide-container modalCambioPaisShow"
        >
          <span
            class="icon-outline-language nav-worldwide-icon nav-language-icon"
          ></span>
          <span class="nav-country-text">Türkiye</span>
          <span
            class="icon-outline-next nav-worldwide-icon nav-next-icon"
          ></span>
        </div>
      </div>

    <div id="nav-footer" >
    <ul class="nav-footer">
      <li class="nav-footer-link" :key="item.id" v-for="item in items" >
        <span class="" :id="item.id">
          <a :href="item.link" :target="item.target" :data-ga-label="item.gaLabel">
            {{ item.name }}
          </a>
        </span>
      </li>
    </ul>
  </div>

       <div class="nav-pay-methods">
    <img v-for="method in methods" :key="method.id" :id="method.id" :src="method.src" :alt="method.alt" />
  </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 'ayuda', name: 'Yardım', link: 'https://shop.mango.com/tr/help/12592.html', target: '', gaLabel: 'ayuda' },
        { id: 'faq', name: 'Frequently Asked Questions', link: 'https://shop.mango.com/tr/faq', target: '', gaLabel: 'faq' },
        { id: 'contact', name: 'Contact Us', link: 'https://shop.mango.com/tr/contact', target: '', gaLabel: 'contact' }
      ],
methods: [
        { id: 'bonuscard', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/bonus@2x.png', alt: 'bonuscard' },
        { id: 'milesandshop', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/milesandshop@2x.png', alt: 'milesandshop' },
        { id: 'flexi', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/flexi@2x.png', alt: 'flexi' },
        { id: 'axess', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/axess@2x.png', alt: 'Axess' },
        { id: 'finansbank', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/finans@2x.png', alt: 'finansbank' },
        { id: 'maximum', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/maximum@2x.png', alt: 'Maximum' },
        { id: 'world', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/world@2x.png', alt: 'World' },
        { id: 'advantage', src: '//st0.mngbcn.com/images/paymentMethods/bw/052/advant@2x.png', alt: 'Advantage' },
        { id: 'visa', src: '//st0.mngbcn.com/images/paymentMethods/bw/999/visa@2x.png', alt: 'VISA' },
        { id: 'mc', src: '//st0.mngbcn.com/images/paymentMethods/bw/999/mc@2x.png', alt: 'MasterCard' }
      ]
    }
  }
}
</script>