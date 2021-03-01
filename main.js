
const questions = [
  {
    image: 'images/wa1.jpg',
    r: 192, g: 118, b: 121,
    answerImage: 'images/wa1answer.png',
  },
  {
    image: 'images/totoro1.jpg',
    r: 42, g: 83, b: 135,
    answerImage: 'images/totoro1answer.png',
  },
  {
    image: 'images/mommy.jpg',
    r: 254, g: 236, b: 182,
    answerImage: 'images/mommyanswer.png',
  },
  {
    image: 'images/wa2.jpg',
    r: 103, g: 50, b: 15,
    answerImage: 'images/wa2answer.png',
  },
  {
    image: 'images/inception3.jpg',
    r: 73, g: 90, b: 89,
    answerImage: 'images/inception3answer.png',
  },
  {
    image: 'images/dunkirk1.jpg',
    r: 25, g: 36, b: 29,
    answerImage: 'images/dunkirk1answer.png',
  },
  {
    image: 'images/spiritedaway2.jpg',
    r: 168, g: 144, b: 135,
    answerImage: 'images/spiritedaway2answer.png',
  },
  {
    image: 'images/dunkirk2.jpg',
    r: 102, g: 57, b: 20,
    answerImage: 'images/dunkirk2answer.png',
  },
  {
    image: 'images/her1.jpg',
    r: 25, g: 36, b: 29,
    answerImage: 'images/her1answer.png',
  },
  {
    image: 'images/her2.jpg',
    r: 78, g: 132, b: 106,
    answerImage: 'images/her2answer.png',
  },
  {
    image: 'images/inception1.jpg',
    r: 193, g: 166, b: 91,
    answerImage: 'images/inception1answer.png',
  },
  {
    image: 'images/inception2.jpg',
    r: 73, g: 90, b: 89,
    answerImage: 'images/inception2answer.png',
  },
  {
    image: 'images/inter1.jpg',
    r: 107, g: 98, b: 87,
    answerImage: 'images/inter1answer.png',
  },
  {
    image: 'images/inter2.png',
    r: 18, g: 43, b: 89,
    answerImage: 'images/inter2answer.png',
  },
  {
    image: 'images/inter3.png',
    r: 185, g: 132, b: 155,
    answerImage: 'images/inter3answer.png',
  },
  {
    image: 'images/inthemoodforlove.jpg',
    r: 185, g: 131, b: 146,
    answerImage: 'images/inthemoodforloveanswer.png',
  },
  {
    image: 'images/joker.png',
    r: 55, g: 19, b: 20,
    answerImage: 'images/jokeranswer.png',
  },
  {
    image: 'images/inception2.jpg',
    r: 73, g: 90, b: 89,
    answerImage: 'images/inception2answer.png',
  },
  {
    image: 'images/lalaland1.jpg',
    r: 171, g: 80, b: 148,
    answerImage: 'images/lalaland1answer.png',
  },
  {
    image: 'images/lalaland2.jpg',
    r: 247, g: 242, b: 246,
    answerImage: 'images/lalaland2answer.png',
  },
  {
    image: 'images/lalaland3.jpg',
    r: 163, g: 102, b: 58,
    answerImage: 'images/lalaland3answer.png',
  },
  {
    image: 'images/minions.jpg',
    r: 246, g: 235, b: 178,
    answerImage: 'images/minionsanswer.png',
  },
  {
    image: 'images/moonlight.jpg',
    r: 65, g: 118, b: 182,
    answerImage: 'images/moonlightanswer.png',
  }
];

var startPage = document.querySelector('.start-page');
var questionPage = document.querySelector('.question-page');
var resultPage = document.querySelector('.result-page');
var endPage = document.querySelector('.end-page')

var flashColor = document.querySelector('.flash-color');
var questionImage = document.querySelector('.question-image');
var inputWrapper = document.querySelector('.input-color');

questionPage.style.display = 'none';
resultPage.style.display = 'none';
endPage.style.display = 'none';


var selectedQuestion;
var answerColor;
var imageSource;
var answerImageSrc;


function displayQuestion() {

  function randomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return randomIndex
  }

  selectedQuestion = questions.splice(randomQuestion(), 1)[0];

  answerColor = `rgb(${selectedQuestion.r}, ${selectedQuestion.g}, ${selectedQuestion.b})`
  imageSource = `${selectedQuestion.image}`;
  answerImageSrc = `${selectedQuestion.answerImage}`

  flashColor.style.display = 'block'
  flashColor.style.backgroundColor = answerColor;

  startPage.style.display = 'none';
  questionPage.style.display = 'block'
  resultPage.style.display = 'none'

  questionImage.style.display = 'none';
  inputWrapper.style.display = 'none';

  function hideColor() {
    flashColor.style.display = 'none';
    questionImage.setAttribute("src", imageSource);
    questionImage.style.display = 'block';
    inputWrapper.style.display = 'block';
  }
  setTimeout(hideColor, 3000);
}

var resultMessage = document.querySelector('.result-phrase');
var roundKeeper = document.querySelector('.round');
var answerImage = document.querySelector('.answer-image')

var round = 0;


function checkSubmittedColor() {
  questionPage.style.display = 'none'
  resultPage.style.display = 'inline'
  answerImage.setAttribute("src", answerImageSrc)
  var submittedColor = document.querySelector('.color-input').value
  // sourced from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var rgbSubmittedColor = hexToRgb(submittedColor)

  function comparingRGBValues() {
    if ((selectedQuestion.r === rgbSubmittedColor.r) && (selectedQuestion.g === rgbSubmittedColor.g) &&
      (selectedQuestion.b === rgbSubmittedColor.b)) {
      resultMessage.innerHTML = 'Unbelievable! Your color is exactly the same!';
    } else if (((selectedQuestion.r - 30) < (rgbSubmittedColor.r)) && ((rgbSubmittedColor.r) < (selectedQuestion.r + 30)) && ((selectedQuestion.g - 30) < (rgbSubmittedColor.g)) && ((rgbSubmittedColor.g) < (selectedQuestion.g + 30)) && ((selectedQuestion.b - 30) < (rgbSubmittedColor.b)) && ((rgbSubmittedColor.b) < (selectedQuestion.b + 30))) {
      resultMessage.innerHTML = 'You are right! Correct Color! :)';
    } else {
      resultMessage.innerHTML = 'Different from the flashed color :(';
    }
  }
  comparingRGBValues();

  round += 1;
  roundKeeper.innerHTML = `Round ${round}`;
}


function nextRound() {
  displayQuestion();
  if (round === 5) {
    questionPage.style.display = 'none';
    resultPage.style.display = 'none';
    endPage.style.display = 'block';
  }
}

function refreshPage() {
  location.reload();
}
