// 랜덤 숫자 만들기 v
// 1-100 숫자 입력하기 v
// 랜덤숫자 = 입력숫자  -> 정답입니다 v
// 랜덤숫자 > 입력숫자  -> up! v
// 랜덤숫자 < 입력숫자  -> down! v
// 입력할 때마다 기회 감소 v
// 숫자입력 5번 하면 go버튼 비활성화 v
// 리셋버튼 누르면 다시 시작 V
// 1-100 숫자 입력안하면 알려주고 기회 없애지 않음 v
// 입력된 숫자를 또 입력하면 알려주고 기회 없애지 않음 v

let computerNum = 0
let chances = 5
let inputNum = document.getElementById("input-num");
let playButton = document.getElementById("play-button");
let resultOpen = document.getElementById("result-open");
let chanceOpen = document.getElementById("chance-open");
let gameOver = false;
let resetButton = document.getElementById("reset-button");
let history = [];

getRandomNum();
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
inputNum.addEventListener("focus",function() {inputNum.value=""})

function getRandomNum() {
    computerNum = Math.floor(Math.random()*100+1);
    console.log("정답",computerNum);
}

function reset() {
    resultOpen.textContent = "숫자를 맞춰보세요";
    chanceOpen.textContent = "남은기회 : 5번"
    chances = 5
    playButton.disabled = false;
}

function play(){

    let inputNumValue = inputNum.value;

    if (inputNum<1 || inputNum>100){
        resultOpen.textContent = "1부터 100 사이의 숫자를 입력해주세요"
        return;
    }

    if (history.includes(inputNum.value)) {
        resultOpen.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    chances--;
    chanceOpen.textContent = `남은 기회 ${chances}번`
    
    if (inputNumValue > computerNum) {
        resultOpen.textContent="DOWN!";
    } else if (inputNumValue < computerNum) {
        resultOpen.textContent="UP!";
    } else {
        resultOpen.textContent="정답입니다!";
    }

    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }

    history.push(inputNum.value);
    console.log(history);
}
