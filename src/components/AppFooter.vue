<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <footer class="footer-bar"> 
        <div class="container">
            <div class="row">
                <div class="company">
                    <p class="company-title">Boolando s.r.l</p>
                    <ul class="company-info">
                        <li><a href="#">Informazioni legali</a></li>
                        <li><a href="#">Informativa sulla privacy</a></li>
                        <li><a href="#">Diritto di recesso</a></li>
                    </ul>
                </div>
                <div class="socials">
                    <p class="socials-title">Trovaci anche su</p>
                    <ul class="socials-icons">
                        <li><a href="#"><img src="https://img.icons8.com/ios/24/FFFFFF/twitterx--v1.png" alt="twitterx--v1"></a></li>
                        <li><a href="#"><img src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/></a></li>
                        <li><a href="#"><img src="https://img.icons8.com/ios/24/FFFFFF/instagram-new--v1.png" alt=""></a></li>
                        <li><a href="#"><img src="https://img.icons8.com/ios-filled/24/FFFFFF/pinterest--v1.png" alt=""></a></li>
                        <li><a href="#"><img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-youtube-is-an-american-video-sharing-and-now-googles-subsidiaries-logo-bold-tal-revivo.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.footer-bar{
    background-color: #1A1A1A;
    color: white;
    margin-top: 20px;

    .row {
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;
    }
}


.socials, .company{
    display: flex;
    flex-direction: column;
}

.socials {
    align-items: flex-start
}

.company-info, .socials-icons{
    display: flex;
    margin-top: 10px;
    gap: 15px;
}

.company-info {
    font-size: 13px;
}

.socials-title {
    padding-right: 15px;
    font-weight: bold;
}

.socials-icons li{
    height: 24px;
    width: 24px;
}


</style>