<script>
export default {
    props: ['element'],
    data() {
        return {

        }
    }
}
</script>

<template>

<div class="col-4">
    <div class="product-item">
        <div class="product-photo">
            <img src='../assets/img/1.webp'  alt="Relaxed fit tee unisex">
            <div class="product-flags">
                <span class="discount">{{element.badges[0].value}}</span>
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
            <p class="brand-name">{{element.brand}}</p>
            <h5>{{element.name}}</h5>
            <span class="price">{{element.price}}</span>
            <span class="og-price"><del>{{element.price}}</del></span>
        </div>
    </div>
</div>

</template>

<style></style>