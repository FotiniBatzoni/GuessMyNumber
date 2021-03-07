$(function () {

    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    let score = 20;
    let highscore = 0;

    const messageEl = $('.message');
    const checkEl = $('.check');
    const guessEl = $('.guess');
    const numberEl = $('.number');
    const highscoreEl = $('.highscore');
    const scoreEl = $('.score');
    const againEl = $('.again');

    let guess;

    const displayMessage = function (message) {
         messageEl.text(message);
    };

    checkEl.on('click', function () {
        guess = Number(guessEl.val());
        //when there is no input
        if (!guess) {
            displayMessage('No Number!');
            document.querySelector('body').style.backgroundColor = '#AD1C18';

            //when player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            numberEl.width(30 +'rem');
            numberEl.text(secretNumber);

            if (score > highscore) {
                highscore = score;
                highscoreEl.text(highscore);
            }

            //when guess is different
        } else if (guess !== secretNumber) {
            if (score > 1) {
                console.log(`start-score=${score}`);
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low...');
                changeBgColor();
                score--;
                console.log(`end-score=${score}`);
                scoreEl.text(score);
            }else {
                scoreEl.text(0) ;
                displayMessage('You Lost :(');
                document.querySelector('body').style.backgroundColor = '#AD1C18';
            }
        }
    });


    guessEl.keypress(function(e) {
        //using Enter
        if (e.keyCode === 13) {
            e.preventDefault();
            e.stopImmediatePropagation();
            checkEl.click();
            console.log("enter");
        }

      });

  

    const changeBgColor= function(){
        console.log(guess, secretNumber);
        guess > secretNumber ? 
        document.querySelector('body').style.backgroundColor = '#E08322'  : 
        document.querySelector('body').style.backgroundColor = '#1436E0';
    };
  


    //Button Again
    againEl.on('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        scoreEl.text( score);
        document.querySelector('body').style.backgroundColor = '#222';
        numberEl.width(15 +'rem');
        guessEl.val("");
        numberEl.text("?");
    });


});