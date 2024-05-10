<template>
    <footer class="footer">
        <div class="container">
            <div class="logo">
                <!-- Substitua 'logo.png' pelo seu arquivo de logotipo -->
                <img :src="FooterlogoUrl" alt="Sanplus Game Studio Logo" />
            </div>
            <div class="div-copy">
                <div class="copyright ps2p">
                    <p>© SANPLUS GAME STUDIO. ALL RIGHTS RESERVED 2023</p>
                </div>
                <div class="social-media">
                    <!-- Adicione os links corretos para suas redes sociais -->
                    <a href="https://www.instagram.com/sanplusgames/" target="_blank" aria-label="Instagram">
                        <img :src="instaUrl" alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/SanplusGames/" target="_blank" aria-label="Twitter">
                        <img :src="inUrl" alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/sanplusgames/" target="_blank" aria-label="LinkedIn">
                        <img :src="xUrl" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>

import FooterlogoUrl from './assets/img/0a7581ffb2a3b9498c1a539b47853e58.png';
import instaUrl from './assets/img/insta.png';
import inUrl from './assets/img/in.png';
import xUrl from './assets/img/x.png';


    export default {
        name: 'FooterDiv',
        data() {
            return {
                FooterlogoUrl,
                instaUrl,
                inUrl,
                xUrl,
            };
        },
        methods: {
        }
    }
</script>
  
<style scoped>
    @media(max-width: 767.9px){
        .container{
            flex-direction: column;
            padding:40px;
        }

        .logo img {
            /* Ajuste a largura conforme necessário */
            width: 150px !important;
        }

        .copyright {
           font-size: 14px;
           margin-bottom:40px;
           margin-top:40px;
        }

        .social-media img {
            /* Ajuste a largura conforme necessário */
            width: 55px !important;
        }
    }
    .footer {
        background-color: #000;
        color: #fff;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 413px;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        max-width:1030px;
    }
    .logo img {
        /* Ajuste a largura conforme necessário */
        width: 250px;
    }
    .social-media a {
        margin: 0 10px;
    }
    .social-media img {
        /* Ajuste a largura conforme necessário */
        width: 40px;
    }
    .div-copy{
        text-align: center;
    }
</style>
  