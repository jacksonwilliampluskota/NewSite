<template>
    <div id="app">
      <header-nav></header-nav>
      <avatar-div></avatar-div>
      <carousel></carousel>
      <services></services>
      <formulario></formulario>
      <footer-div></footer-div>
    </div>
    
</template>
  
  <script>
  import HeaderNav from './Header.vue';
  import AvatarDiv from './AvatarDiv.vue'
  import Carousel from './Carousel.vue';
  import Services from './Services.vue';
  import Formulario from './Formulario.vue';
  import FooterDiv from './FooterDiv.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderNav,
      AvatarDiv,
      Carousel,
      Services,
      Formulario,
      FooterDiv,
    }
  };
  </script>

  <style>

    #app, html {
        background-color: #6B008E;
    }

    .ps2p {
        font-family: "Press Start 2P", system-ui;
        font-weight: 400;
        font-style: normal;
    }

    .montserrat {
        font-family: "Montserrat", system-ui;
        font-weight: 400;
        font-style: normal;
    }
</style>
  