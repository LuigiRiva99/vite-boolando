<script>
export default {
    props: ['element'],
    data() {
        return {

        }
    },
}
</script>

<template>

<div class="col-4">
    <div class="product-item">
        <div class="product-photo">
            <img  :src="`../public/img/${element.frontImage}`" alt="Relaxed fit tee unisex">
            <div class="product-flags" >
                <span v-for="badge in element.badges" :class="badge.type">{{badge.value}}</span>
                <!-- <span class="label">Sostenibilità</span> -->
            </div>   
            <div class="overlay">
                <a href=""><img :src="`../public/img/${element.backImage}`" alt=""></a>
            </div>
            <span class="favourites" :class="element.isInFavorites === true ? 'fav' : ''">
                <a href="">&hearts;</a>
            </span>
        </div>
        <div class="product-name">
            <p class="brand-name">{{element.brand}}</p>
            <h5>{{element.name}}</h5>
            <span class="price">{{element.price}}</span>
            <span class="og-price"><del>{{element.price}}</del></span>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
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

.discount, .tag{
    padding: 3px 10px;
    color: white;
}

.discount {
    background-color: $red;
}

.tag {
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

.favourites:hover, .fav{
    color: $red;
}

h5 {
    font-weight: bold;
    font-size: 15px;
}

.brand-name, .og-price, .price{
    font-size: 13px;
}
</style>