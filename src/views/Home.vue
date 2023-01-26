<template>
   
      <Hero />
      <category />
      <Mangogirls />
      <koleksiyonlar />
      <Nav />
      <News />
      <giris />
      
</template>
 <script>
  import Navbar from '../components/navbar.vue';
  import socials from '../components/socials.vue';
  import giris from '../components/giris.vue';
  import News from '../components/news.vue';
  import Hero from '../components/hero.vue';
  import Footer from '../components/Footer.vue';
  import category from '../components/category.vue';
  import koleksiyonlar from '../components/koleksiyonlar.vue';
  import Mangogirls from '../components/mangogirls.vue';
  import Nav from '../components/nav.vue';
  export default {
      name: "IndexPage",
      components: { Navbar,Hero ,Footer,category,giris,Mangogirls,koleksiyonlar,Nav,News,socials}
  }
  </script>