<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <main>
        <section class="product-page">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="product-item">
                            <div class="product-photo">
                                <img src="../assets/img/1.webp" alt="Relaxed fit tee unisex">
                                <div class="product-flags">
                                    <span class="discount">-50%</span>
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
                                <p class="brand-name">Levi's</p>
                                <h5>RELAXED FIT TEE UNISEX</h5>
                                <span class="price">14,99 €</span>
                                <span class="og-price"><del>29,99 €</del></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
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
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.product-page .container{
    padding-top: 50px;
}

.product-page .row {
    margin-top: 40px;
}

.product-photo {
    position: relative;
}

.product-flags{
    display: flex;
    position: absolute;
    bottom: 50px;
    left: 0px;
    gap: 10px;
    z-index: 999;
}

.favourites {
    position: absolute;
    top: 10px;
    right: 0px;
    background-color: white;
    font-size: 25px;
    padding: 5px 15px;
}

.discount, .label{
    padding: 3px 10px;
    color: white;
}

.discount {
    background-color: $red;
}

.label {
    background-color: $green;
}

.price{
    color: $red;
    font-weight: bold;
}

.og-price {
    color: black;
}

.overlay {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
}

.product-item:hover .overlay{
    opacity: 1;
}

.favourites:hover{
    color: $red;
}

h5 {
    font-weight: bold;
    font-size: 15px;
}
</style>