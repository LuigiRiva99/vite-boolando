<script>
import AppCard from './AppCard.vue'
import cardProducts from '../assets/db.json'
export default {
    components : {
        AppCard
    },
    data() {
        return {
            cardProducts: cardProducts.products,
        }
    }
}
</script>

<template>
    <main>
        <section class="product-page">
            <div class="container">
                <div class="row">
                    <AppCard  v-for="(product,i) in cardProducts" :key="i" :element="product"/>
                    <!-- <div class="col-4" v-for="product in products" :key="i">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src='../assets/img/1.webp'  alt="Relaxed fit tee unisex">
                                <div class="product-flags">
                                    <span class="discount">{{product.badges[0].value}}</span>
                                    <span class="label">Sostenibilità</span>
                                </div>   
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/1b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">{{product.brand}}</p>
                                <h5>{{product.name}}</h5>
                                <span class="price">{{product.price}}</span>
                                <span class="og-price"><del>{{product.price}}</del></span>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-4"> 
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/2.webp" alt="ROSES TEE">
                                <div class="product-flags">
                                    <span class="discount">-30%</span>
                                </div>   
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/2b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">Guess</p>
                                <h5>ROSES TEE</h5>
                                <span class="price">20,99 €</span>
                                <span class="og-price"><del>29,99 €</del></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/3.webp" alt="VOGLIA DI COLORI PASTELLO">
                                <div class="product-flags">
                                    <span class="discount">-30%</span>
                                </div>   
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/3b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">Come Zucchero Filato</p>
                                <h5>VOGLIA DI COLORI PASTELLO</h5>
                                <span class="price">129,99 €</span>
                                <span class="og-price"><del>184,99 €</del></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/4.webp" alt="TEE UNISEX">
                                <div class="product-flags">
                                    <span class="discount">-50%</span>
                                    <span class="label">Sostenibilità</span>
                                </div>   
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/4b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">Levi's</p>
                                <h5>TEE UNISEX</h5>
                                <span class="price">14,99 €</span>
                                <span class="og-price"><del>29,99 €</del></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/5.webp" alt="STRIPE BODICE">
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/5b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">Maya Deluxe</p>
                                <h5>STRIPE BODICE</h5>
                                <span class="price">99,99 €</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/6.webp" alt="MAGLIONE - BLACK">
                                <div class="product-flags">
                                    <span class="label">Sostenibilità</span>
                                </div>   
                                <div class="overlay">
                                    <a href=""><img src="../assets/img/6b.webp" alt=""></a>
                                </div>
                                <span class="favourites">
                                    <a href="">&hearts;</a>
                                </span>
                            </div>
                            <div class="product-name">
                                <p class="brand-name">Esprit</p>
                                <h5>MAGLIONE - BLACK</h5>
                                <span class="price">29,99 €</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.product-page {
    .container{
        padding-top: 50px;
    }

    .row {
        margin-top: 40px;
    }
}
</style>