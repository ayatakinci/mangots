<template>
  <div>
    <!-- Display a loading message while the data is being fetched -->
    <template v-if="loading">
      Loading data...
    </template>

    <!-- Display the data once it has been fetched -->
    <template v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>Name: {{ user.name }}</p>
          <p>Address: {{ user.address }}</p>
          <p>Website: {{ user.website }}</p>
        </li>
      </ul>
    </template>
  </div>
</template>

<script  setup>
import {ref, onMounted} from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';




const users =ref([
//jhgjhfgj
]);


onMounted(async() => {
  const querySnapshot = await getDocs(collection(db, "users"));
  let fbUsers=[]
  querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  const user={
    id:doc.id,
    name:doc.data().name,
    address:doc.data().address,
    website:doc.data().website
  }
  fbUsers.push(user)
  })
  users.value=fbUsers
  })


</script>
