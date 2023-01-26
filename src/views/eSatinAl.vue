<template>
  <div>
    <div class="columns4 _ct9g" id="list">
      <div class="page tRkeN page--hidden" id="page1">
        <div class="geGR_">
          <ul class="LSqil">
            <li
      v-for="(product, index) in productlist"
      :key="index"
      id="product-key-id-3702513270"
      class="lZ7AB T85hV Ce_Y3"
    >
      <a class="KUstY" >
        <div id="g3702513270" class="ZXN_y">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="sizes-container Xbncm">
          <div class="LzXV7"></div>
        </div>
      </a>
      <div class="D4LGE undefined">
        <div class="K813T">
          <div class="tgXMK">
            <span class="product-name sg-text-body-small y8pxS">{{product.name}}</span>
          </div>
          <span>
            <div data-testid="prices.wrapper" class="o5MyB PvSij c1VHT">
              <span class="sr-only">{{product.originalPrice}}</span>
              <span class="Bc91B OHp63" aria-hidden="true" data-testid="crossedOutPrice">
                <span class="LioVg MZfYt"></span>
              </span>
              <span class="Bc91B" aria-hidden="true" data-testid="currentPrice">
                <span class="LioVg MZfYt">
                  <span class="LioVg text-body-m dDsAd">{{product.price}}</span>
                </span>
              </span>
            </div>
          </span>
          <div><h1 style="font-size:15px">{{product.color}}</h1>
          <button style="font-size: 15px;border: 2px solid gray;padding: 2px;border-radius: 5px;"> <router-link :to="{ name: 'eproduct' , params: { id: product.id }}">görüntüle</router-link></button></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default{
    computed:{
        productlist(){
            return this.$store.getters.productlist;
        }
    }
}
</script>
<style scoped>
.page--hidden img {
  display: block!important;
}
img{
    width: fit-content!important;
}
.columns4 .lZ7AB.Ce_Y3 {

  padding-left: 3px!important;
}
button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>