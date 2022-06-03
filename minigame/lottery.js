const userName = prompt('Enter your name');
document.querySelector('.username').textContent = `Welcome ${userName}`;
document.querySelector('.again').addEventListener('click', function () {
  let coinCount = Number(document.querySelector('.coins').textContent);
  const number1 = Math.trunc(Math.random() * 10 + 1);
  const number2 = Math.trunc(Math.random() * 10 + 1);
  const num1 = Number((document.querySelector('.one').textContent = number1));
  const num2 = Number((document.querySelector('.two').textContent = number2));
  if (coinCount >= 100) {
    if (num1 === num2) {
      document.querySelector('.result').textContent = 'You won';
      coinCount = coinCount + 200;
      document.querySelector('.coins').textContent = coinCount;
    } else {
      document.querySelector('.result').textContent =
        'You Lost Give another try';
      coinCount = coinCount - 100;
      document.querySelector('.coins').textContent = coinCount;
    }
  } else {
    document.querySelector('.one').textContent = '-';
    document.querySelector('.two').textContent = '-';
    document.querySelector('.result').textContent = 'Out of Coins, buy some';
  }
});
