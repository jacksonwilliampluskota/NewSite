<template>
    <div id="avatar-div">
        <div class="avatar-div-box">
            <div class="avatar-text ps2p">
                <p ref="heroText1"></p>
                <p ref="heroText2"></p>
                <button class="cta-btn hero-button" @click="scrollTo('#contactFormContainer')">CONTACT US</button>
            </div>
            <div class="hero-div">
                <img class="hero-img" :src="heroUrl" alt="hero image">
            </div>
        </div>
    </div>
</template>
  
<script>

    import heroUrl from './assets/img/6d60b96d00545bd8275f86b9d9b78da3.png';
    import { smoothScrollMixin } from './smoothScrollMixin.js';

    export default {
        name: 'AvatarDiv',
        mixins: [smoothScrollMixin],
        data() {
            return {
                heroUrl
            }
        },
        mounted() {
            const el = this.$refs.heroText1;
            setInterval(() => {
                setTimeout(() => {
                    el.innerHTML = '</br></br></br>';
                }, 200);

                setTimeout(() => {
                    el.innerHTML = 'SMALL GAME</br>STUDIO FROM</br>BRAZIL.';
                }, 400);
            }, 1000);

                this.typeAnimation(this.$refs.heroText2, 'LIVING ADVENTURES AND TELLING STORIES IN FANTASTIC UNIVERSES.| |STILL IN 2024, A NEW STORY IS BEING BORN.');

            const vm = this;
            setInterval(() => {
                vm.$refs.heroText2.innerHTML = '';
                vm.typeAnimation(vm.$refs.heroText2, 'LIVING ADVENTURES AND TELLING STORIES IN FANTASTIC UNIVERSES.| |STILL IN 2024, A NEW STORY IS BEING BORN.');
            }, 15000);
    
        },
    };
</script>

<style>
    .cursor {
        opacity: 1;
        animation: blinkAnimation 1s infinite;
    }

    @keyframes blinkAnimation {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }


    .avatar-text {    
        color: #fff;
        width: 300px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .avatar-text p {
        margin: 20px 0 20px;
    }
    #avatar-div{
        display: flex !important;
        justify-content: center;
        max-height: 400px;
        transform: translateY(-40px);
    }
    .avatar-div-box{
        display: flex;
        max-width: 1024px;
    }
    .hero-img{
        height: 1000px;
        width: auto;
    }
    @media(max-width: 991.9px){
        .hero-img{
            height: 400px;
            width: auto;
        }
        .avatar-text{
            width: 165px !important;
        }

        #avatar-div {
            height: 480px !important;
            max-height: none !important;
        }

        .hero-div{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media(max-width: 414px){
        .hero-img {
            height: 315px;
        }
    }

    .cta-btn {
        background-color: #0CF200;
        color: #000;
        width: 220px;
        margin-right: auto;
        border-radius: 0;
        padding: 10px;
        z-index: 1;
    }

    .hero-button{
        position: absolute;
        bottom: 0px;
    }
</style>