<template>
    <div class="ps2p" id="gamesDiv">
        <div class="carousel-title bg-gray">
            <div class="icon-text">
                <!-- SVG aqui -->
                <svg width="40" height="40" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_103_115)">
                        <path d="M22.619 48.9718L0 41.1403L22.1258 24.4817L34.1227 0L46.381 20.0282L69 27.8597L46.8756 44.5183L34.8773 69L22.619 48.9718Z" fill="#1D1D1B"/>
                        <path d="M34.5 7.61951L43.7485 22.7294L60.6569 28.5842L43.7485 41.3129L34.5 60.1842L25.2528 45.0742L8.34448 39.2195L25.2528 26.4894L34.5 7.61951Z" fill="#0CF200"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_103_115">
                            <rect width="69" height="69" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span class="text"> GAMES</span>
            </div>
        </div>
        <div id="gameCarousel" class="carousel slide" data-bs-ride="carousel" ref="gameCarousel">
            <!-- Slides -->
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(game, index) in games" :key="game.id" :class="{ active: index === 0 }">
                    <img class="d-block w-100" :src="game.image" alt="Game slide">
                    <div class="carousel-caption d-none d-md-block h-100 m-0 p-0">
                        <div class="carousel-caption-box">
                            <h5 class="game-title p-0 m-0">{{ game.title }}</h5>
                            <p class="game-description p-0 m-0">{{ game.description }}</p>
                            <p class="game-status p-0 m-0">{{ game.status }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a class="carousel-control-btn carousel-control-prev" href="#gameCarousel" role="button" data-bs-slide="prev">
                <div class="PreviousGame">{{PreviousGame}}</div>
                <div class="w-100 previous-arrow"><</div>
            </a>
            <a class="carousel-control-btn carousel-control-next" href="#gameCarousel" role="button" data-bs-slide="next">
                <div class="NextGame">{{NextGame}}</div>
                <div class="w-100 next-arrow">></div>
            </a>
        </div>
        <div id="gameCarousel-mobile">
            <div class="mobile-game" v-for="(game, index) in games" :key="'mobile-' + game.id">
                <img class="mobile-game-img d-block w-100 vh-100" :src="game.image" alt="Game slide">
                <div class="mobile-carousel-caption w-100 h-100">
                    <div class="mobile-carousel-caption-box">
                        <h5 class="game-title p-0 m-0">{{ game.title }}</h5>
                        <p class="game-description game-description-mobile p-0 m-0">{{ game.description }}</p>
                        <p class="game-status game-status-mobile p-0 m-0">{{ game.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

    import gameImage1 from './assets/img/bunkergirl.png';
    import gameImage2 from './assets/img/heartdungeon.png';
    import gameImage3 from './assets/img/rememberme.png';

    export default {
        name: 'GameCarousel',
        data() {
            return {
                games: [
                    { id: 1, title: 'BUNKER GIRL', description: 'CREATE BONDS AND STRENGTHEN YOUR HEART TO DEFEAT THE DUNGEON.', status: 'DEVELOPING', image: gameImage1 },
                    { id: 2, title: 'HEART DUNGEON', description: 'CREATE BONDS AND STRENGTHEN YOUR HEART TO DEFEAT THE DUNGEON.', status: 'DEVELOPING', image: gameImage2 },
                    { id: 3, title: 'REMEMBER ME', description: 'CREATE BONDS AND STRENGTHEN YOUR HEART TO DEFEAT THE DUNGEON.', status: 'DEVELOPING', image: gameImage3 },
                ],
                currentGameIndex: 0, 
                PreviousGame: '',
                NextGame: '',
                gameImage1,
                gameImage2,
                gameImage3
            };
        },
        mounted() {
            let carouselEl = this.$refs.gameCarousel; // Supondo que você tenha uma ref="gameCarousel" no seu elemento de carrossel
            carouselEl.addEventListener('slid.bs.carousel', this.updateCurrentGame);

            const prevIndex = this.currentGameIndex === 0 ? this.games.length -1 : this.currentGameIndex -1;
            const nextIndex = this.currentGameIndex === 2 ? 0 : this.currentGameIndex +1;
            this.PreviousGame = this.games[prevIndex].title;
            this.NextGame = this.games[nextIndex].title;
        },
        beforeUnmount() {
            let carouselEl = this.$refs.gameCarousel;
            carouselEl.removeEventListener('slid.bs.carousel', this.updateCurrentGame);
        },
        methods: {
            updateCurrentGame(event) {
                this.currentGameIndex = [...this.$refs.gameCarousel.querySelectorAll('.carousel-item')].indexOf(event.relatedTarget);
                const prevIndex = this.currentGameIndex === 0 ? this.games.length -1 : this.currentGameIndex -1;
                const nextIndex = this.currentGameIndex === 2 ? 0 : this.currentGameIndex +1;
                this.PreviousGame = this.games[prevIndex].title;
                this.NextGame = this.games[nextIndex].title;
            }
        }
    };
</script>
  
<style scoped>
    .bg-gray{
        background-color: #2F2F2F;
        color: #fff;
    }
    .previous-arrow{
        text-align: right;
        padding-right: 40px;
        font-size: 40px;
    }
    .next-arrow{
        text-align: left;
        padding-left: 40px;
        font-size: 40px;
    }

    .PreviousGame{
        position:absolute;
        top: 120px;
        right:40px;
    }
    .NextGame{
        position:absolute;
        top: 120px;
        left:40px;
    }
    .carousel-item img {
        max-height: 682px; /* Adjust as needed for your design */
        background-color: #fff;
    }
    .carousel-caption {
        background: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
        bottom: 0px;
    }
    .carousel-caption-box{
        position:relative;
        width: 100%;
        height: 100%;
    }
    .status {
        font-weight: bold;
    }
    .carousel-control-btn{
        background-color: #000;
        text-decoration: none;
        opacity: 0.8;
    }
    .game-title, .game-description, .game-status{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    .game-title{
        top: 120px;
    }
    .game-description{
        top: 50%;
    }
    .game-description-mobile{
        transform: translate(-50%, -50%);
    }
    .game-status{
        bottom: 40px;
    }
    .game-status-mobile{
        bottom: 120px;
    }
    @media (max-width: 991.9px) {
        #gameCarousel{
            display: none;
        }      
    }
    @media (min-width: 992px) {
        #gameCarousel-mobile{
            display: none;
        }
    }
    .mobile-game{
        position: relative
    }
    .mobile-carousel-caption{
        background: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
        position: absolute;
        top: 0px;
        color: #fff;
    }
    .mobile-game-img{
        object-fit: cover;
        object-position: center;
    }
    .carousel-title{
        text-align: center;
        height: 70px;
        display: flex !important;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        position: relative
    }
    .icon-text {
        display: flex;
        align-items: center; /* Centraliza o ícone com o texto verticalmente */
    }
    .icon-text svg {
        margin-right: 8px; /* Adiciona um espaço entre o ícone e o texto */
    }
</style>
  