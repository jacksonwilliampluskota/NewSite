<template>
    <div id="formulario-div" class="ps2p">
      <div class="contact-form-container" id="contactFormContainer" @submit.prevent="submitForm">
        <div class="contact-form-div h-100">
            <img class="form-icon pt-3 pb-3" :src="iconUrl" alt="icon" width="70px">
            <form class="contact-form">
                <p class="pb-3 pt-3">NEED TO DEVELOP YOUR GAME?</p>
                <p class="pb-3 pt-3">COME TALK TO US.</p>
                <input class="" v-model="formData.name" type="text" required placeholder="NAME" />
                <input class="" v-model="formData.email" type="email" required placeholder="EMAIL" />
                <textarea class="d-block" v-model="formData.message" required placeholder="MESSAGE" rows="6"></textarea>
                <button class="submit-form-btn" type="submit">CONTACT US</button>
            </form>
        </div>
        <div class="info-div" id="aboutDiv">
            <img class="form-icon pt-3 pb-3" :src="iconLogoUrl" alt="icon" width="250px">
            <div class="info montserrat div-info-text">
                <p>Sanplus is a small original game development studio created in 2019.</p>
                <p>Located in the southern region of Brazil in a city called Ponta Grossa, we always seek to create games prioritizing creativity and quality.</p>
                <p>Our main product is authorial games, but we also work with service provision for the gaming area: Concept and Game Art, Programming, UI and UX Design, Game Design and others.</p>
                <p>In addition to digital games, we also have experience in developing analog games such as: Board games and tabletop RPGs.</p>
                <!-- ... More text content ... -->
            </div>
        </div>
      </div>
    </div>
</template>
  
<script>
    import iconUrl from './assets/img/icon.png';
    import iconLogoUrl from './assets/img/9faf23241a7970201ae48571555d3265.png';
    import axios from 'axios';
    import Swal from 'sweetalert2';

    export default {
        name: 'ContactForm',
        data() {
            return {
                iconUrl,
                iconLogoUrl,
                formData: {
                    name: '',
                    email: '',
                    message: ''
                }
            };
        },
        methods: {
            submitForm() {
                Swal.fire({
                    title: 'Enviando email...',
                    html: 'Aguarde um momento',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                        document.querySelector('.swal2-popup').classList.add('ps2p');
                    }
                });
            axios.post('https://sanplus.com.br/send-email', this.formData)
                .then(response => {
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Email enviado com sucesso.',
                        didOpen: () => {
                            // Aplicar sua classe personalizada ao popup do SweetAlert2
                            document.querySelector('.swal2-popup').classList.add('ps2p');
                        }
                    });  
                console.log('Email enviado com sucesso:', response);
                // Tratamento de sucesso (ex: limpar o formulário, mostrar mensagem de sucesso)
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Não foi possível enviar o email. Tente novamente mais tarde.',
                        didOpen: () => {
                            // Aplicar sua classe personalizada ao popup do SweetAlert2
                            document.querySelector('.swal2-popup').classList.add('ps2p');
                        }
                    });  
                console.error('Erro ao enviar o email:', error);
                // Tratamento de erro (ex: mostrar mensagem de erro)
                });
            }
        }
    } 
</script>
  
  <style scoped>
  /* Base styles for responsiveness */
  .contact-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 992px;
    font-size: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%; /* Full width on mobile */
    max-width: 500px; /* Max width on larger screens */
    margin-bottom: 20px;
    text-align:center;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }
  
  h2, h3, p {
    margin: 10px 0;
  }
  
  input, textarea {
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    cursor: pointer;
  }
  
  /* Media queries for responsiveness */
  @media (min-width: 768px) {
    .contact-form-container {
      flex-direction: row;
    }
    .contact-form-div, .info-div {
      width: calc(45% - 10px); /* Subtracting the padding */
      flex-grow: 1;
      padding: 40px;
    }

    .info-div{
      padding: 0px;
    }
  }

  @media (max-width: 767.9px) {
    .contact-form{
        width: calc(100% - 40px);
    }
    input, textarea {
        width:100%
    }
  }

  .contact-form-div, .info-div {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }

  .contact-form-div {
    background-color: #333;
    color: white;
  }

  .div-info-text{
    max-width: 350px;
    color: #fff;
  }

    #formulario-div {
        display: flex !important;
        justify-content: center;
        padding-top: 80px;
        padding-bottom: 80px;
    }

    input, textarea {
        border-radius: 40px;
        padding:25px;
        font-size: 16px;
        background-color: #ebebeb;
    }

    .submit-form-btn {
        background-color: #0CF200;
        color: #000;
        width: 280px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0;
    }
    .swal2-html-container {
        line-height: inherit
    }
  </style>
  