import { Store } from 'pinia'

interface Product {
    id: number
    name: string
    price: number
    description: string
}

interface CartItem extends Product {
    quantity: number
}

interface CartState {
    cart: CartItem[]
}

export const useCartStore = store<CartState>({
    id: 'cart',
    state: () => ({
        cart: []
    }),
    getters: {
        productQuantity: (state) => (product: Product) => {
            const item = state.cart.find((i) => i.id === product.id)
            if (item) return item.quantity
            else return null
        },
        cartItems: (state) => state.cart
    },
    mutations: {
        addToCart(state, product: Product) {
            let item = state.cart.find((i) => i.id === product.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({ ...product, quantity: 1 })
            }
            updateLocalStorage(state.cart)
        },
        removeFromCart(state, product: Product) {
            let item = state.cart.find((i) => i.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter((i) => i.id !== product.id)
                }
            }
            updateLocalStorage(state.cart)
        },
        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart')
            if (cart) {
                state.cart = JSON.parse(cart)
            }
        }
    },
    actions: {}
})

function updateLocalStorage(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart))
}