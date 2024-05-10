<template>
    <div :class="{'scrolled': scrolled, 'show': isMenuOpen}">
        <nav class="navbar navbar-expand-lg w-100 navbar-header d-block ps2p" :class="{'show': isMenuOpen}">
            <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="d-flex w-100 bg-green navbar-ret justify-content-around">
    
                    <a class="nav-link" href="#" @click="scrollTo('#app')"><img class="navbar-logo navbar-logo-mobile" :src="logoUrl" alt="Logo"></a>
    
                    <button class="navbar-toggler" type="button" @click="toggleMenu">
                        <img class="navbar-toggler-img" :src="buttonUrl" alt="button">
                    </button>
        
                    <div class="collapse navbar-collapse bg-green" :class="{'show': isMenuOpen}" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item nav-item-logo m-4">
                                <a class="nav-link" href="#" @click="scrollTo('#app')"><img class="navbar-logo navbar-logo-desktop" :src="logoUrl" alt="Logo"></a>
                            </li>
                            <li class="nav-item m-4">
                                <a class="nav-link" href="#" @click="scrollTo('#gamesDiv')">GAMES</a>
                            </li>
                            <li class="nav-item m-4">
                                <a class="nav-link" href="#" @click="scrollTo('#servicesDiv')">SERVICES</a>
                            </li>
                            <li class="nav-item m-4">
                                <a class="nav-link" href="#" @click="scrollTo('#aboutDiv')">ABOUT</a>
                            </li>
                            <li class="nav-item m-4">
                                <a class="nav-link" href="#" @click="scrollTo('#contactFormContainer')">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script>
    import logoUrl from './assets/img/4f531460830ee21f5854e0e3f5db894a.png';
    import buttonUrl from './assets/img/button.png';
    import { smoothScrollMixin } from './smoothScrollMixin.js';

    export default {
        name: 'HeaderNav',
        mixins: [smoothScrollMixin],
        data() {
            return {
                logoUrl,
                buttonUrl,
                isMenuOpen: false,
                scrolled: false
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            handleScroll() {
                this.isMenuOpen = false;
                this.scrolled = window.scrollY > 500;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>
  
<style>
.scrolled{
    padding-bottom: 250px;
}
.scrolled .navbar{
    position: fixed;
    z-index: 3;
}

.scrolled .navbar-logo-mobile{
    height: 80px;
    transform: translateY(13px);
    position: relative;
}

.scrolled .navbar-logo-desktop{
    position: absolute;
    transform: translate(-100%, -4px);
    height: 70px;
}

.scrolled .navbar-header{
    height: 70px;
}

.scrolled .navbar-toggler-img{
    transform: translateY(5px);
}

.scrolled .navbar-ret {
    background-color: #a1a1a1c2;
}

.scrolled .bg-green {
    background-color: #a1a1a1c2;
}

.scrolled .show .navbar-ret {
    background-color: #0CF200;
}

.scrolled .show .bg-green {
    background-color: #0CF200;
}

.navbar.show {
    margin-bottom: 400px;
}

.bg-green{
    background-color: #0CF200;
}

.navbar-ret{
    position: relative;
    height: 75px;
}

#navbarNav{
    justify-content: center !important;
    padding-left:198px;
}

.navbar-header{
    height: 231px;
}

.navbar-logo{
    height: 231px;
    z-index: 1
}

/* Estilos para o botão do menu de hamburger */
.navbar-toggler {
    border: none;
    background-color: transparent;
    box-shadow: none !important;
}

/* Garante que o menu seja exibido verticalmente em dispositivos móveis */
.navbar-nav {
    flex-direction: column;
}

/* Esconde o menu em telas grandes */
@media (min-width: 992px) {
    .navbar-toggler, .navbar-logo-mobile {
        display: none;
    }
}
@media (max-width: 991.9px) {
    .navbar-ret{
        height: 94px;
    }
    
    .navbar-logo-desktop, .nav-item-logo{
        display: none;
    }
    #navbarNav{
        position: absolute;
        top: 75px;
        width: 100%;
        padding: 0px !important;
        padding-top: 90px !important;
        z-index: 0;
}
    .nav-link {
        text-align: center;
    }
}


.navbar-logo-mobile {
    transform: translateY(-75px);
    position: relative;
}

.navbar-logo-desktop{
    position: absolute;
    bottom:0px;
    transform: translate(-100%, 75px);
}
</style>

  