export const smoothScrollMixin = {
    methods: {
        typeAnimation(element, text) {
            let i = 0;
            element.innerHTML = '<span class="cursor">|</span>'; // Adiciona o cursor desde o início

            const typing = () => {
                if (i < text.length) {
                    const speedVariations = [25, 25, 25, 100, 50, 150]; // Velocidades possíveis
                    const randomSpeed = speedVariations[Math.floor(Math.random() * speedVariations.length)]; // Seleciona uma velocidade aleatoriamente

                    if (text.charAt(i) === '|') { // Substitui o marcador por uma quebra de linha real
                        element.innerHTML = element.innerHTML.replace('<span class="cursor">|</span>', '<br><span class="cursor">|</span>');
                    } else {
                        // Insere o caractere na posição antes do cursor
                        element.innerHTML = element.innerHTML.replace('<span class="cursor">|</span>', text.charAt(i) + '<span class="cursor">|</span>');
                    }
                    i++;
                    
                    setTimeout(typing, randomSpeed); // Continua com a próxima letra após um intervalo aleatório
                }
            };

            typing(); // Inicia a "digitação"
        },
        // Método para iniciar o scroll suave. Espera um seletor ou um elemento.
        scrollTo(target) {
            this.isMenuOpen = false;
            const element = typeof target === 'string' ? document.querySelector(target) : target;
            if (element) {
                this.smoothScrollTo(element);
            } else {
                console.error('Elemento não encontrado:', target);
            }
        },
        smoothScrollTo(element) {
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset -80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // A duração da animação em milissegundos.
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);

                window.scrollTo(0, run);

                if (timeElapsed < duration) window.requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            window.requestAnimationFrame(animation);
        }
    }
};
  