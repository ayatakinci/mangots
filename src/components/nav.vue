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
            <div data-bannerid="8191" class="vsv-bannercontainer">
              <div
                id="vsv-urlsmenu-she"
                data-id="8191"
                data-islinkable="/tr/kadin/kıyafet_c11360446"
                class="vsv-box"
              >
                <div class="vsv-titles"><h1 class="vsv-title">Kadin</h1></div>
                <div class="vsv-lists vsv-lists-TR">
                  <div class="vsv-list">
                    <h3>Giyim<span class="vsv-arrow">5</span></h3>
                     <ul>
    <li v-for="link in links" :key="link.id">
      <a :href="link.link" :title="link.title" class="vsv-link">
        <span class="hvr-underline-fix2">{{ link.name }}</span>
      </a>
    </li>
  </ul>
                  </div>
                  <div class="vsv-list">
                    <h3>Aksesuarlar<span class="vsv-arrow">5</span></h3>
                   <ul>
    <li v-for="item in items" :key="item.id">
      <a :href="item.link" :title="item.title" class="vsv-link">
        <span class="hvr-underline-fix2">{{ item.name }}</span>
      </a>
    </li>
  </ul>
                  </div>
                  <div class="vsv-list vsv-list-intimissimi vsv-list-intimissimi-052"
                  >
                    <h3><span class="vsv-arrow">5</span></h3>
                    <ul>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#nolink"
                          title="See the collection "
                          class="vsv-link"
                          ><span class="hvr-underline-fix2"
                            >See the collection</span
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="vsv-list vsv-list-rituals vsv-list-rituals-052">
                    <h3><span class="vsv-arrow">5</span></h3>
                    <ul>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#nolink" title="" class="vsv-link"
                          ><span class="hvr-underline-fix2"></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#nolink"
                          title="See the collection "
                          class="vsv-link"
                          ><span class="hvr-underline-fix2"
                            >See the collection</span
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="vsv-transparent"></div>
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
        { id: 1, name: 'Ayakkabı', link: '/tr/kadin/ayakkabı_c10336952', title: 'Ayakkabı' },
        { id: 2, name: 'Çanta', link: '/tr/kadin/çanta_c10336952', title: 'Çanta' },
        { id: 3, name: 'Giyim', link: '/tr/kadin/giyim_c10336952', title: 'Giyim' },
        { id: 4, name: 'Aksesuar', link: '/tr/kadin/aksesuar_c10336952', title: 'Aksesuar' }
      ],
       links: [
        { id: 1, name: 'Palto', link: '/tr/kadin/palto_c67886633', title: 'Palto' },
        { id: 2, name: 'Ceket', link: '/tr/kadin/ceket_c67886633', title: 'Ceket' },
        { id: 3, name: 'Mont', link: '/tr/kadin/mont_c67886633', title: 'Mont' },
        { id: 4, name: 'Kaban', link: '/tr/kadin/kaban_c67886633', title: 'Kaban' },
         { id: 1, name: 'Palto', link: '/tr/kadin/palto_c67886633', title: 'Palto' },
        { id: 2, name: 'Ceket', link: '/tr/kadin/ceket_c67886633', title: 'Ceket' },
        { id: 3, name: 'Mont', link: '/tr/kadin/mont_c67886633', title: 'Mont' },
        { id: 4, name: 'Kaban', link: '/tr/kadin/kaban_c67886633', title: 'Kaban' }
      ]
    }
  }
}
</script>