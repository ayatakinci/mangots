import { Pinia } from 'pinia'
export default pinia.Store({
    state: {
        productList: [
            {
                id:1,
                name: "Kruvaze blazer ceket",
                image: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37027706_99.jpg?ts=1660838328765&imwidth=529&imdensity=1",
                originalPrice: "1.399,99 TL",
                price: "699,99 TL",
                color: "siyah"
            },
            {
                id: 2,
                name: "Kruvaze blazer ceket",
                image: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37005540_56.jpg?ts=1657723858764&imwidth=529&imdensity=1",
                originalPrice: "1.399,99 TL",
                price: "699,99 TL",
                color: "siyah"
            },
            {
                id: 3,
                name: "Kruvaze blazer ceket",
                image: "https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47041257_37.jpg?ts=1668509946615&imwidth=529&imdensity=1",
                originalPrice: "1.399,99 TL",
                price: "699,99 TL",
                color: "siyah"
            },
            {
                id: 4,
                name: "Kruvaze blazer ceket",
                image: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37077702_37.jpg?ts=1663236874538&imwidth=529&imdensity=1",
                originalPrice: "1.399,99 TL",
                price: "699,99 TL",
                color: "siyah"
            }
        ]
    },
    getters: {
        productlist: state => {
            return state.productList;
        },
        product: state => id => {
            return state.productList.find(product => product.id === id);
        }
    }
})