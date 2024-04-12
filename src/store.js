import { reactive } from 'vue'
import cardProducts from './assets/db.json'

export const store = reactive({
    products : cardProducts.products
})