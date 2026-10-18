    // assigning the id to a value
    const inputValue = document.getElementById('inputNumber');
    const info = document.getElementById('info');
    const button = document.getElementById('click');

    // creatig the guess number
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let maxNum = 100;
    let minNum = 1;
    let attempts = 0;

    function guessNumber() {
      attempts++;
      const input = Number(inputValue.value);
      if(input > maxNum ||input < minNum) {
        info.textContent = 'Enter A valid Number!!';
        attempts = 0;
      } else {
        if(input > secretNumber) {
        info.textContent = 'Lower';
        } else if (input < secretNumber) {
          info.textContent = 'Higher';
        } 
        else{
          info.textContent = `Correct. It's took ${attempts} attempts`;
          secretNumber = Math.floor(Math.random() * 100) + 1;  
          attempts = 0;
          setTimeout(() => {
            info.textContent = 'Guess another number';
            inputValue.value = '';
          }, 3000);
        }
      }
    }
    console.log(attempts);
    button.addEventListener('click', guessNumber);


    // const secretNumber =  Math.floor(Math.random() * 100);
    // let attempts = 0;
    // let running = true;

    //   function numberGuessing(number) {
    //     attempts++;
    //     if(number > secretNumber) {
    //       console.log('lower');
    //     } else if (number < secretNumber) {
    //       console.log('higher');
    //     } else if(number === secretNumber) {
    //       console.log(`correct!! it's took ${attempts} attempts`);
    //     }

    // }

