<template>
    <div class="ps2p">
        <div class="cta-div text-center  d-flex">
            <div class="cta-div-box">
                <p>EMBARK ON THE ADVENTURE - EXPLORE NEW WORLDS NOW!</p>
                <p class="cta-desc montserrat">The Twilight Zone - Click and Unlock the Extraordinary!</p>
                <button class="cta-btn" @click="scrollTo('#contactFormContainer')">CONTACT US</button>
            </div>
        </div>
        <div id="servicesDiv">
            <div class="services">
                <img class="services-img d-block w-100 vh-100" :src="servicesImage" alt="service img">
                <div class="services-caption w-100 h-100">
                    <div class="services-caption-box">
                        <h5 class="services-title p-0 m-0">SERVICES</h5>
                        <div class="row services-desc">
                            <div class="col-12 col-md-6">
                                <p>OUTSOURCING ART</p>
                                
                                <p class="montserrat">Illustration</p>
                                <p class="montserrat">Concept Art</p>
                                <p class="montserrat">Game Art</p>
                                <p class="montserrat">Branding</p>
                                <p class="montserrat">Interface (UI/UX)</p>
                                <p class="montserrat">2D Assets And Sprites</p>
                                <p class="montserrat">Animations Frame-By-Frame And Spinepro</p>

                                
                            </div>
                            <div class="col-12 col-md-6">
                                <p>GAME DEVELOPMENT</p>

                                <p class="montserrat">Unreal Engine</p>
                                <p class="montserrat">Godot Engine</p>
                                <p class="montserrat">Game Design Documentation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

    import servicesImage from './assets/img/8aab0c1d599d88db9817fc50848cf7a2.png';
    import { smoothScrollMixin } from './smoothScrollMixin.js';

    export default {
        name: 'Services',
        mixins: [smoothScrollMixin],
        data() {
            return {
                servicesImage,
            };
        }
    };
</script>
  
<style scoped>
    .montserrat {
        padding: 0px;
        margin: 0px;
        font-size: 12px;
        font-weight: 700;
    }

    .services-title{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        top: 120px;
    }
    
    
    .services{
        position: relative
    }
    .services-caption{
        background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
        position: absolute;
        top: 0px;
        color: #fff;
    }
    .services-img{
        object-fit: cover;
        object-position: center;
    }
    .cta-btn {
        background-color: #0CF200;
        color: #000;
        width: 220px;
        border-radius: 0;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }

    .cta-div {
        height: 350px;
        display: flex !important;
        justify-content: center;
    }

    .cta-div-box{
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        color: #fff;
        padding: 40px;
    }

    .cta-div-box p{
        font-size: 24x;
    }

    .services-desc{
        max-width: 100%;
        width:655px;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
    }

    @media(max-width: 767.9px) {
        .services-desc{
            text-align: center !important;
        }
    }
</style>
  