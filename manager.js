let diceQty = {
  100: 1,
   20: 1,
   12: 1,
   10: 1,
    8: 1,
    6: 1,
    4: 1,
    3: 1
}

const diceQtyArea = {
  100: document.getElementById('QD100'),
   20: document.getElementById('QD20'),
   12: document.getElementById('QD12'),
   10: document.getElementById('QD10'),
    8: document.getElementById('QD8'),
    6: document.getElementById('QD6'),
    4: document.getElementById('QD4'),
    3: document.getElementById('QD3')
}

const resultArea = {
  100: document.getElementById('D100R'),
   20: document.getElementById('D20R'),
   12: document.getElementById('D12R'),
   10: document.getElementById('D10R'),
    8: document.getElementById('D8R'),
    6: document.getElementById('D6R'),
    4: document.getElementById('D4R'),
    3: document.getElementById('D3R')
}

const judge = {
  attributeInput: document.getElementById('attribute'),

  area : {
  0: document.getElementById('judge01'),
  1: document.getElementById('judge10'),
  2: document.getElementById('bonusA'),
  3: document.getElementById('bonusB'),
  },

  box : {
    0: document.getElementById('bonusBoxA'),
    1: document.getElementById('bonusBoxB')
  },

  result: document.getElementById('judgeR'),
  rate: document.getElementById('judgeRate')
}

const bonusStates = {
  4:['#AEFFBD', '#AEFFBD'],
  3:['#AEFFBD', '#777777'],
  2:['#777777', '#777777'],
  1:['#FFABCE', '#777777'],
  0:['#FFABCE', '#FFABCE']
}

const rollSound = new Audio('se/rollSound.mp3');

let bonus = 0;


function judgeButton () {
  let attribute = judge.attributeInput.value;
  let resultBox = 0;
  let firstRank = 0;
  let tenthRank = []
  let finalResult = 0;

  if (0 < attribute && attribute < 1001) {

    //ダイスを個数分ロール
    for(let i = 0; i < 2 + Math.abs(bonus); ++i){
      result = 0;
      resultBox = roll(1, 10) - 1;
      if(i === 0){
        firstRank = resultBox
        judge.area[i].innerText = resultBox;
      }
      else{
        judge.area[i].innerText = resultBox + "0";
        tenthRank.push(resultBox);
      }
    }

    //十の位を並び替え
    tenthRank.sort(compareFunc);

    //ボーナス，ペナルティを加味して結果を算出
    if(0 < bonus){
      finalResult = tenthRank[0] * 10 + firstRank;
    }
    else{
      finalResult = tenthRank[tenthRank.length - 1] * 10 + firstRank;
    }

    //結果が0の場合，100に修正
    if(finalResult === 0){
      finalResult = 100;
    }

    //結果と能力値を比較して成功率を表示
    judge.rate.innerText = '';
    const rateArea = document.createElement('h5');

    if(finalResult <= 5){
      rateArea.style.cssText = "color: yellow";
      rateArea.innerText = 'クリティカル!!!';
    }
    else if(finalResult <= Math.floor(attribute / 5)){
      rateArea.style.cssText = "color: lime";
      rateArea.innerText = 'イクストリーム!!';
    }
    else if(finalResult <= Math.floor(attribute / 2)){
      rateArea.style.cssText = "color: aqua";
      rateArea.innerText = 'ハード!';
    }
    else if(finalResult <= Math.floor(attribute)){
      rateArea.style.cssText = "color: white";
      rateArea.innerText = 'レギュラー';
    }
    else if(finalResult === 100 || (95 < finalResult)){
      rateArea.style.cssText = "color: red";
      rateArea.innerText = 'ファンブル!!!';
    }
    else{
      rateArea.style.cssText = "color: orange";
      rateArea.innerText = '失敗!';
    }

    judge.result.innerText = finalResult;
    judge.rate.appendChild(rateArea);
  }
  else{
    diceReset();
    return;
  }
}

//ボーナス・ペナルティボタン
function bonusButton(fluctuation){
  bonus = bonus + fluctuation
  if(2 < bonus){
    bonus = 2;
  }
  if(bonus < -2){
    bonus = -2;
  }
  bonusUpdate(bonus + 2);
}

//ボーナス・ペナルティ表示
function bonusUpdate(states) {
  //diceReset();

  for(let i = 0; i < 2; ++i){
    if(bonusStates[states][i] === '#777777'){
      judge.area[i + 2].innerText = '';
    }
    judge.box[i].style.cssText = 'background: ' + bonusStates[states][i];
  }

}

function diceReset(){
  judge.result.innerText = '';
  judge.rate.innerText = '';
  for(let i = 0; i < 4; ++i){
    judge.area[i].innerText = '';
  }
}

//ダイスロールボタン
function rollButton(face) {
  resultArea[face].innerText = roll(diceQty[face], face);
}

//ダイス数ボタン
function qtyButton(face, fluctuation){
  diceQty[face] = diceQty[face] + fluctuation;

  if(diceQty[face] === 0){
    diceQty[face] = 1;
  }
  if(diceQty[face] === 1000){
    diceQty[face] = 999;
  }

  diceQtyArea[face].innerText = diceQty[face] + 'D' + face
}

//ダイスロール関数
function roll(qty, face) {
  let result = 0;
  let log = [];

  for(let i = 0; i < qty; i++){
    log.push(Math.floor(Math.random() * 1000) % face + 1);
  }

  result = log.reduce( (sum, element) => {
    return sum + element;
  }, 0);

  console.log(`${qty}D${face}[${log}]=>${result}`);
  return result;
}

//並び替え関数
function compareFunc(a, b) {
  return a - b;
}