<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
<header class="page-header">
    <nav class="container">
        <div class="row">
            <ul class="category">
                <li>
                    <a href="#">Donna</a>
                </li>
                <li>
                    <a href="#">Uomo</a>
                </li>
                <li>
                    <a href="#">Bambini</a>
                </li>
            </ul>
            <div class="header-logo">
                <img  src="../assets/img/boolean-logo.png" alt="Boolean logo">
            </div>
            <div class="account">
                <a class="account-icons" href="#"><img src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/guest-male.png" alt=""></a>
                <a class="account-icons" href="#"><img src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt=""></a>
                <a class="account-icons" href="#"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt=""></a>
            </div>
        </div>
    </nav>
</header>
</template>

<style scoped>

.page-header .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.category {
    display: flex;
    gap: 10px;
}

.account {
    display: flex;
    gap: 10px;
}

.header-logo{
    width: 200px;
    height: 30px;
}

.page-header{
    background-color: #FF6900;
    color: white;
    position: fixed;
    width: 100%;
    z-index: 9999;
}

.page-header .container{
    height: 50px;
}

.account-icons {
    height: 20px;
    width: 20px;
}
</style>