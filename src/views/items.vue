<template>
    <div>
        <div v-for="product in items" :key="product.id">
            <h3>{{product.name}}</h3>
            <h3>{{product.price}}</h3>
            <h3>{{product.description}}</h3>
            <div>
                <h1>in cart</h1>
                <h4 v-if="product_total">{{product_total }}</h4>
            </div>
            <button @click="addToCart()">add to cart </button>
            <button @click="removeFromCart()">remove from cart </button>
        </div>
    </div>

</template>
<script>
import items from '../data/items.js'
export default{
    props:['product'],
    components:{
        items

    },
    data(){
        return{
            items:items
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart', this.product)
        }

    },
    computed:{
        product_total(){
            return this.$store.getters.productQuantity(this.product)
        }
    },
    mounted(){
        this.$store.commit('updateCartFromLocalStorage')

    }
}
</script>