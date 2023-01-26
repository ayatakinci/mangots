<template>
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
<script>
export default{
    data(){
        return{
            items: [
      {
        name: 'Erkek',
       
        imgUrl: 'https://staticpages.mngbcn.com/homes/images/fw22/he/septiembre/he_landing_otraslineas_0109_v3.jpg?imwidth=433&imdensity=1&impolicy=set_13'
      },
      {
        name: 'Çocuk',
        
        imgUrl: 'https://staticpages.mngbcn.com/homes/images/fw22/kids/septiembre/kids_landing_otraslineas_0109_v3.jpg?imwidth=433&imdensity=1&impolicy=set_13'
      },
      {
        name: 'Genç',
      
        imgUrl: 'https://staticpages.mngbcn.com/homes/images/fw22/teens/septiembre/teen_landing_otraslineas_0109_v3.jpg?imwidth=433&imdensity=1&impolicy=set_13'
      }
    ]
        }
        
    }
}
</script>