<template>
    <h1>cart</h1>
    <div v-for="product in items" :key="product.id">
        {{product.name}}
    </div>
</template>
<script>
import { Vue, Component, Prop, Computed } from 'vue-property-decorator';

@Component
export default class MyComponent extends Vue {
@Prop() product!

@Computed
get items() {
return this.$store.getters.cartItems;
}
}
</script>