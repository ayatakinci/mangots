<template>
    <div id="userlist">
        <h1>userlist</h1>
        <table cellspacing="0">
            <tr v-for="(user,index) in userlist" :key="index">
                <td><i class="fas fa-user"></i></td>
                <td>{{user.name}}</td>
                <td>{{user.role}}</td>
                <td> <router-link :to="{ name: 'user' , params: { id: user.id }}">view</router-link></td>
            </tr>
        </table>

    </div>
</template>
<script>
export default{
    computed:{
        userlist(){
            return this.$store.getters.userlist;
        }
    }
}
</script>