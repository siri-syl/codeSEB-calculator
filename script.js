const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if (operator === '+'){
    result = Number(n1) + Number(n2);
  }else if(operator === '-'){
    result = Number(n1) - Number(n2);
  }else if(operator === '*'){
    result = Number(n1) * Number(n2);
  }else if(operator === '/'){
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

let firstNumber1 = "";
let secondNumber1 = "";
let op1 = "";
  

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.
    

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      
      console.log('숫자 ' + buttonContent + ' 버튼');
      
      if(firstNumber1 === "" && secondNumber1 === ""){
        firstOperend.textContent = buttonContent;
        firstNumber1 = buttonContent;
        console.log(firstNumber1);
      } else if(firstNumber1!== "" && secondNumber1 === ""){
        secondOperend.textContent = buttonContent;
        secondNumber1 = buttonContent
        console.log(secondNumber1);
      }
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
      op1 = buttonContent;
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
      // 숫자가 입력되어 있을 때
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = 0;
      secondOperend.textContent = 0;
      calculatedResult.textContent = 0;
      operator.textContent = '+';
      firstNumber1 = "";
      secondNumber1 = "";
      op1 = "";
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent = calculate(firstNumber, op, secondNumber);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

let deci = false;  // 소수점let firstNumber1 = "";
let firstNumber = "";
let secondNumber = "";
let op = "";

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.


  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      console.log('숫자 ' + buttonContent + ' 버튼');
      if(firstNumber === "" && secondNumber === ""){
        display.textContent = buttonContent;
        firstNumber = buttonContent;
        console.log(firstNumber);
      }else if(firstNumber !== "" && op === ""){
        display.textContent += buttonContent;
        firstNumber += buttonContent;
        console.log(firstNumber);
      }else if(secondNumber === "" && op !== ""){
        display.textContent = buttonContent;
        secondNumber = buttonContent;
        console.log("두 번째 숫자" + secondNumber);
      }else if(secondNumber !=="" && op !== ""){
        display.textContent += buttonContent;
        secondNumber += buttonContent;
        console.log("두 번째 숫자" + secondNumber);
      }
    }
    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      if(firstNumber !== "" && secondNumber !== ""){
        previousNum = calculate(firstNumber, op, secondNumber);
        firstNumber = previousNum;
        secondNumber = "";
        operator.textContent = buttonContent;
        op = buttonContent;
        deci = false;
      }else {
      operator.textContent = buttonContent;
      op = buttonContent;
      console.log(operator);
      previousKey = 'operator';
      deci = false;
      }
    }
    if (action === 'decimal') {
      if(deci === false && firstNumber === ""){
        firstNumber = '0.';
        display.textContent = firstNumber;
        deci = true;
        console.log('소수점 첫 번째문');
      }else if(deci === false && firstNumber !== "" && op !== "" && secondNumber === ""){
        secondNumber = '0.';
        display.textContent = secondNumber;
        deci = true;
        console.log('소수점 두 번째문');
      }else if(deci === false && op === "" && firstNumber !== ""){
        display.textContent = firstNumber + '.';
        firstNumber = firstNumber + '.';
        deci = true;
        console.log('소수점 세 번째문');
      }else if(deci === false && op !== "" && secondNumber !== ""){
        display.textContent = secondNumber + '.';
        secondNumber = secondNumber + '.';
        deci = true;
        console.log('소수점 네 번째문');
    }
  }
    if (action === 'clear') {
      console.log('초기화 버튼');
      display.textContent = 0;
      operator.textContent = '+';
      firstNumber = "";
      secondNumber = "";
      op = "";
      deci = false;
    }
    if (action === 'calculate') {
      console.log('계산 버튼');
      if (previousKey !== 'calculate' && secondNumber !== "") {
        display.textContent = calculate(firstNumber, op, secondNumber);
        previousKey = 'calculate';
        previousNum = calculate(firstNumber, op, secondNumber);
        console.log('첫 번째 계산문')
      } else if (previousKey === 'calculate'){
        display.textContent = calculate(previousNum, op, secondNumber);
        previousKey = 'calculate';
        console.log('두 번째 계산문')
        previousNum = calculate(previousNum, op, secondNumber);
      } else if (secondNumber === "" && previousKey === 'operator'){
        display.textContent = calculate(firstNumber, op, firstNumber);
        previousKey = 'calculate';
        console.log('세 번째 계산문')
        previousNum = calculate(firstNumber, op, firstNumber);
      }
    }
  }
});