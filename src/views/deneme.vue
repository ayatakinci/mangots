<template>
      <img :src="imageUrl" alt="Your Image">
</template>
<script setup>
import firebase from 'firebase/app'
import 'firebase/storage'

firebase.initializeApp({
    // Your Firebase config goes here
    apiKey: "AIzaSyCr0WOYl30US8vgEsanL6Ny9moWnbmJ8t0",
    authDomain: "blog-8560c.firebaseapp.com",
    projectId: "blog-8560c",
    storageBucket: "blog-8560c.appspot.com",
    messagingSenderId: "422954634502",
    appId: "1:422954634502:web:b58e6b5599180eee6e2287"
})
export default{
data() {
  return {
    imageUrl: '',
    storageRef: firebase.storage().ref()
  }
},
created() {
  this.storageRef
    .child('images/your-image-name.jpg')
    .getDownloadURL()
    .then(url => {
      this.imageUrl = url
    })
}

}

</script>