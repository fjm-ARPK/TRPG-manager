const diceRoll = {
  100: document.getElementById('D100'),
   20: document.getElementById('D20'),
   12: document.getElementById('D12'),
   10: document.getElementById('D10'),
    8: document.getElementById('D8'),
    6: document.getElementById('D6'),
    4: document.getElementById('D4'),
    3: document.getElementById('D3')
}

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

const plusDice = {
  100: document.getElementById('plusD100'),
   20: document.getElementById('plusD20'),
   12: document.getElementById('plusD12'),
   10: document.getElementById('plusD10'),
    8: document.getElementById('plusD8'),
    6: document.getElementById('plusD6'),
    4: document.getElementById('plusD4'),
    3: document.getElementById('plusD3')
}

const minusDice = {
  100: document.getElementById('minusD100'),
   20: document.getElementById('minusD20'),
   12: document.getElementById('minusD12'),
   10: document.getElementById('minusD10'),
    8: document.getElementById('minusD8'),
    6: document.getElementById('minusD6'),
    4: document.getElementById('minusD4'),
    3: document.getElementById('minusD3')
}


let result = 0;

plusDice[100].addEventListener('click', () => {
  ++diceQty[100];
  diceQtyArea[100].innerText = `${diceQty[100]}D100`;
})
minusDice[100].addEventListener('click', () => {
  if (diceQty[100] > 1) {
    --diceQty[100];
    diceQtyArea[100].innerText = `${diceQty[100]}D100`;
  }
})

plusDice[20].addEventListener('click', () => {
  ++diceQty[20];
  diceQtyArea[20].innerText = `${diceQty[20]}D20`;
})
minusDice[20].addEventListener('click', () => {
  if (diceQty[20] > 1) {
    --diceQty[20];
    diceQtyArea[20].innerText = `${diceQty[20]}D20`;
  }
})

plusDice[12].addEventListener('click', () => {
  ++diceQty[12];
  diceQtyArea[12].innerText = `${diceQty[12]}D12`;
})
minusDice[12].addEventListener('click', () => {
  if (diceQty[12] > 1) {
    --diceQty[12];
    diceQtyArea[12].innerText = `${diceQty[12]}D12`;
  }
})

plusDice[10].addEventListener('click', () => {
  ++diceQty[10];
  diceQtyArea[10].innerText = `${diceQty[10]}D10`;
})
minusDice[10].addEventListener('click', () => {
  if (diceQty[10] > 1) {
    --diceQty[10];
    diceQtyArea[10].innerText = `${diceQty[10]}D10`;
  }
})

plusDice[8].addEventListener('click', () => {
  ++diceQty[8];
  diceQtyArea[8].innerText = `${diceQty[8]}D8`;
})
minusDice[8].addEventListener('click', () => {
  if (diceQty[8] > 1) {
    --diceQty[8];
    diceQtyArea[8].innerText = `${diceQty[8]}D8`;
  }
})

plusDice[6].addEventListener('click', () => {
  ++diceQty[6];
  diceQtyArea[6].innerText = `${diceQty[6]}D6`;
})
minusDice[6].addEventListener('click', () => {
  if (diceQty[6] > 1) {
    --diceQty[6];
    diceQtyArea[6].innerText = `${diceQty[6]}D6`;
  }
})

plusDice[4].addEventListener('click', () => {
  ++diceQty[4];
  diceQtyArea[4].innerText = `${diceQty[4]}D4`;
})
minusDice[4].addEventListener('click', () => {
  if (diceQty[4] > 1) {
    --diceQty[4];
    diceQtyArea[4].innerText = `${diceQty[4]}D4`;
  }
})

plusDice[3].addEventListener('click', () => {
  ++diceQty[3];
  diceQtyArea[3].innerText = `${diceQty[3]}D3`;
})
minusDice[3].addEventListener('click', () => {
  if (diceQty[3] > 1) {
    --diceQty[3];
    diceQtyArea[3].innerText = `${diceQty[3]}D3`;
  }
})

diceRoll[100].addEventListener('click', () => {
  result = 0;
  resultArea[100].innerText = roll(diceQty[100], 100);
});

diceRoll[20].addEventListener('click', () => {
  result = 0;
  resultArea[20].innerText = roll(diceQty[20], 20);
});

diceRoll[12].addEventListener('click', () => {
  result = 0;
  resultArea[12].innerText = roll(diceQty[12], 12);
});

diceRoll[10].addEventListener('click', () => {
  result = 0;
  resultArea[10].innerText = roll(diceQty[10], 10);
});

diceRoll[8].addEventListener('click', () => {
  result = 0;
  resultArea[8].innerText = roll(diceQty[8], 8);
});

diceRoll[6].addEventListener('click', () => {
  result = 0;
  resultArea[6].innerText = roll(diceQty[6], 6);
});

diceRoll[4].addEventListener('click', () => {
  result = 0;
  resultArea[4].innerText = roll(diceQty[4], 4);
});

diceRoll[3].addEventListener('click', () => {
  result = 0;
  resultArea[3].innerText = roll(diceQty[3], 3);
});

function roll(qty, face) {
  for(let i = 0; i < qty; i++){
    result += Math.floor(Math.random() * 1000) % face + 1;
  }
  return result;
}