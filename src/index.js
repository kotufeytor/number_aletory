      import'./styles.css';
    //   import webpackLogo from './assets/img/webpack-logo.png';
      
    //   const img = document.createElement('img');
    //   img.src=webpackLogo;
    //   document.body.append(img);

      // Your JavaScript goes here

        // Código ramdon

        let randomNumber = Math.floor( Math.random() * 100 ) + 1;

        console.log('primer round', randomNumber);

        // Variables de referencia 

        const guessField  = document.querySelector('.guessField');
        const guessSubmit = document.querySelector('.guessSubmit');    
        const resultParas = document.querySelector('.resultParas');
        const guesses     = document.querySelector('.guesses');
        const lastResult  = document.querySelector('.lastResult');
        const lowOrHi     = document.querySelector('.lowOrHi');


        let guessCount = 1;
        let resetButton;

        guessField.focus();


        function checkGuess() {

               let userGuess = Number(guessField.value);

                if (guessCount === 1) {

                    guesses.textContent='Intentos Previos: ';
                    
                }

                guesses.textContent += userGuess + ' ';

                // randomNumber2=0; //prueba de control

                if (userGuess===randomNumber) {

                    lastResult.textContent='Felicidades Ganaste';
                    lastResult.style.backgroundColor = 'green';
                    lowOrHi.textContent= '';
                    setGameOver();
                    
                }  else if (guessCount === 10 ) {
                    lastResult.textContent='Fin del juego !!!!!';
                    lastResult.style.color = 'blue';
                    setGameOver();
                }else{

                        lastResult.textContent='Incorrecto !!!';
                        lastResult.style.backgroundColor='red';

                        if (userGuess < randomNumber) {
                            lowOrHi.textContent= 'El numero es muy bajo';

                        }else if (userGuess > randomNumber ) {
                            lowOrHi.textContent= 'El numero es muy alto';
                        }

                }

                guessCount++;
                guessField.value = '';
                guessField.focus();


            
        }

 
        guessSubmit.addEventListener('click', checkGuess);

        function setGameOver() {

            guessField.disabled=true;
            guessSubmit.disabled=true;
            resetButton = document.createElement('button');
            resetButton.textContent=' Iniciar un nuevo Juego';
            document.body.append(resetButton);
            resetButton.addEventListener('click',resetGame);

            console.log('Establecer nuevo juego');
            
        }

        function resetGame() {

                guessCount = 1;
                guessField.disabled=false;
                guessSubmit.disabled=false;
                guessField.value='';
                guessField.focus();

                const resetParas = document.querySelectorAll('.resultParas p')

                for (let i = 0; i < resetParas.length; i++) {

                    resetParas[i].textContent='';
                    
                }

                resetButton.parentNode.removeChild(resetButton);

                lastResult.style.backgroundColor = 'white';
            
                randomNumber = Math.floor(Math.random() * 100) + 1;

                console.log('segundo round', randomNumber);
        }

