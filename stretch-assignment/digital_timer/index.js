let tens = document.getElementById('secondTens');
let ones = document.querySelector('#secondOnes');

let hundreds = document.getElementById("msHundreds");
let tenths = document.getElementById("msTens");
let start = document.getElementById("start");
// let x = 10;
let myFunc = setInterval(setTime, 10);
console.log (myFunc);

let timerRunning = false;


let totalTime = 0;
let tenthsVal = 0;
let hundredsVal = 1;
console.log(totalTime);
let onesVal = 1;
let tensVal = 1;
const digits = document.querySelectorAll('.digit');


// console.log (digits);

// console.log(timerRunning);



function startTimer () {
    console.log('start');
  
  // clearInterval(myFunc);
  // setInterval(setTime, 10);
  timerRunning = true;
  console.log ('start', timerRunning);
};
         
function stop () {
  // clearInterval(myFunc);
  timerRunning = false;
  console.log ('stop', timerRunning);
};

function reset () {
  console.log ('reset');
  stop ();  
  clearInterval(myFunc);
  myFunc = setInterval(setTime, 10);
console.log('reset', timerRunning);
totalTime = 0;
tenthsVal = 0;
hundredsVal = 1;
onesVal = 1;
tensVal = 1;
  ones.textContent = 0;
tens.textContent = 0;
hundreds.textContent = 0;
tenths.textContent = 0;
digits.forEach((el) => {
        el.style.color = 'black';
      
      });


};
        
                 
function setTime () {
  
  if (timerRunning) {
    if (totalTime >=1000) {
      return;
    };
    
    ++totalTime;
    console.log(totalTime);
   
    tenths.textContent = (totalTime % 10);
    if (totalTime % 10 == 0) {
      hundreds.textContent = (hundredsVal++);
      if (totalTime % 100 == 0) {
        ones.textContent = (onesVal++);
        hundreds.textContent = 0;
        hundredsVal = 1;
      }
      if (totalTime % 1000 == 0) {
        tens.textContent = (tensVal++);
        ones.textContent = 0;
        onesVal = 1;
        digits.forEach((el) => {
          el.style.color = 'red';
          timerRunning = false;
          clearInterval(myFunc);
        });
      };
    };
  };
  };


